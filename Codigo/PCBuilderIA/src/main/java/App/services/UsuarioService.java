package App.services;



import com.google.gson.Gson;

import App.dao.UsuarioDAO;
import App.dto.UsuarioDTO;
import App.dto.UsuarioRequestDTO;
import App.models.Usuario;
import spark.*;

public class UsuarioService {
    private UsuarioDAO usuarioDAO = new UsuarioDAO();

    public Response insert(Request request, Response response) throws Exception{
		response.type("application/json");
		Usuario usuario = new Gson().fromJson(request.body(), Usuario.class);
		
        if(usuarioDAO.insert(usuario) == true) {
            response.body(new Gson().toJson("usuario (" + usuario.getNome() + ") foi criado!"));
            response.status(200); // 201 Created
			
		} else {
			response.body(new Gson().toJson("usuario (" + usuario.getNome() + ") não foi criado!"));
			response.status(404); // 404 Not found
		}
		
        return response;
	}

	public String autenticar(Request req, Response res) {
		String resp = "Fail";
		res.type("application/json");
		UsuarioRequestDTO usuarioReqDTO = new Gson().fromJson(req.body(), UsuarioRequestDTO.class);
		System.out.println("entre aq");
		
		if(usuarioDAO.autenticar(usuarioReqDTO) == true) {
			UsuarioDTO usuarioDTO = getProfile(usuarioReqDTO.getLogin());
			
			res.body(new Gson().toJson(usuarioDTO));
			res.status(200);
			
			return new Gson().toJson(usuarioDTO);

		} else {
			res.header("error", "Login Invalido!");;
			res.status(402);
		
		}
		
		return resp;
	}


	private UsuarioDTO getProfile(String login) {
		return usuarioDAO.getProfileDTO(login);
	}
	// private Usuario getProfile(String login) {
	// 	return usuarioDAO.getProfile(login);
	// }

	// public String editarUsuario(Request req, Response res) {
	// 	res.type("application/json");

	}

	// public UsuarioDTO getProfile(Request req, Response res) {
	// }

}
