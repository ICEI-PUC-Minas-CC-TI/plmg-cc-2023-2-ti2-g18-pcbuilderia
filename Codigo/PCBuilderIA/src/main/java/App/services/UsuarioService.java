package App.services;



import com.google.gson.Gson;

import App.dao.UsuarioDAO;
import App.dto.UsuarioDTO;
import App.dto.UsuarioEditRequestDTO;
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

	public boolean update(Request req, Response res) { 
		boolean resp=false;
		String loginUsuario = req.queryParams("login");
		Usuario novoUsuario = getProfileByLogin(loginUsuario);

		if(novoUsuario != null) {
			novoUsuario.setLogin(req.queryParams("novoLogin"));
			novoUsuario.setNome(req.queryParams("novoNome"));
			novoUsuario.setPassword(req.queryParams("novaPassword"));

			return usuarioDAO.updateUsuario(novoUsuario, loginUsuario);

		}

		return resp;
	}

	private UsuarioDTO getProfile(String login) {
		return usuarioDAO.getProfileDTO(login);
	}


	private Usuario getProfileByLogin(String login) {
		return usuarioDAO.getProfileByLogin(login);
	}


}
