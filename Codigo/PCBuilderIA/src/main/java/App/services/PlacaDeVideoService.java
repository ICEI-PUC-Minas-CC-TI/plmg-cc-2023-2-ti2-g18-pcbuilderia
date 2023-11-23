package App.services;

import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

import App.dao.PlacaDeVideoDAO;
import App.models.Hardware;

public class PlacaDeVideoService {
    private PlacaDeVideoDAO placaDeVideoDAO= new PlacaDeVideoDAO();
    public JsonArray getAll() {
        List<Hardware> listProcessadores = placaDeVideoDAO.getListPlacaDeVideo();
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
}
