package App.dao;

import App.models.Usuario;
import App.security.EmailValidatorSecurity;

import java.sql.SQLException;
import java.sql.Statement;

import org.postgresql.shaded.com.ongres.scram.common.bouncycastle.pbkdf2.RuntimeCryptoException;

public class UsuarioDAO extends DAO{
    public UsuarioDAO() {
        super();
        conectar();
    }


    public boolean insert(Usuario user) {
        boolean resp = false;
        if( EmailValidatorSecurity.validateEmail(user.getLogin()) == true ) {
            try{
                Statement status = conexao.createStatement();
                String sql = "INSERT INTO usuario (login, senha, cpf, nome) "
                        + "VALUES ('"+user.getLogin() + "', '"
                        + user.getPassword() + "', '" + user.getCpf() + "', '"+ user.getNome() + "');";
                
                System.out.println(sql);
               
                status.executeUpdate(sql);
                status.close();
                resp = true;
            
            } catch (SQLException e) { throw new RuntimeException(e); }
        }

        return resp;
    }

    public boolean read(Usuario user) {
        boolean resp = false;
        
        try{
            Statement status = conexao.createStatement();
            String sql = "SELECT login, senha FROM USUARIO WHERE login = " + user.getLogin()
             + "AND senha = " + user.getPassword() + ";";
             
             System.out.println(sql);
             status.executeQuery(sql);
             status.close();
             resp = true;

        } catch(SQLException e) { throw new RuntimeException(e); }
       
        return resp;
    }


}
