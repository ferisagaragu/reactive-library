import core.doc.Documentation;
import core.file.File;
import core.text.Text;
import org.fusesource.jansi.AnsiConsole;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.w3c.dom.NodeList;

public class App {

  public static void main(String[] args) {
    AnsiConsole.systemInstall();
    NodeList presentationDoc = File.readXml("C:\\.reactive-data\\meta\\presentation.xml").getElementsByTagName("title");
    JSONObject config = File.readJSON("C:\\.reactive-data\\reactive-config.json");

    boolean exit = false;
    final String configPath = "C:\\.reactive-data\\";
    final String absolutePath = System.getProperty("user.dir") + "\\src";


    Text.title("\n" + presentationDoc.item(0).getTextContent());
    Text.version("\n" + presentationDoc.item(1).getTextContent());
    Text.folder("commands executed in the " + absolutePath + " folder \n");


    do {
      try {
        String[] command = Text.input().split(" ");

        if (command[0].equals("help")) {
          Documentation.generateDoc(config);
        } else if (command[0].equals("bye")) {
          exit = true;
        } else {

            JSONObject obj = (JSONObject) new JSONParser().parse(config.get(command[0]).toString());
            String virtualPath = configPath + "\\" + obj.get(command[1]).toString();
            NodeList xmlData = File.readXml(virtualPath).getElementsByTagName("root").item(0).getChildNodes();

            if (xmlData.getLength() != 0) {
              for (int i = 0; i < xmlData.getLength(); i++) {
                if (!xmlData.item(i).getNodeName().equals("#text")) {

                  switch (xmlData.item(i).getNodeName()) {
                    case "layout":

                      boolean status;

                      if (File.attributeExist(xmlData.item(i).getAttributes(), "dir")) {
                        status = createFile(xmlData, i, null, true);
                      } else {
                        status = createFile(xmlData, i, command[2], false);
                      }

                      if (!status) {
                        i = xmlData.getLength();
                        Text.errorln("Pleas check your command, path not found");
                      }

                    break;

                    case "mk":
                      NodeList folders = xmlData.item(i).getChildNodes();
                      for (int j = 0; j < folders.getLength(); j++) {
                        if (!folders.item(j).getNodeName().equals("#text")) {
                          File.mkdir(folders.item(j).getTextContent());
                        }
                      }
                    break;

                    case "rm":
                      NodeList foldersrm = xmlData.item(i).getChildNodes();
                      for (int j = 0; j < foldersrm.getLength(); j++) {
                        if (!foldersrm.item(j).getNodeName().equals("#text")) {
                          File.rmdir(foldersrm.item(j).getTextContent());
                        }
                      }
                    break;

                    case "success": Text.successln(xmlData.item(i).getTextContent()); break;
                    case "info": Text.infoln(xmlData.item(i).getTextContent()); break;
                    case "warning": Text.warningln(xmlData.item(i).getTextContent()); break;
                  }
                }
              }
            }

        }
      } catch (Exception e) {
        Text.errorln("Ups unrecognized command\n");
      }
    } while (!exit);
  }

  private static boolean createFile(NodeList xmlData, int i, String command,boolean mode) {
    return File.writeFile(
      xmlData.item(i).getTextContent(),
      xmlData.item(i).getAttributes(),
      mode ?
        xmlData.item(i).getAttributes().getNamedItem("dir").getTextContent()
      :
        command
    );
  }
}