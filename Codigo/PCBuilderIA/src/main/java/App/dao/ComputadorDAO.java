package App.dao;

import java.sql.ResultSet;

import App.models.Computador;
import App.models.Hardware;

public class ComputadorDAO extends DAO{
    public ComputadorDAO() {
        super();
        conectar();
    }

    public boolean inserirComputador(Computador compt) {
        boolean resp = false;
        try {
            java.sql.Statement status = conexao.createStatement();
            String query = "INSERT INTO Computador (idUsuario, idProcessador, idPlacaMae, idMemoriaRam, idDiscoRigido, idPlacaDeVideo, priceTotal)" + "VALUES ("+ compt.getIdUsuario()+"," + compt.getIdProcessador() + "," +compt.getIdPlacaMae() +
                            ","+ compt.getIdMemoriaRam() + "," + compt.getIdDiscoRigido() +
                            "," +compt.getPlacaDeVideo() + "," + compt.getPriceTotal() + ");"; 

            System.out.println(query);
            ResultSet rs = status.executeQuery(query);
            resp = rs.next();

            status.close();
            
        } catch(Exception e) { System.err.println(e.getMessage()); }  
       
        return resp;
    }
    

}

/*
 * public boolean inserirComputador(int idUsuario, int idProcessador, int idPlacaMae, int idDiscoRigido
                                    , int idMemoriaRam, int idFonte, int idPlacaDeVideo) {
        Computador compt = new Computador(idFonte, idUsuario, idProcessador, idPlacaMae, idMemoriaRam, idDiscoRigido, idPlacaDeVideo);
 */