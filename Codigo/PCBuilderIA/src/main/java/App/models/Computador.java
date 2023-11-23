package App.models;
public class Computador {
    private int idComputador;
    private int idUsuario;
    private int idProcessador;
    private int idPlacaMae;
    private int idMemoriaRam;
    private int idDiscoRigido;
    private int placaDeVideo;
    private Double priceTotal;
    
    public int getIdComputador() {
        return idComputador;
    }
    public void setIdComputador(int idComputador) {
        this.idComputador = idComputador;
    }
    public Double getPriceTotal() {
        return priceTotal;
    }
    public void setPriceTotal(Double priceTotal) {
        this.priceTotal = priceTotal;
    }
    public Computador(int id, int idUsuario, int idProcessador, int idPlacaMae, int idMemoriaRam, int idDiscoRigido, int placaDeVideo) {
        this.idComputador = id;
        this.idUsuario = idUsuario;
        this.idProcessador = idProcessador;
        this.idPlacaMae = idPlacaMae;
        this.idMemoriaRam = idMemoriaRam;
        this.idDiscoRigido = idDiscoRigido;
        this.placaDeVideo = placaDeVideo;
    }
    public int getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    public int getIdProcessador() {
        return idProcessador;
    }
    public void setIdProcessador(int idProcessador) {
        this.idProcessador = idProcessador;
    }
    public int getIdPlacaMae() {
        return idPlacaMae;
    }
    public void setIdPlacaMae(int idPlacaMae) {
        this.idPlacaMae = idPlacaMae;
    }
    public int getIdMemoriaRam() {
        return idMemoriaRam;
    }
    public void setIdMemoriaRam(int idMemoriaRam) {
        this.idMemoriaRam = idMemoriaRam;
    }
    public int getIdDiscoRigido() {
        return idDiscoRigido;
    }
    public void setIdDiscoRigido(int idDiscoRigido) {
        this.idDiscoRigido = idDiscoRigido;
    }
    public int getPlacaDeVideo() {
        return placaDeVideo;
    }
    public void setPlacaDeVideo(int placaDeVideo) {
        this.placaDeVideo = placaDeVideo;
    }
}
