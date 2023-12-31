package App.dao;

import App.dto.UsuarioDTO;
import App.dto.UsuarioRequestDTO;
import App.models.Usuario;
import App.security.EmailValidatorSecurity;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class UsuarioDAO extends DAO{
    public UsuarioDAO() {
        super();
        conectar();
    }


    public boolean insert(Usuario user) {
        boolean resp = false;
        if( EmailValidatorSecurity.validateEmail(user.getLogin()) == true && user.getPassword() != " " ) {
            try{
                Statement status = conexao.createStatement();
                String sql = "INSERT INTO usuario (login, senha, cpf, nome) "
                        + "VALUES ('"+user.getLogin() + "', '"
                        + DAO.toMD5(user.getPassword()) + "', '" +  user.getCpf() + "', '"+ user.getNome() + "');";
                
                System.out.println(sql);
               
                status.executeUpdate(sql);
                status.close();
                resp = true;
            
            } catch (SQLException e) { throw new RuntimeException(e); }
            catch(Exception e) { System.out.println(e.getMessage());} 
        } else { System.out.println("ERROR:Email inserido invalido!");}

        return resp;
    }

    public boolean autenticar(UsuarioRequestDTO usuarioReqDTO) {
        boolean resp = false;
        if(EmailValidatorSecurity.validateEmail(usuarioReqDTO.getLogin()) && usuarioReqDTO.getPassword() != " "){
             try {
                Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            
                String sql = "SELECT * FROM usuario WHERE login LIKE '" + usuarioReqDTO.getLogin() + "' AND senha LIKE '" + DAO.toMD5(usuarioReqDTO.getPassword()) + "'";
                System.out.println(sql);
            
                ResultSet rs = st.executeQuery(sql);
                resp = rs.next();
                st.close();
        
            } catch(Exception e) { System.err.println(e.getMessage()); }
        }

        return resp;
    }

    public UsuarioDTO getProfileDTO(String login) {
        if(EmailValidatorSecurity.validateEmail(login)) {
            try{
                Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
                String sql = "SELECT login, nome FROM usuario WHERE login LIKE '" + login + "';";
                System.out.println(sql);
                
                ResultSet rs = st.executeQuery(sql);
                if(rs.next()) {
                    return new UsuarioDTO(rs.getString("login") , rs.getString("nome") );
                }
                st.close();
            }
            catch (SQLException e) { throw new RuntimeException(e); }
            catch(Exception e) { System.err.println(e.getMessage()); }
        }    
        return null;
    }

    
    public Usuario getProfileByLogin(String login) {
        if(EmailValidatorSecurity.validateEmail(login)) {
            try{
                Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
                String sql = "SELECT nome, login, password, cpf, FROM usuario WHERE login LIKE '" + login + "';";
                System.out.println(sql);
                
                ResultSet rs = st.executeQuery(sql);
                if(rs.next()) {
                    return new Usuario(rs.getString("nome"),rs.getString("login") , rs.getString("password"), rs.getString("cpf") );
                }
                st.close();
            }
            catch (SQLException e) { throw new RuntimeException(e); }
            catch(Exception e) { System.err.println(e.getMessage()); }
        }    
        return null;
    }

    public boolean updateUsuario(Usuario usuario, String oldLogin) {
        boolean resp = false;
        if(EmailValidatorSecurity.validateEmail(usuario.getLogin()) && usuario.getPassword() != " ") {
            try{
                Statement status = conexao.createStatement();
//                UPDATE usuario SET login = 'brack.games.1@gmail.com', senha= 'xbox360mw3', nome = 'manuel soares' WHERE login LIKE 'tcedro67@gmail.com';

                String sql = "UPDATE usuario SET login = '" + usuario.getLogin() + "', senha = '" + DAO.toMD5(usuario.getLogin()) + "', nome = '" + usuario.getNome() 
                + "' WHERE login LIKE '" + oldLogin + "';";
                       
                System.out.println(sql);
               
                status.executeUpdate(sql);
                status.close();
                resp = true;
            
            } catch (SQLException e) { throw new RuntimeException(e); }
            catch(Exception e) { System.out.println(e.getMessage());} 
        }
        return resp;
    }

   


}
