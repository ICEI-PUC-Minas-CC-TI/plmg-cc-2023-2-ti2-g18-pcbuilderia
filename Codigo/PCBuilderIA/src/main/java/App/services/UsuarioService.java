package App.services;

import java.time.LocalDate;
import java.time.LocalDateTime;



import App.dao.DAO;
import App.dao.UsuarioDAO;
import App.models.Usuario;
import spark.*;

public class UsuarioService {
    private UsuarioDAO usuarioDAO = new UsuarioDAO();

    public String insert(Request request, Response response) throws Exception{
		String login = request.queryParams("login");
		String senha = request.queryParams("senha");
		String nome = request.queryParams("nome");
		String cpf = request.queryParams("cpf");
		
		String resp = "";
		
		Usuario usuario = new Usuario(nome, login, senha, cpf);
		System.out.println(usuario.toString());
        if(usuarioDAO.insert(usuario) == true) {
            resp = "usuario (" + nome + ") criado!";
            response.status(200); // 201 Created
		} else {
			resp = "usuario (" + nome + ") não criado!";
			response.status(404); // 404 Not found
		}
        return "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">"+ "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">";
	}


}
