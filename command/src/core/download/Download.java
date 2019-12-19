package core.download;

import core.text.Text;
import org.json.simple.JSONObject;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

public class Download {

  final static String configPath = "C:\\.reactive-data\\";

  public static void update() {
    String inf = core.file.File.read("C:\\.reactive-data\\meta\\inf.reactive");
    String infRemote = getText("https://raw.githubusercontent.com/ferisagaragu/reactive-library/master/command/inf.reactive");

    if (inf.isEmpty()) {
      String versionRemote = getText("https://raw.githubusercontent.com/ferisagaragu/reactive-library/master/command/version.json");
      new File("C:\\.reactive-data\\meta\\").mkdirs();
      writeFile(infRemote, "C:\\.reactive-data\\meta\\inf.reactive");
      writeFile(versionRemote, "C:\\.reactive-data\\meta\\version.json");
    }

    if (!inf.equals(infRemote)) {
      JSONObject config = core.file.File.readJSON("C:\\.reactive-data\\meta\\version.json");
      String versionRemote = getText("https://raw.githubusercontent.com/ferisagaragu/reactive-library/master/command/version.json");
      clearDir(config);
      updateFile(config);
      writeFile(infRemote, "C:\\.reactive-data\\meta\\inf.reactive");
      writeFile(versionRemote, "C:\\.reactive-data\\meta\\version.json");
      System.out.println();
    }
  }

  private static void updateFile(JSONObject config) {
    String[] links = toArray(config.get("command-file").toString());

    for (String link : links) {
      try {
        String data = getText(link);

        BufferedWriter out =
          new BufferedWriter(
            new OutputStreamWriter(
              new FileOutputStream(new File(configPath + link.substring(1, link.length()))),
              "utf-8"
            )
          );

        out.write(data);
        out.close();
        Text.infoln(link + " was update");
      } catch (Exception e) {
        Text.errorln("problems to update\n");
      }
    }

  }

  private static String getText(String url) {
    String content = null;
    URLConnection connection = null;
    try {
      connection =  new URL("https://raw.githubusercontent.com/ferisagaragu/reactive-library/master/command/.reactive-data" + url).openConnection();
      Scanner scanner = new Scanner(connection.getInputStream());
      scanner.useDelimiter("\\Z");
      content = scanner.next();
      scanner.close();
    }catch ( Exception ex ) {
      ex.printStackTrace();
    }

    return content;
  }

  private static void clearDir(JSONObject config) {
    String[] clearDirs = toArray(config.get("clean").toString());

    for (String dir :clearDirs) {
      File file = new File(configPath + dir.substring(1,dir.length()));
      new File(configPath + dir.substring(1,dir.length())).mkdirs();
      for (int i = 0; i < file.listFiles().length; i++) {
        File finalFile = file.listFiles()[i];
        finalFile.delete();
        Text.infoln( file.getName() + " folder was clean");
      }
    }

  }

  private static String[] toArray(String data) {
    String[] array = data
      .replace("[","")
      .replace("]", "")
      .replace("\"","")
      .replace("\\", "")
      .split(",");
    return array;
  }

  private static void writeFile(String data, String path) {
    try {
      BufferedWriter out =
        new BufferedWriter(
          new OutputStreamWriter(
            new FileOutputStream(new File(path)),
            "utf-8"
          )
        );

      out.write(data);
      out.close();
    } catch (Exception e) {
      Text.errorln("problems to create files\n");
    }
  }

}
