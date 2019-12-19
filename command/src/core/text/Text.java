package core.text;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import static org.fusesource.jansi.Ansi.ansi;
import static org.fusesource.jansi.Ansi.Color.BLUE;
import static org.fusesource.jansi.Ansi.Color.CYAN;
import static org.fusesource.jansi.Ansi.Color.GREEN;
import static org.fusesource.jansi.Ansi.Color.MAGENTA;
import static org.fusesource.jansi.Ansi.Color.RED;
import static org.fusesource.jansi.Ansi.Color.YELLOW;
import static org.fusesource.jansi.Ansi.Color.DEFAULT;

/**
 *
 * @author Fernando García
 */
public class Text {

  //INTERNAL
  public static void title(String text) {
    System.out.print(ansi().fg(MAGENTA).a(text).reset());
  }

  public static void version(String text) {
    System.out.println(ansi().fg(GREEN).a(text).reset());
  }

  public static void folder(String text) {
    System.out.println(ansi().fg(YELLOW).a(text).reset());
  }
  //===========

  public static void info(String text) {
    System.out.print(ansi().fg(CYAN).a(".reactive-info> " + text).reset());
  }

  public static void infoln(String text) {
    System.out.println(ansi().fg(CYAN).a(".reactive-info> " + text).reset());
  }

  public static void warning(String text) {
    System.out.print(ansi().fg(YELLOW).a(".reactive-warning> " + text).reset());
  }

  public static void warningln(String text) {
    System.out.println(ansi().fg(YELLOW).a(".reactive-warning> " + text).reset());
  }

  public static void success(String text) {
    System.out.print(ansi().fg(GREEN).a(".reactive-success> " + text).reset());
  }

  public static void successln(String text) {
    System.out.println(ansi().fg(GREEN).a(".reactive-success> " + text).reset());
  }

  public static void error(String text) {
    System.out.print(ansi().fg(RED).a(".reactive-error> " + text).reset());
  }

  public static void errorln(String text) {
    System.out.println(ansi().fg(RED).a(".reactive-error> " + text).reset());
  }

  public static void def(String text) {
    System.out.print(ansi().fg(DEFAULT).a(".reactive-bot> " + text).reset());
  }

  public static void defln(String text) {
    System.out.println(ansi().fg(DEFAULT).a(".reactive-bot> " + text).reset());
  }

  public static String input() {
    try {
      System.out.print(ansi().fg(BLUE).a(".reactive> ").reset());
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
      return reader.readLine();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return null;
  }

  public static String toCamelCase(String name) {
    if (name.split("-").length > 1) {
      String data[] = name.split("-");
      String out = "";

      for (String string : data) {
        String upper = ("" + string.charAt(0)).toUpperCase();
        out += (upper + string.substring(1, string.length()));
      }

      return out;
    } else {
      String out = "";
      String upper = ("" + name.charAt(0)).toUpperCase();
      out += (upper + name.substring(1, name.length()));
      return out;
    }
  }

  public static String dropExtension(String text) {
    String[] out = text.split("\\.");
    String finalOut = "";

    for (int i = 0; i < out.length -1; i++) {
      finalOut += out[i] + ".";
    }

    return finalOut.substring(0, finalOut.length() - 1);
  }
}