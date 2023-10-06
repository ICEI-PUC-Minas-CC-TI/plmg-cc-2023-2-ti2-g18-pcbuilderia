package App.dao;

import App.models.User;

import java.sql.SQLException;
import java.sql.Statement;

public class UserDAO extends DAO{
    public UserDAO() {
        super();
        conectar();
    }


    public boolean insert(User user) {
        boolean resp = false;
        try{
            Statement status = conexao.createStatement();
            String sql = "INSERT INTO usuario (id, login, password, nome) "
                    + "VALUES ("+user.getId()+ ", '" + user.getLogin() + "', '"
                    + user.getPassword() + "', '" + user.getNome() + "');";
            System.out.println(sql);
            status.executeUpdate(sql);
            status.close();
            resp = true;
        } catch (SQLException e) { throw new RuntimeException(e); }

        return resp;
    }


}
