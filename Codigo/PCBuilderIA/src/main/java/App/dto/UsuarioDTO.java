package App.dto;

public class UsuarioDTO {
    private int id;
    private String nome;
    private String login;
    public UsuarioDTO(int id, String login, String nome) {
        this.id = id;
        this.nome = nome;
        this.login = login;
    }
    public UsuarioDTO() {
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
    
}
