package App.services;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.google.gson.Gson;

import App.dao.DAO;
import App.dao.UsuarioDAO;
import App.dto.UsuarioDTO;
import App.models.Usuario;
import spark.*;

public class UsuarioService {
    private UsuarioDAO usuarioDAO = new UsuarioDAO();

    public String insert(Request request, Response response) throws Exception{
		response.type("application/json");
		Usuario usuario = new Gson().fromJson(request.body(), Usuario.class);
		System.out.println(usuario.toString());
		String resp = "...";
		
		// Usuario usuario = new Usuario(nome, login, senha, cpf);
		System.out.println(usuario.toString());
        if(usuarioDAO.insert(usuario) == true) {
            response.body("usuario (" + usuario.getNome() + ") foi criado!");
            response.status(200); // 201 Created
			
		} else {
			response.body("usuario (" + usuario.getNome() + ") não criado!");
			response.status(404); // 404 Not found
		}
		
        return resp;
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
		UsuarioDTO userdto = usuarioDAO.getProfile(req.queryParams("login"));
		
		if(userdto != null) { 
			res.status(200);
			return new Gson().toJson( userdto ) ;
		}
		else {
			res.status(401);
			res.body("Perfil não encontrado.");
		}
		
		return null;
	}

	private String getProfile(String login) {
		return new Gson().toJson( usuarioDAO.getProfile(login) );
	}

}
