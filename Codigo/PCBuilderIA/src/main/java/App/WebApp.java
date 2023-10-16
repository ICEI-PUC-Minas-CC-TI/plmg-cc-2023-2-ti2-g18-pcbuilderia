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
import org.json.JSONObject;
import spark.Spark;

import java.time.Duration;

public class WebApp {
    private static UsuarioService usuarioService = new UsuarioService();
    public static void main(String[] args) {
        // Spark.port(8080);
        // Spark.staticFiles.location("/public");


        // Spark.get("/", (req, res) -> "hello word");
        // // OpenAiService service = new OpenAiService(API_KEY, Duration.ofSeconds(55));
        // // CompletionRequest cRequest = CompletionRequest.builder()
        // //         .model("text-davinci-003")
        // //         .prompt("conte-me uma piada")
        // //         .maxTokens(50).build();



        // // System.out.println(service.createCompletion(cRequest).getChoices());


        // // Spark.get("/", ((request, response) -> service.createCompletion(cRequest).getChoices()));
        Spark.post("/cadastro", (req, res)  -> usuarioService.insert(req, res) );
        // Spark.post("/login", (req, res)     -> usuarioService.read(req, res) );
        

    }
}
