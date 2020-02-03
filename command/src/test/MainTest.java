package test;

public class MainTest {

	public static void main(String[] args) {
		String example = "nuevo-dato-ejemplo";
		System.out.println(TextTransform.upperCamelCase(example));
		System.out.println(TextTransform.lowerCamelCase(example));
		System.out.println(TextTransform.snakeCase(example));
		System.out.println(TextTransform.upperSnakeCase(example));
	}

}
