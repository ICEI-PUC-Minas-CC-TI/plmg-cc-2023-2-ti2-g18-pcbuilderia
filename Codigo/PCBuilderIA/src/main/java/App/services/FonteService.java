package App.services;

import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

import App.dao.FonteDAO;
import App.models.Hardware;

public class FonteService {
        public FonteDAO fonteDAO = new FonteDAO();
        public JsonArray getAll() {
        List<Hardware> listProcessadores = fonteDAO.getListFonte();
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(listProcessadores , new TypeToken<List<Hardware>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        
        return jsonArray;
    }
}
