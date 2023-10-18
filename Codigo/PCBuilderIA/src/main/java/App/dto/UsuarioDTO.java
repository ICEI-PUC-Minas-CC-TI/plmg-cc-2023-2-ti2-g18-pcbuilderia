package App.dto;

public class UsuarioDTO {
    private String nome;
    private String login;
    public UsuarioDTO(String login, String nome) {
        this.nome = nome;
        this.login = login;
    }
    public UsuarioDTO() {
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
