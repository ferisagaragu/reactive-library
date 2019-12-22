package core.file;

import core.text.Text;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.*;

public class File {

  public static String read(String path) {
    try {
      java.io.File fileDir = new java.io.File(path);
      BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(fileDir), "UTF8"));
      String str;
      String out = "";

      while ((str = in.readLine()) != null) {
        out += str + "\n";
      }

      in.close();
      return out.substring(0, out.length() - 1);
    }
    catch (Exception e) { /*System.err.println(e.getMessage());*/ }

    return "";
  }

  public static Document readXml(String path) {
    try {
      java.io.File fXmlFile = new java.io.File(path);
      DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
      DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
      Document doc = dBuilder.parse(fXmlFile);
      doc.getDocumentElement().normalize();
      return doc;
    } catch (Exception e) { e.printStackTrace(); }

    return null;
  }

  public static JSONObject readJSON(String path) {
    try {
      JSONParser parser = new JSONParser();
      return (JSONObject) parser.parse(read(path));
    } catch (ParseException e) {
      e.printStackTrace();
    }
    return null;
  }

  public static boolean writeFile(String text, NamedNodeMap attributes, String path, boolean folder) {
    String absolutePath = System.getProperty("user.dir") + "\\src";
    String suffix = "";
    String[] dataName = path.split("/");
    String name = dataName[dataName.length - 1];

    try { suffix = attributes.getNamedItem("suffix").getTextContent(); } catch (Exception e) {}
    java.io.File file = new java.io.File(absolutePath + (folder ? path : path.replace(name, "") ));

    file.mkdirs();

    try {
      BufferedWriter out =
        new BufferedWriter(
          new OutputStreamWriter(
            new FileOutputStream(file + "\\" + name + attributes.getNamedItem("extension").getTextContent()),
            "utf-8"
          )
        );

      String outStg = text
        .replace("${name}", Text.toCamelCase(name) + suffix)
        .replace("${fileName}", Text.dropExtension(name + attributes.getNamedItem("extension").getTextContent()))
        .replace("${(}", "<")
        .replace("${)}", ">");

      out.write(outStg);
      out.close();
      return true;
    } catch (Exception e) {
      Text.errorln("check your xml layout\n");
    }

    return false;
  }

  public static boolean mkdir(String path) {
    String absolutePath = System.getProperty("user.dir") + "\\src";
    return new java.io.File(absolutePath + path).mkdirs();
  }

  public static boolean rmdir(String path) {
    String absolutePath = System.getProperty("user.dir") + "\\src" + path;
    return deleteDirectory(new java.io.File(absolutePath));
  }

  private static boolean deleteDirectory(java.io.File directoryToBeDeleted) {
    java.io.File[] allContents = directoryToBeDeleted.listFiles();
    if (allContents != null) {
      for (java.io.File file : allContents) {
        deleteDirectory(file);
      }
    }
    return directoryToBeDeleted.delete();
  }

  public static boolean attributeExist(NamedNodeMap node, String nodeName) {
    try {
      node.getNamedItem(nodeName).getTextContent();
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  public static String getFileName(String path) {
    return new java.io.File(path).getName();
  }
}
