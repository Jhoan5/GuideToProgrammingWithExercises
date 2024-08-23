# CheatSheet for Java

## Input and Output Operations

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Output
        System.out.println("Hello World");  // Outputs text to the console

        // Input from console
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
        scanner.close();
    }
}
```

## Data Types

```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello World";  // String
        double num = 3.14159;  // Double
        int intVal = 42;  // Integer
        boolean boolVal = true;  // Boolean
        char character = 'A';  // Character
        long longVal = 123456789012345L;  // Long
        float floatVal = 3.14F;  // Float
        byte byteVal = 127;  // Byte
        short shortVal = 32000;  // Short
    }
}
```

## String Methods

```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello World";

        // Basic methods
        int length = str.length();  // Output: 11
        char firstChar = str.charAt(0);  // Output: 'H'
        int index = str.indexOf("World");  // Output: 6
        int lastIndex = str.lastIndexOf('o');  // Output: 7
        boolean contains = str.contains("World");  // Output: true
        boolean startsWith = str.startsWith("Hello");  // Output: true
        boolean endsWith = str.endsWith("World");  // Output: true

        // Manipulation methods
        String upper = str.toUpperCase();  // Output: 'HELLO WORLD'
        String lower = str.toLowerCase();  // Output: 'hello world'
        String trimmed = str.trim();  // Output: 'Hello World'
        String replaced = str.replace("World", "Everyone");  // Output: 'Hello Everyone'
        String subStr = str.substring(0, 5);  // Output: 'Hello'
        String[] parts = str.split(" ");  // Output: ['Hello', 'World']
        String paddedStart = String.format("%20s", str);  // Output: '            Hello World'
        String paddedEnd = String.format("%-20s", str);  // Output: 'Hello World            '
    }
}
```

## Number Methods

```java
public class Main {
    public static void main(String[] args) {
        double num = 3.14159;

        // Conversion and manipulation
        String fixedNum = String.format("%.2f", num);  // Output: '3.14'
        String expNum = String.format("%e", num);  // Output: '3.141590e+00'
        String precisionNum = String.format("%.4g", num);  // Output: '3.142'

        // Math methods
        int rounded = (int)Math.round(num);  // Output: 3
        int floored = (int)Math.floor(num);  // Output: 3
        int ceiled = (int)Math.ceil(num);  // Output: 4
        double absValue = Math.abs(-num);  // Output: 3.14159
        double max = Math.max(1, 2);  // Output: 2
        double min = Math.min(1, 2);  // Output: 1
        double random = Math.random();  // Random number between 0.0 and 1.0
        double sqrt = Math.sqrt(16);  // Output: 4
        double power = Math.pow(2, 3);  // Output: 8
        double logValue = Math.log(10);  // Output: 2.302585092994046
    }
}
```

## Array Methods

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };

        // Accessing elements
        int length = arr.length;  // Output: 5
        int firstElement = arr[0];  // Output: 1

        // Iteration methods
        for (int item : arr) {
            System.out.print(item + " ");  // Output: 1 2 3 4 5
        }

        // Transformation methods
        int[] doubled = Arrays.stream(arr).map(x -> x * 2).toArray();  // Output: [2, 4, 6, 8, 10]
        int[] filtered = Arrays.stream(arr).filter(x -> x > 3).toArray();  // Output: [4, 5]
        int sum = Arrays.stream(arr).sum();  // Output: 15

        // Sorting and reversing
        Arrays.sort(arr);  // Sorts the array in place: [1, 2, 3, 4, 5]
        int[] reversed = IntStream.range(0, arr.length)
                                  .map(i -> arr[arr.length - 1 - i])
                                  .toArray();  // Output: [5, 4, 3, 2, 1]

        // Utility methods
        int[] newArr = Arrays.copyOf(arr, arr.length + 1);  // Increase array size by 1
        newArr[newArr.length - 1] = 6;  // Output: [1, 2, 3, 4, 5, 6]
        int lastElement = newArr[newArr.length - 1];  // Output: 6
    }
}
```

## HashMap Methods

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("a", 1);
        map.put("b", 2);
        map.put("c", 3);

        // Accessing properties
        boolean containsKey = map.containsKey("a");  // Output: true
        int value = map.get("b");  // Output: 2

        // Manipulation
        map.put("d", 4);  // Output: { "a": 1, "b": 2, "c": 3, "d": 4 }
        map.remove("a");  // Removes key 'a'
        for (var entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

## Function Syntax

```java
public class Main {
    public static void main(String[] args) {
        // Function definition
        String greet(String name) {
            return "Hello, " + name + "!";
        }

        // Anonymous function
        java.util.function.BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

        // Default parameters are not directly supported, so we use method overloading
        String greet() {
            return greet("Guest");
        }

        // Variable-length arguments
        int sumNumbers(int... numbers) {
            return Arrays.stream(numbers).sum();
        }

        // Closures are handled via inner classes or lambda expressions
        class Counter {
            private int count = 0;

            public int increment() {
                return ++count;
            }
        }

        Counter counter = new Counter();
        System.out.println(counter.increment());  // Output: 1
        System.out.println(counter.increment());  // Output: 2
    }
}
```

## Java Features

```java
public class Main {
    public static void main(String[] args) {
        // Tuple (Not natively supported, can use record classes in Java 14+)
        record Person(int id, String name) {}

        Person person = new Person(1, "John");
        System.out.println(person.id());  // Output: 1
        System.out.println(person.name());  // Output: John

        // Classes
        class Person {
            private String name;

            public Person(String name) {
                this.name = name;
            }

            public String greet() {
                return "Hello, " + name + "!";
            }
        }

        Person p = new Person("John");
        System.out.println(p.greet());  // Output: 'Hello, John!'

        // Exception Handling
        try {
            throw new Exception("Something went wrong");
        } catch (Exception e) {
            System.out.println(e.getMessage());  // Output: 'Something went wrong'
        } finally {
            System.out.println("This will always execute");
        }

        // Custom exceptions
        class CustomException extends Exception {
            public CustomException(String message) {
                super(message);
            }
        }

        throw new CustomException("This is a custom error");
    }
}
```

## Regular Expressions

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("hello", Pattern.CASE_INSENSITIVE);
        String str = "Hello world!";

        // Test for a match
        Matcher matcher = pattern.matcher(str);
        boolean isMatch = matcher.find();  // Output: true

        // Match

 the string
        if (isMatch) {
            System.out.println(matcher.group());  // Output: 'Hello'
        }

        // Replace text
        String replaced = matcher.replaceAll("hi");  // Output: 'hi world!'
        System.out.println(replaced);

        // Split string
        String[] parts = "one,two,three".split(",");  // Output: ['one', 'two', 'three']
        for (String part : parts) {
            System.out.println(part);
        }
    }
}
```
