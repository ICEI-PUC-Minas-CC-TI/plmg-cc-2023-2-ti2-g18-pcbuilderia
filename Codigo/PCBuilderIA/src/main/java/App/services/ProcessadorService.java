package App.services;

import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

import App.dao.ProcessadorDAO;
import App.models.Hardware;
import spark.Request;

public class ProcessadorService {
   private ProcessadorDAO processadorDAO = new ProcessadorDAO();

    public JsonArray getAll() {
        List<Hardware> listProcessadores = processadorDAO.getListProcessador();
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
    public JsonArray getListByPrice(Request request) {
        double price = Double.parseDouble(request.params(":price")); 
        List<Hardware> listProcessadores = processadorDAO.getListByPrice(price);
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
}
