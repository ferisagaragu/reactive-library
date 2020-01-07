import core.command.Command;
import core.doc.Documentation;
import core.download.Download;
import core.file.File;
import core.text.Text;
import org.fusesource.jansi.AnsiConsole;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.w3c.dom.NodeList;


public class App {

  public static void main(String[] args) {
    AnsiConsole.systemInstall();
    Download.update();
    JSONObject version = core.file.File.readJSON("C:\\.reactive-data\\meta\\version.json");
    NodeList presentationDoc = File.readXml("C:\\.reactive-data\\meta\\presentation.xml").getElementsByTagName("title");
    JSONObject config = File.readJSON("C:\\.reactive-data\\reactive-config.json");

    boolean exit = false;
    final String configPath = "C:\\.reactive-data\\";
    String absolutePath = args[0] + "\\src";

    Text.title("\n" + presentationDoc.item(0).getTextContent());
    Text.version("\n" + presentationDoc.item(1).getTextContent().replace("${version}", version.get("version").toString()));
    Text.folder("commands executed in the " + absolutePath + " folder \n");

    do {
      try {
        String[] command = Text.input().split(" ");

        if (command[0].equals("help")) {
          Documentation.generateDoc(config);
        } if (command[0].equals("location")) {
          Text.infoln("Path in " + absolutePath);
        }else if (command[0].equals("bye")) {
          exit = true;
        } else if (command[0].equals("cd")) {
          if (command[1].equals("..")) {
            absolutePath = args[0] + "\\src";
            Text.warningln("Path change to " + absolutePath);
          } else {
            if (new java.io.File(absolutePath + command[1]).exists()) {
              absolutePath = new java.io.File(absolutePath + command[1]).getPath();
              Text.warningln("Path change to " + absolutePath);
            } else {
              Text.errorln("Path not found " + new java.io.File(absolutePath + command[1]).getAbsolutePath());
            }
          }
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
                        status = createFile(absolutePath, xmlData, i, null, true, false);
                      } else {
                        if (File.attributeExist(xmlData.item(i).getAttributes(), "folder")) {
                          String folder = xmlData.item(i).getAttributes().getNamedItem("folder").getTextContent();
                          status = createFile(absolutePath, xmlData, i, command[2], false, Boolean.parseBoolean(folder));
                        } else {
                          status = createFile(absolutePath, xmlData, i, command[2], false, false);
                        }
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
                          File.mkdir(absolutePath, folders.item(j).getTextContent());
                        }
                      }
                    break;

                    case "rm":
                      NodeList foldersrm = xmlData.item(i).getChildNodes();
                      for (int j = 0; j < foldersrm.getLength(); j++) {
                        if (!foldersrm.item(j).getNodeName().equals("#text")) {
                          File.rmdir(absolutePath, foldersrm.item(j).getTextContent());
                        }
                      }
                    break;

                    case "command":
                      Command.ex(xmlData.item(i).getTextContent());
                    break;

                    case "success": Text.successln(xmlData.item(i).getTextContent()); break;
                    case "info": Text.infoln(xmlData.item(i).getTextContent()); break;
                    case "warning": Text.warningln(xmlData.item(i).getTextContent()); break;
                    case "location":
                      String command2[] = xmlData.item(i).getTextContent().split(" ");
                      if (command2[1].equals("..")) {
                        absolutePath = args[0] + "\\src";
                        Text.warningln("Path change to " + absolutePath);
                      } else {
                        if (new java.io.File(absolutePath + command2[1]).exists()) {
                          absolutePath = new java.io.File(absolutePath + command2[1]).getPath();
                          Text.warningln("Path change to " + absolutePath);
                        } else {
                          Text.errorln("Path not found " + new java.io.File(absolutePath + command2[1]).getAbsolutePath());
                        }
                      }
                    break;
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

  private static boolean createFile(String absolutePath, NodeList xmlData, int i, String command,boolean mode, boolean folder) {
    return File.writeFile(
      absolutePath,
      xmlData.item(i).getTextContent(),
      xmlData.item(i).getAttributes(),
      mode ?
        xmlData.item(i).getAttributes().getNamedItem("dir").getTextContent()
      :
        command
      ,
        folder
    );
  }
}