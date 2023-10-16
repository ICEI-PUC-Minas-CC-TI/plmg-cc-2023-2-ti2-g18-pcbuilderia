package App.dao;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashMap;

import App.config.AzurePostgresConfig;

public class DAO {
    protected Connection conexao;

    public DAO() {
        conexao = null;
    }
    public boolean conectar() {
        HashMap <String, String> keys = AzurePostgresConfig.getKeysAzurePostgresSqlServer();

        String driverName = "org.postgresql.Driver";
        String serverName =  keys.get("servername");
        String mydatabase = keys.get("mydatabase");
        int porta = Integer.parseInt(keys.get("porta"));
        String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
        String username = keys.get("username");
        String password = keys.get("password");
        boolean status = false;

        try {
            Class.forName(driverName);
            conexao = DriverManager.getConnection(url, username, password);
            status = (conexao == null);
            System.out.println("Conexão efetuada com o postgres!");
        } catch (ClassNotFoundException e) {
            System.err.println("Conexão NÃO efetuada com o postgres -- Driver não encontrado -- " + e.getMessage());
        } catch (SQLException e) {
            System.err.println("Conexão NÃO efetuada com o postgres -- " + e.getMessage());
        }

        return status;
    }

    public boolean close() {
		boolean status = false;
		
		try {
			conexao.close();
			status = true;
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return status;
	}
	
	
	public static String toMD5(String senha) throws Exception {
		MessageDigest m=MessageDigest.getInstance("MD5");
		m.update(senha.getBytes(),0, senha.length());
		return new BigInteger(1,m.digest()).toString(16);
	}
}
