package App.models;


public class BuildPC {

    private int id_usuario;
    private int id_computador;
    private Double orcamento;
    private String categoria;
    public BuildPC() {
    }
    public BuildPC(int id_usuario, int id_computador, Double orcamento, String categoria) {
        this.id_usuario = id_usuario;
        this.id_computador = id_computador;
        this.orcamento = orcamento;
        this.categoria = categoria;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public int getId_computador() {
        return id_computador;
    }

    public void setId_computador(int id_computador) {
        this.id_computador = id_computador;
    }

    public Double getOrcamento() {
        return orcamento;
    }

    public void setOrcamento(Double orcamento) {
        this.orcamento = orcamento;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}

