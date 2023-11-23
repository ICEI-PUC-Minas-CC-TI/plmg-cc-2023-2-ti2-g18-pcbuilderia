package App.dao;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.print.attribute.HashDocAttributeSet;

import App.models.Hardware;

public class ProcessadorDAO extends DAO{
    public ProcessadorDAO() {
        super();
        conectar();
    }

    public List<Hardware> getListProcessador() {
        List<Hardware> listProcessadores = new ArrayList<>();

        try {
            java.sql.Statement status = conexao.createStatement();
            String query = "SELECT * FROM Processadores;";
            System.out.println(query);

            ResultSet rs = status.executeQuery(query);
            while (rs.next()) {
                //int id, String modelo, String nome, Double price, String descricaoDoProduto, String url)
                Hardware h = new Hardware(rs.getInt("id"), rs.getString("modelo"), rs.getString("nome"), rs.getDouble("price"), rs.getString("descricaoDoProduto"), rs.getString("imagem_url"));
                listProcessadores.add(h);
            }
            status.close();
            
        } catch(Exception e) { System.err.println(e.getMessage()); }
       
        return listProcessadores;
    }

}
