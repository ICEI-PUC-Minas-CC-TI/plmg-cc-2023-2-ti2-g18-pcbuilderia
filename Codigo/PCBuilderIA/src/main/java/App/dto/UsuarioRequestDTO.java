package App.dto;

public class UsuarioRequestDTO {
    private String login;
    private String password;
    
    public UsuarioRequestDTO() {
    }
    
    public UsuarioRequestDTO(String login, String password) {
        this.login = login;
        this.password = password;
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
    public void getPassword(String password) {
        this.password = password;
    }
}
