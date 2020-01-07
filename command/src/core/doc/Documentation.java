package core.doc;

import core.file.File;
import core.text.Text;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.w3c.dom.NodeList;

public class Documentation {

  public static void generateDoc(JSONObject config) {
    final String configPath = "C:\\.reactive-data\\";
    System.out.println("\n");
    config.keySet().forEach((Object data) -> {
      try {
        JSONObject obj = (JSONObject) new JSONParser().parse(config.get(data.toString()).toString());

        obj.keySet().forEach((Object data2) -> {
          try {
            NodeList nodeChildrens = File.readXml(configPath + "\\" + obj.get(data2)).getElementsByTagName("root").item(0).getChildNodes();
            boolean especial = false;

            for (int i = 0; i < nodeChildrens.getLength(); i++) {
              if (nodeChildrens.item(i).getNodeName().equals("layout")) {
                if (nodeChildrens.item(i).getAttributes().getNamedItem("dir") == null) {
                  especial = true;
                  Text.command(data.toString(), data2.toString(), "YOUR_PATH");
                }
              }
            }

            if (!especial) {
              Text.command(data.toString(), data2.toString(), "");
            }

          } catch (Exception e) {
            e.printStackTrace();
          }

        });

      } catch (Exception e) {}
    });
    System.out.println("\n");
  }

}
