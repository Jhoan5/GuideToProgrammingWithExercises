# CheatSheet for C++

## Input and Output Operations

```cpp
#include <iostream>
#include <string>

int main() {
    // Output
    std::cout << "Hello World" << std::endl;  // Outputs text to the console

    // Input
    std::string name;
    std::cout << "Enter your name: ";
    std::cin >> name;
    std::cout << "Hello, " << name << "!" << std::endl;

    return 0;
}
```

## Basic Data Types

```cpp
int integer = 42;           // Integer
float floatingPoint = 3.14f; // Float
double doublePrecision = 3.14159; // Double
char character = 'A';       // Character
bool boolean = true;        // Boolean
```

## Arrays

```cpp
int arr[] = {1, 2, 3, 4, 5}; // Array of integers

// Accessing elements
int firstElement = arr[0];  // Output: 1

// Iterating over array
for(int i = 0; i < 5; ++i) {
    std::cout << arr[i] << " "; // Output: 1 2 3 4 5
}
std::cout << std::endl;

// Array size
int size = sizeof(arr) / sizeof(arr[0]); // Output: 5
```

## Functions

```cpp
#include <iostream>

// Function declaration
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << "Sum: " << add(5, 3) << std::endl; // Output: Sum: 8
    return 0;
}

// Function with default parameters
int multiply(int a, int b = 2) {
    return a * b;
}

std::cout << "Multiply: " << multiply(5) << std::endl; // Output: Multiply: 10
```

## Classes and Objects

```cpp
#include <iostream>
#include <string>

class Person {
public:
    std::string name;
    int age;

    // Constructor
    Person(std::string name, int age) : name(name), age(age) {}

    // Method
    void greet() {
        std::cout << "Hello, my name is " << name << std::endl;
    }
};

int main() {
    Person person("John Doe", 30);
    person.greet(); // Output: Hello, my name is John Doe
    return 0;
}
```

## Inheritance

```cpp
#include <iostream>
#include <string>

class Animal {
public:
    std::string name;
    Animal(std::string name) : name(name) {}
    void speak() {
        std::cout << name << " makes a sound" << std::endl;
    }
};

class Dog : public Animal {
public:
    Dog(std::string name) : Animal(name) {}
    void speak() {
        std::cout << name << " barks" << std::endl;
    }
};

int main() {
    Dog dog("Buddy");
    dog.speak(); // Output: Buddy barks
    return 0;
}
```

## Templates

```cpp
#include <iostream>

// Function template
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << "Max int: " << maximum(3, 7) << std::endl;  // Output: Max int: 7
    std::cout << "Max double: " << maximum(3.5, 2.5) << std::endl;  // Output: Max double: 3.5
    return 0;
}

// Class template
template <typename T>
class Box {
public:
    T value;
    Box(T v) : value(v) {}
    void display() {
        std::cout << "Value: " << value << std::endl;
    }
};

int main() {
    Box<int> intBox(123);
    intBox.display(); // Output: Value: 123
    return 0;
}
```

## Standard Library Containers

```cpp
#include <iostream>
#include <vector>
#include <map>
#include <string>

int main() {
    // Vector
    std::vector<int> vec = {1, 2, 3, 4, 5};
    vec.push_back(6);
    for(int num : vec) {
        std::cout << num << " ";  // Output: 1 2 3 4 5 6
    }
    std::cout << std::endl;

    // Map
    std::map<std::string, int> ageMap;
    ageMap["Alice"] = 30;
    ageMap["Bob"] = 25;
    for(auto& pair : ageMap) {
        std::cout << pair.first << " is " << pair.second << " years old" << std::endl;
    }

    return 0;
}
```

## Exception Handling

```cpp
#include <iostream>
#include <stdexcept>

int divide(int a, int b) {
    if (b == 0) {
        throw std::runtime_error("Division by zero");
    }
    return a / b;
}

int main() {
    try {
        std::cout << "Result: " << divide(10, 2) << std::endl; // Output: Result: 5
        std::cout << "Result: " << divide(10, 0) << std::endl; // Throws exception
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl; // Output: Error: Division by zero
    }
    return 0;
}
```

## File I/O

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    // Writing to a file
    std::ofstream outFile("example.txt");
    if (outFile.is_open()) {
        outFile << "Hello, file!" << std::endl;
        outFile.close();
    } else {
        std::cerr << "Unable to open file for writing" << std::endl;
    }

    // Reading from a file
    std::ifstream inFile("example.txt");
    std::string line;
    if (inFile.is_open()) {
        while (getline(inFile, line)) {
            std::cout << line << std::endl; // Output: Hello, file!
        }
        inFile.close();
    } else {
        std::cerr << "Unable to open file for reading" << std::endl;
    }

    return 0;
}
```

## Smart Pointers

```cpp
#include <iostream>
#include <memory>

class MyClass {
public:
    MyClass() { std::cout << "MyClass constructor" << std::endl; }
    ~MyClass() { std::cout << "MyClass destructor" << std::endl; }
};

int main() {
    // Unique Pointer
    std::unique_ptr<MyClass> ptr1 = std::make_unique<MyClass>();
    // Automatic cleanup when ptr1 goes out of scope

    // Shared Pointer
    std::shared_ptr<MyClass> ptr2 = std::make_shared<MyClass>();
    {
        std::shared_ptr<MyClass> ptr3 = ptr2; // ptr2 and ptr3 share ownership
    } // ptr3 goes out of scope, but ptr2 still owns the object

    return 0;
}
```

## Lambda Expressions

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    // Lambda expression
    std::for_each(numbers.begin(), numbers.end(), [](int num) {
        std::cout << num << " ";  // Output: 1 2 3 4 5
    });
    std::cout << std::endl;

    // Lambda with capture
    int factor = 2;
    std::for_each(numbers.begin(), numbers.end(), [factor](int& num) {
        num *= factor;
    });

    std::for_each(numbers.begin(), numbers.end(), [](int num) {
        std::cout << num << " ";  // Output: 2 4 6 8 10
    });
    std::cout << std::endl;

    return 0;
}
```

## Modern C++ Features (C++11 and Beyond)

```cpp
#include <iostream>
#include <array>
#include <chrono>
#include <thread>

// Range-based for loop (C++11)
int main() {
    std::array<int, 5> arr = {1, 2, 3, 4, 5};
    for (auto elem : arr) {
        std::cout << elem << " ";  // Output: 1 2 3 4 5
    }
    std::cout << std::endl;

    // Auto keyword (C++11)
    auto x = 10; // x is int
    auto y = 3.14; // y is double

    // nullptr (C++11)
    int* ptr = nullptr; // Null pointer

    // Ranged-based for with auto
    for (auto& elem : arr) {
        elem *= 2;
    }
    for (auto elem : arr)

 {
        std::cout << elem << " ";  // Output: 2 4 6 8 10
    }
    std::cout << std::endl;

    // Chrono for time measurements (C++11)
    auto start = std::chrono::high_resolution_clock::now();
    std::this_thread::sleep_for(std::chrono::seconds(1));
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = end - start;
    std::cout << "Elapsed time: " << elapsed.count() << " seconds" << std::endl;

    return 0;
}
```
