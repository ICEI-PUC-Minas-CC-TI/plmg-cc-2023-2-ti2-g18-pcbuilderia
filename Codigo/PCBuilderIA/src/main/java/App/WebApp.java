package App;

import App.dao.DAO;
import App.dao.UsuarioDAO;
import App.models.Usuario;
import App.security.EmailValidatorSecurity;
import App.services.UsuarioService;

import com.theokanning.openai.*;
import com.theokanning.openai.client.OpenAiApi;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;

import spark.ModelAndView;
import spark.Spark;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

public class WebApp {
    private static UsuarioService usuarioService = new UsuarioService();
    
    public static void main(String[] args) {
        Spark.port(8080);
        Spark.options("*/*",(request, response) -> {

            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod);
            }

            return "OK";
        });

    Spark.before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

//gpt 3.5
        // // Spark.get("/", (req, res) -> "hello word");
        // // // OpenAiService service = new OpenAiService(API_KEY, Duration.ofSeconds(55));
        // // // CompletionRequest cRequest = CompletionRequest.builder()
        // // //         .model("text-davinci-003")
        // // //         .prompt("conte-me uma piada")
        // // //         .maxTokens(50).build();
        // // // System.out.println(service.createCompletion(cRequest).getChoices());
        // // // Spark.get("/", ((request, response) -> service.createCompletion(cRequest).getChoices()));

        Spark.post("/usuario/cadastro", (req, res) -> usuarioService.insert(req, res) );
        Spark.post("/usuario/login", (req, res) -> usuarioService.autenticar(req, res) );
        // Spark.post("/usuario/login"   , (req, res) -> usuarioService.autenticar (req, res) );

    }
}
