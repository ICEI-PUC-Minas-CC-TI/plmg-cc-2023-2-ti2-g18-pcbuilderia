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
        //Usuario
        Spark.post("/usuario/cadastro", (req, res) -> usuarioService.insert(req, res) );
        Spark.post("/usuario/login", (req, res) -> usuarioService.autenticar(req, res) );
        Spark.post("/usuario/editarperfil", (req, res) ->  usuarioService.update(req,  res));
        //Processador
        Spark.get("/processador", (req, res) -> processadorService.getAll());
        Spark.get("/processador/getByPrice/:price", (req, res) -> processadorService.getListByPrice(req));
        Spark.get("/processador/getByNome/:nome", (req, res) -> processadorService.getByNome(req));
        //PlacaDeVideo
        Spark.get("/placadevideo", (req, res) -> placaDeVideoService.getAll());
        Spark.get("/placadevideo/getByPrice/:price", (req, res) -> placaDeVideoService.getListByPrice(req));
        Spark.get("/placadevideo/getByNome/:nome", (req, res) -> placaDeVideoService.getByNome(req));
        //PlacaMae
        Spark.get("/placamae", (req, res) -> placaMaeService.getAll());
        Spark.get("/placamae/getByPrice/:price", (req, res) -> placaMaeService.getListByPrice(req));
        Spark.get("/placamae/getByNome/:nome", (req, res) -> placaMaeService.getByNome(req));
        //MemoriaRam
        Spark.get("/memoriaram", (req, res) -> memoriaRamService.getAll());
        Spark.get("/memoriaram/getByPrice/:price", (req, res) -> memoriaRamService.getListByPrice(req));
        Spark.get("/memoriaram/getByNome/:nome", (req, res) -> memoriaRamService.getByNome(req));
        //Fonte
        Spark.get("/fonte", (req, res) -> fonteService.getAll());
        Spark.get("/fonte/getByPrice/:price", (req, res) -> fonteService.getListByPrice(req));
        Spark.get("/fonte/getByNome/:nome", (req, res) -> fonteService.getByNome(req));
        //Armazenamento
        Spark.get("/discorigido", (req, res) -> discoRigidoService.getAll());
        Spark.get("/discorigido/getByPrice/:price", (req, res) -> discoRigidoService.getListByPrice(req));
        Spark.get("/discorigido/getByNome/:nome", (req, res) -> discoRigidoService.getByNome(req));
        //computador
        Spark.post("/inserircomputador/:idUsuario:/", null);
    }
}
