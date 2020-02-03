package test;

public class TextTransform {

	public static String upperCamelCase(String upperCamel) {
		if (upperCamel != null) {
			String[] split = upperCamel.split("-");
			String out = "";

			for (int i = 0; i < split.length; i++) {
				out += capitalize(split[i]);
			}

			return out;
		}

		return "";
	}

	public static String lowerCamelCase(String lowerCamel) {
		if (lowerCamel != null) {
			String[] split = lowerCamel.split("-");
			String out = "";

			for (int i = 0; i < split.length; i++) {
				if (i == 0) {
					out += split[i];
				} else {
					out += capitalize(split[i]);
				}
			}

			return out;
		}

		return "";
	}

	public static String snakeCase(String snakeCase) {
		if (snakeCase != null) {
			return snakeCase.replace("-", "_");
		}
		return "";
	}

	public static String upperSnakeCase(String snakeCase) {
		if (snakeCase != null) {
			return snakeCase
				.replace("-", "_")
				.toUpperCase();
		}
		return "";
	}


	private static String capitalize(String str) {
    if(str == null || str.isEmpty()) {
        return str;
    }

    return str.substring(0, 1).toUpperCase() + str.substring(1);
	}

}
