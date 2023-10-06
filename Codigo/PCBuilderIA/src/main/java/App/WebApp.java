package App;

import App.dao.DAO;
import App.dao.UserDAO;
import App.models.User;
import com.theokanning.openai.*;
import com.theokanning.openai.client.OpenAiApi;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;
import org.json.JSONObject;
import spark.Spark;

import java.time.Duration;

public class WebApp {
    public static void main(String[] args) {
        Spark.port(8080);

        OpenAiService service = new OpenAiService(API_KEY, Duration.ofSeconds(55));
        CompletionRequest cRequest = CompletionRequest.builder()
                .model("text-davinci-003")
                .prompt("conte-me uma piada")
                .maxTokens(50).build();



        System.out.println(service.createCompletion(cRequest).getChoices());




        /* JSONObject obj = new JSONObject();
        User user = new User("Thiago", "tcedro67@gmail.com", "123");

        obj.put("nome", user.getNome());
        obj.put("login", user.getLogin());
        obj.put("senha", user.getPassword());
        obj.put("id", user.getId());

        UserDAO bd = new UserDAO();
        bd.insert(user);
        */

        Spark.get("/", ((request, response) -> service.createCompletion(cRequest).getChoices()));

    }
}
