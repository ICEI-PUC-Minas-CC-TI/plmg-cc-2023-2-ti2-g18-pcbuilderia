package App.models;

public class Hardware {
    private int id;
    private String modelo;
    private String nome;
    private Double price;
    private String descricaoDoProduto;
    private String url;

    public Hardware() {
    }
    public Hardware(int id, String modelo, String nome, Double price, String descricaoDoProduto, String url) {
        this.id = id;
        this.modelo = modelo;
        this.nome = nome;
        this.price = price;
        this.descricaoDoProduto = descricaoDoProduto;
        this.url = url;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }   
    public String getDescricaoDoProduto() {
        return descricaoDoProduto;
    }
    public void setDescricaoDoProduto(String descricaoDoProduto) {
        this.descricaoDoProduto = descricaoDoProduto;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
