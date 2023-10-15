package App.models;

public class Usuario {
    private int id;
    private String nome;
    private String login;
    private String password;
    private String cpf;

    public Usuario() {
    }

    public Usuario(String nome, String login, String password, String cpf) {
        
        this.nome = nome;
        this.login = login;
        this.password = password;
        this.cpf = cpf;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public String toString() {
        return "Usuario [id=" + id + ", nome=" + nome + ", login=" + login + ", password=" + password + ", cpf=" + cpf
                + "]";
    }

    
}
