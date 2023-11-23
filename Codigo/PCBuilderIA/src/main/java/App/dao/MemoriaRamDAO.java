package App.dao;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import App.models.Hardware;

public class MemoriaRamDAO extends DAO{
    public MemoriaRamDAO() {
        super();
        conectar();
    }
    public List<Hardware> getListMemoriaRam () {
        List<Hardware> listMemoriaRam    = new ArrayList<>();

        try {
            java.sql.Statement status = conexao.createStatement();
            String query = "SELECT * FROM MemoriaRAM;";
            System.out.println(query);

            ResultSet rs = status.executeQuery(query);
            while (rs.next()) {
                //int id, String modelo, String nome, Double price, String descricaoDoProduto, String url)
                Hardware h = new Hardware(rs.getInt("id"), rs.getString("modelo"), rs.getString("nome"), rs.getDouble("price"), rs.getString("descricaoDoProduto"), rs.getString("imagem_url"));
                listMemoriaRam.add(h);
            }
            status.close();
            
        } catch(Exception e) { System.err.println(e.getMessage()); }
       
        return listMemoriaRam;
    }
    public List<Hardware> getListByPrice(Double price) {
        List<Hardware> listByPrice = new ArrayList<>();

        try {
            java.sql.Statement st = conexao.createStatement();
            String query = "SELECT * FROM MemoriaRAM WHERE price <= " + price + ";";
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
            String query = "SELECT * FROM MemoriaRAM WHERE nome LIKE '" + nome + "';";
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
