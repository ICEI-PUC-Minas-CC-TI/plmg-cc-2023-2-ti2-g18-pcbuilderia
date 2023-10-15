package App.dao;

import App.models.Usuario;

import java.sql.SQLException;
import java.sql.Statement;

public class UsuarioDAO extends DAO{
    public UsuarioDAO() {
        super();
        conectar();
    }


    public boolean insert(Usuario user) {
        boolean resp = false;
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

        return resp;
    }


}
