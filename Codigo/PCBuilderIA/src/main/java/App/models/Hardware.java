package App.models;

public class Hardware {
    private int id;
    private String descricao;
    private Double preco;
    private String marca;
    private String nome;

    public Hardware() {
    }

    public Hardware(int id, String descricao, Double preco, String marca, String nome) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.marca = marca;
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
