package App.dto;

public class UsuarioEditRequestDTO {
    private String nome;
    private String oldLogin;
    private String login;
    private String password;
    private String cpf;

    public UsuarioEditRequestDTO() {
    }
    public UsuarioEditRequestDTO(String nome, String oldLogin, String login, String password, String cpf) {
        this.nome = nome;
        this.oldLogin = oldLogin;
        this.login = login;
        this.password = password;
        this.cpf = cpf;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getOldLogin() {
        return oldLogin;
    }
    public void setOldLogin(String oldLogin) {
        this.oldLogin = oldLogin;
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

    



}
