package App.services;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.json.JSONObject;

import App.dao.DAO;
import App.dao.UsuarioDAO;
import App.dto.UsuarioDTO;
import App.models.Usuario;
import netscape.javascript.JSObject;
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

	public boolean autenticar(Request req, Response res) {
		boolean resp = false;
		
		String login = req.queryParams("login");
		String senha = req.queryParams("senha");


		if(usuarioDAO.autenticar(login, senha) == true) {
			resp = true;
			res.status(200);
		} else {
			resp = false;
			res.status(401);
		}
		
		return resp;
	}

	public String getProfile(Request req, Response res) {
		UsuarioDTO  user = usuarioDAO.getProfile(req.queryParams("login"));
		JSONObject json = new JSONObject();
		
		json.put("login", user.getLogin());
		json.put("nome",  user.getNome());
		json.put("id",    user.getId());
		
		return json.toString();
	}

	// private UsuarioDTO getProfile(String login) {
	// 	return usuarioDAO.getProfile(login);
	// }

}
