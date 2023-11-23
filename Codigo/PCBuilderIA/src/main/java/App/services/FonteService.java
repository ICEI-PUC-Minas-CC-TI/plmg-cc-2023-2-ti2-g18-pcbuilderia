package App.services;

import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

import App.dao.FonteDAO;
import App.models.Hardware;
import spark.Request;

public class FonteService {
        public FonteDAO fonteDAO = new FonteDAO();
        public JsonArray getAll() {
        List<Hardware> listProcessadores = fonteDAO.getListFonte();
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
    public JsonArray getListByPrice(Request request) {
        double price = Double.parseDouble(request.params(":price")); 
        List<Hardware> listProcessadores = fonteDAO.getListByPrice(price);
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
    public JsonElement getByNome(Request request) {
        String nome = request.params(":nome");
        Hardware h = fonteDAO.getByNome(nome);
        
        Gson gson = new Gson();
        JsonElement je = gson.toJsonTree(h);

        return je;
    }
}
