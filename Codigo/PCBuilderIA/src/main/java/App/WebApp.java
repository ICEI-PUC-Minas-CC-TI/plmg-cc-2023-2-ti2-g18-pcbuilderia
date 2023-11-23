package App;

import App.services.DiscoRigidoService;
import App.services.FonteService;
import App.services.MemoriaRamService;
import App.services.PlacaDeVideoService;
import App.services.PlacaMaeService;
import App.services.ProcessadorService;
import App.services.UsuarioService;

import spark.Spark;

public class WebApp {
    private static UsuarioService usuarioService = new UsuarioService();
    private static ProcessadorService processadorService = new ProcessadorService();
    private static PlacaDeVideoService placaDeVideoService = new PlacaDeVideoService();
    private static PlacaMaeService placaMaeService = new PlacaMaeService();
    private static MemoriaRamService memoriaRamService = new MemoriaRamService();
    private static FonteService fonteService = new FonteService();
    private static DiscoRigidoService discoRigidoService = new DiscoRigidoService();

    
    public static void main(String[] args) {
        Spark.port(8080);
        Spark.options("*/*",(request, response) -> {

            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            return "OK";
        });

        Spark.before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        Spark.post("/usuario/cadastro", (req, res) -> usuarioService.insert(req, res) );
        Spark.post("/usuario/login", (req, res) -> usuarioService.autenticar(req, res) );
        Spark.post("/usuario/editarperfil", (req, res) ->  usuarioService.update(req,  res));
        
        Spark.get("/processador", (req, res) -> processadorService.getAll().toString());
        Spark.get("/placadevideo", (req, res) -> placaDeVideoService.getAll());
        Spark.get("/placamae", (req, res) -> placaMaeService.getAll());
        Spark.get("/memoriaram", (req, res) -> memoriaRamService.getAll());
        Spark.get("/fonte", (req, res) -> fonteService.getAll());
        Spark.get("/discorigido", (req, res) -> discoRigidoService.getAll());
    }
}
