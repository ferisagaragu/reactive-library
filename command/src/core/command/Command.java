package core.command;

import java.io.*;

import static org.fusesource.jansi.Ansi.Color.CYAN;
import static org.fusesource.jansi.Ansi.ansi;

public class Command {

    public static void ex(String command) {
      try {
        ProcessBuilder builder = new ProcessBuilder("cmd.exe", "/c", command);
        builder.redirectErrorStream(true);
        Process p = builder.start();
        BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream(), "UTF-8"));

        String line;
        while (true) {
          line = r.readLine();
          if (line == null) {
            break;
          }

          System.out.println(
            ansi()
            .fg(CYAN)
            .a(line)
            .reset()
          );
        }
      } catch (Exception e) {
        System.err.println(e.getMessage());
      }
    }

}