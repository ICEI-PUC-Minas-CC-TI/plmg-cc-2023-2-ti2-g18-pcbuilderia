package App.services;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

import App.dao.ProcessadorDAO;
import App.models.Hardware;

public class ProcessadorService {
   private ProcessadorDAO processadorDAO = new ProcessadorDAO();

    public JsonArray getAll() {
        List<Hardware> listProcessadores = processadorDAO.getListProcessador();
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
}
