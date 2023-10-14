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
            String sql = "INSERT INTO usuario (id, nome, login, password, cpf ) "
                    + "VALUES ('"+user.getId() +"', '"+ user.getNome() + "', '"
                    + user.getLogin() + "', '" + user.getPassword() + "', '"+ user.getCpf() + "');";
            
            
            System.out.println(sql);
            status.executeUpdate(sql);
            status.close();
            resp = true;
        } catch (SQLException e) { throw new RuntimeException(e); }

        return resp;
    }


}
