# CheatSheet for C#

## Input and Output Operations

```csharp
using System;

class Program
{
    static void Main()
    {
        // Output
        Console.WriteLine("Hello World");  // Outputs text to the console

        // Input from console
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine($"Hello, {name}!");
    }
}
```

## Data Types

```csharp
using System;

class Program
{
    static void Main()
    {
        string str = "Hello World";  // string
        double num = 3.14159;  // double
        int intVal = 42;  // integer
        bool boolVal = true;  // boolean
        object obj = null;  // object (can hold any data type)
        char character = 'A';  // char
        decimal decVal = 1234567890.123456789m;  // decimal
    }
}
```

## String Methods

```csharp
using System;

class Program
{
    static void Main()
    {
        string str = "Hello World";

        // Basic methods
        int length = str.Length;  // Output: 11
        char firstChar = str[0];  // Output: 'H'
        int index = str.IndexOf("World");  // Output: 6
        int lastIndex = str.LastIndexOf('o');  // Output: 7
        bool contains = str.Contains("World");  // Output: true
        bool startsWith = str.StartsWith("Hello");  // Output: true
        bool endsWith = str.EndsWith("World");  // Output: true

        // Manipulation methods
        string upper = str.ToUpper();  // Output: 'HELLO WORLD'
        string lower = str.ToLower();  // Output: 'hello world'
        string trimmed = str.Trim();  // Output: 'Hello World'
        string replaced = str.Replace("World", "Everyone");  // Output: 'Hello Everyone'
        string subStr = str.Substring(0, 5);  // Output: 'Hello'
        string[] parts = str.Split(' ');  // Output: ['Hello', 'World']
        string paddedStart = str.PadLeft(20, '*');  // Output: '*******Hello World'
        string paddedEnd = str.PadRight(20, '*');  // Output: 'Hello World*******'
    }
}
```

## Number Methods

```csharp
using System;

class Program
{
    static void Main()
    {
        double num = 3.14159;

        // Conversion and manipulation
        string fixedNum = num.ToString("F2");  // Output: '3.14'
        string expNum = num.ToString("E2");  // Output: '3.14E+000'
        string precisionNum = num.ToString("G4");  // Output: '3.142'

        // Math methods
        int rounded = (int)Math.Round(num);  // Output: 3
        int floored = (int)Math.Floor(num);  // Output: 3
        int ceiled = (int)Math.Ceiling(num);  // Output: 4
        double absValue = Math.Abs(-num);  // Output: 3.14159
        double max = Math.Max(1, 2);  // Output: 2
        double min = Math.Min(1, 2);  // Output: 1
        double random = new Random().NextDouble();  // Random number between 0.0 and 1.0
        double sqrt = Math.Sqrt(16);  // Output: 4
        double power = Math.Pow(2, 3);  // Output: 8
        double logValue = Math.Log(10);  // Output: 2.302585092994046
    }
}
```

## Array Methods

```csharp
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] arr = { 1, 2, 3, 4, 5 };

        // Accessing elements
        int length = arr.Length;  // Output: 5
        int firstElement = arr[0];  // Output: 1

        // Iteration methods
        Array.ForEach(arr, item => Console.Write(item + " "));  // Output: 1 2 3 4 5

        // Transformation methods
        int[] doubled = arr.Select(x => x * 2).ToArray();  // Output: [2, 4, 6, 8, 10]
        int[] filtered = arr.Where(x => x > 3).ToArray();  // Output: [4, 5]
        int sum = arr.Sum();  // Output: 15

        // Sorting and reversing
        Array.Sort(arr);  // Sorts the array in place: [1, 2, 3, 4, 5]
        Array.Reverse(arr);  // Reverses the array in place: [5, 4, 3, 2, 1]

        // Utility methods
        Array.Resize(ref arr, arr.Length + 1);  // Increase array size by 1
        arr[arr.Length - 1] = 6;  // Output: [1, 2, 3, 4, 5, 6]
        int lastElement = arr[arr.Length - 1];  // Output: 6
    }
}
```

## Dictionary Methods

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var dict = new Dictionary<string, int> { { "a", 1 }, { "b", 2 }, { "c", 3 } };

        // Accessing properties
        bool containsKey = dict.ContainsKey("a");  // Output: true
        int value = dict["b"];  // Output: 2

        // Dictionary manipulation
        dict["d"] = 4;  // Output: { "a": 1, "b": 2, "c": 3, "d": 4 }
        dict.Remove("a");  // Removes key 'a'
        var keys = dict.Keys;  // Output: ICollection<string> { "b", "c", "d" }
        var values = dict.Values;  // Output: ICollection<int> { 2, 3, 4 }
        foreach (var kvp in dict)
        {
            Console.WriteLine($"{kvp.Key}: {kvp.Value}");
        }
    }
}
```

## Function Syntax

```csharp
using System;

class Program
{
    static void Main()
    {
        // Function definition
        string Greet(string name) {
            return $"Hello, {name}!";
        }

        // Anonymous function
        Func<int, int, int> add = (a, b) => a + b;

        // Default parameters
        string Greet(string name = "Guest") {
            return $"Hello, {name}!";
        }

        // Variable-length arguments
        int SumNumbers(params int[] numbers) {
            return numbers.Sum();
        }

        // Closures
        Func<int> MakeCounter()
        {
            int count = 0;
            return () => ++count;
        }

        var counter = MakeCounter();
        Console.WriteLine(counter());  // Output: 1
        Console.WriteLine(counter());  // Output: 2
    }
}
```

## C# Features

```csharp
using System;

class Program
{
    static void Main()
    {
        // Tuple
        var tuple = (1, "Hello", 3.14);  // Output: (1, "Hello", 3.14)
        var (num, text, pi) = tuple;  // Output: num = 1, text = "Hello", pi = 3.14

        // Classes
        class Person
        {
            public string Name { get; set; }

            public Person(string name)
            {
                Name = name;
            }

            public string Greet()
            {
                return $"Hello, {Name}!";
            }
        }

        var p = new Person("John");
        Console.WriteLine(p.Greet());  // Output: 'Hello, John!'

        // Exception Handling
        try
        {
            // Code that may throw an error
            throw new Exception("Something went wrong");
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);  // Output: 'Something went wrong'
        }
        finally
        {
            Console.WriteLine("This will always execute");
        }

        // Custom exceptions
        class CustomException : Exception
        {
            public CustomException(string message) : base(message)
            {
                this.Data["CustomData"] = "CustomDataValue";
            }
        }

        throw new CustomException("This is a custom error");
    }
}
```

## Regular Expressions

```csharp
using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        var regex = new Regex("hello", RegexOptions.IgnoreCase);
        string str = "Hello world!";

        // Test for a match
        bool isMatch = regex.IsMatch(str);  // Output: true

        // Match the string
        Match match = regex.Match(str);  // Output: 'Hello'
        Console.WriteLine(match.Value);

        // Replace text
        string replaced

 = regex.Replace(str, "hi");  // Output: 'hi world!'
        Console.WriteLine(replaced);

        // Split string
        string[] parts = Regex.Split("one,two,three", ",");  // Output: ['one', 'two', 'three']
        foreach (var part in parts)
        {
            Console.WriteLine(part);
        }
    }
}
```
