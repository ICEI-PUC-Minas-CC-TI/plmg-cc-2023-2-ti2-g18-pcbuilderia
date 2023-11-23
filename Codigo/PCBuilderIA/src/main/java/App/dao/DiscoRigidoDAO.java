package App.dao;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import App.models.Hardware;

public class DiscoRigidoDAO extends DAO{
    public DiscoRigidoDAO() {
        super();
        conectar();
    }
    public List<Hardware> getListDiscoRigido () {
        List<Hardware> listDiscoRigido  = new ArrayList<>();

        try {
            java.sql.Statement status = conexao.createStatement();
            String query = "SELECT * FROM DiscoRigido ;";
            System.out.println(query);

            ResultSet rs = status.executeQuery(query);
            while (rs.next()) {
                //int id, String modelo, String nome, Double price, String descricaoDoProduto, String url)
                Hardware h = new Hardware(rs.getInt("id"), rs.getString("modelo"), rs.getString("nome"), rs.getDouble("price"), rs.getString("descricaoDoProduto"), rs.getString("imagem_url"));
                listDiscoRigido.add(h);
            }
            status.close();
            
        } catch(Exception e) { System.err.println(e.getMessage()); }
       
        return listDiscoRigido;
    }
    public List<Hardware> getListByPrice(Double price) {
        List<Hardware> listByPrice = new ArrayList<>();

        try {
            java.sql.Statement st = conexao.createStatement();
            String query = "SELECT * FROM DiscoRigido WHERE price <= " + price + ";";
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
}
