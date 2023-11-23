package App.services;

import com.google.gson.Gson;

import App.dao.ComputadorDAO;
import App.models.Computador;
import spark.Request;
import spark.Response;

public class ComputadorService {
    private ComputadorDAO computadorDAO = new ComputadorDAO();
    public boolean inserirComputador(Request request, Response response) {
        response.type("application/json");
        Computador comp = new Gson().fromJson(request.body(), Computador.class);
        // Computador computador = new Computador(Integer.parseInt(req.params("idUsuario")) , Integer.parseInt(req.params("idProcessador")),
        //             Integer.parseInt(req.params("idPlacaMae")), Integer.parseInt(req.params("idMemoriaRam")),
        //             Integer.parseInt(req.params("idDiscoRigido")), Integer.parseInt(req.params("idPlacaDeVideo")));
        boolean resp = false;
        resp = computadorDAO.inserirComputador(comp);
        return resp;
    }
}
