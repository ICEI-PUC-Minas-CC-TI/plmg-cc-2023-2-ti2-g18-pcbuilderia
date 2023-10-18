package App.dao;

import App.dto.UsuarioDTO;
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

    public boolean autenticar(String login, String senha) {
        boolean resp = false;
        if(EmailValidatorSecurity.validateEmail(senha)){
             try {
                Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            
                String sql = "SELECT * FROM usuario WHERE login LIKE '" + login + "' AND senha LIKE '" + DAO.toMD5(senha) + "'";
                System.out.println(sql);
            
                ResultSet rs = st.executeQuery(sql);
                resp = rs.next();
                st.close();
        
            } catch(Exception e) { System.err.println(e.getMessage()); }
        }

        return resp;
    }

    public UsuarioDTO getProfile(String login) {
        if(EmailValidatorSecurity.validateEmail(login)) {
            try{
                Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
                String sql = "SELECT id, login, nome FROM usuario WHERE login LIKE '" + login + "';";
                System.out.println(sql);
                
                ResultSet rs = st.executeQuery(sql);
                if(rs.next()) {
                    return new UsuarioDTO(rs.getInt("id"), rs.getString("login") , rs.getString("nome") );
                }
                st.close();
            }
            catch (SQLException e) { throw new RuntimeException(e); }
            catch(Exception e) { System.err.println(e.getMessage()); }
        }    
        return null;
    }


}
