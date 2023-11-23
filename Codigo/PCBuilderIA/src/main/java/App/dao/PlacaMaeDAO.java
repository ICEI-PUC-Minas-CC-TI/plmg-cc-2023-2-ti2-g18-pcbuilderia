package App.dao;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import App.models.Hardware;

public class PlacaMaeDAO extends DAO {
    public PlacaMaeDAO() {
        super();
        conectar();
    }
    public List<Hardware> getListPlacaMae () {
        List<Hardware> listPlacaMae   = new ArrayList<>();

        try {
            java.sql.Statement status = conexao.createStatement();
            String query = "SELECT * FROM PlacaMae;";
            System.out.println(query);

            ResultSet rs = status.executeQuery(query);
            while (rs.next()) {
                //int id, String modelo, String nome, Double price, String descricaoDoProduto, String url)
                Hardware h = new Hardware(rs.getInt("id"), rs.getString("modelo"), rs.getString("nome"), rs.getDouble("price"), rs.getString("descricaoDoProduto"), rs.getString("imagem_url"));
                listPlacaMae.add(h);
            }
            status.close();
            
        } catch(Exception e) { System.err.println(e.getMessage()); }
       
        return listPlacaMae;
    }
    public List<Hardware> getListByPrice(Double price) {
        List<Hardware> listByPrice = new ArrayList<>();

        try {
            java.sql.Statement st = conexao.createStatement();
            String query = "SELECT * FROM PlacaMae WHERE price <= " + price + ";";
            System.out.println(query);

            ResultSet rs = st.executeQuery(query);
            while (rs.next()) {
                //int id, String modelo, String nome, Double price, String descricaoDoProduto, String url)
                Hardware h = new Hardware(rs.getInt("id"), rs.getString("modelo"), rs.getString("nome"), rs.getDouble("price"), rs.getString("descricaoDoProduto"), rs.getString("imagem_url"));
                listByPrice.add(h);
            }
            st.close();
            
        } catch(Exception e) { System.err.println(e.getMessage()); }
       
        return listByPrice;
    }
    public Hardware getByNome(String nome) {
        Hardware h =null;
        try {
            java.sql.Statement st = conexao.createStatement();
            String query = "SELECT * FROM PlacaMae WHERE nome LIKE '" + nome + "';";
            System.out.println(query);

            ResultSet rs = st.executeQuery(query);
            if(rs.next()){ 
                h = new Hardware(rs.getInt("id"), rs.getString("modelo"), rs.getString("nome"), rs.getDouble("price"), rs.getString("descricaoDoProduto"), rs.getString("imagem_url")); 
            }
            st.close();    
        } catch(Exception e) { System.err.println(e.getMessage()); }
        
        return h;
    }
}
