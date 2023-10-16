package App.config;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.HashMap;

public class AzurePostgresConfig {
    public static HashMap<String, String> getKeysAzurePostgresSqlServer() {
        HashMap<String, String> keys = new HashMap<>();
        RandomAccessFile raf;
        
        try {
            raf = new RandomAccessFile("AzureKeys.cfg", "r");
            raf.seek(0);

            keys.put("servername", raf.readLine());
            keys.put("mydatabase", raf.readLine());
            keys.put("porta", raf.readLine());
            keys.put("username", raf.readLine());
            keys.put("password", raf.readLine());
            
            raf.close();

        } 

        catch(FileNotFoundException e) {  e.printStackTrace();}
        catch(IOException e) { System.err.println(e.getMessage());}

        return keys;
    }
}
