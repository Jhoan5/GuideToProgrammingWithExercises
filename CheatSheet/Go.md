# CheatSheet for Go

## Input and Output Operations

```go
package main

import (
    "fmt"
    "bufio"
    "os"
)

func main() {
    // Output
    fmt.Println("Hello World") // Outputs text to the console

    // Input
    var name string
    fmt.Print("Enter your name: ")
    fmt.Scanln(&name)
    fmt.Printf("Hello, %s!\n", name)

    // Input from file (example usage)
    file, err := os.Open("input.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }
    if err := scanner.Err(); err != nil {
        fmt.Println(err)
    }
}
```

## Basic Data Types

```go
package main

import "fmt"

func main() {
    var integer int = 42            // Integer
    var floatingPoint float32 = 3.14 // Float
    var doublePrecision float64 = 3.14159 // Double
    var character rune = 'A'       // Character (rune)
    var boolean bool = true        // Boolean

    fmt.Println(integer, floatingPoint, doublePrecision, character, boolean)
}
```

## Arrays and Slices

```go
package main

import "fmt"

func main() {
    // Array
    var arr [5]int = [5]int{1, 2, 3, 4, 5}
    fmt.Println(arr) // Output: [1 2 3 4 5]

    // Slice
    slice := []int{1, 2, 3, 4, 5}
    slice = append(slice, 6)
    fmt.Println(slice) // Output: [1 2 3 4 5 6]

    // Iterating over a slice
    for _, value := range slice {
        fmt.Println(value) // Output: 1 2 3 4 5 6
    }
}
```

## Functions

```go
package main

import "fmt"

// Function declaration
func add(a int, b int) int {
    return a + b
}

// Function with multiple return values
func divide(a, b int) (int, int) {
    return a / b, a % b
}

func main() {
    fmt.Println("Sum:", add(5, 3)) // Output: Sum: 8

    quotient, remainder := divide(10, 3)
    fmt.Println("Quotient:", quotient, "Remainder:", remainder) // Output: Quotient: 3 Remainder: 1
}
```

## Structs and Methods

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// Method associated with Person
func (p Person) Greet() string {
    return "Hello, my name is " + p.Name
}

func main() {
    person := Person{Name: "John", Age: 30}
    fmt.Println(person.Greet()) // Output: Hello, my name is John
}
```

## Interfaces

```go
package main

import "fmt"

// Define an interface
type Greeter interface {
    Greet() string
}

// Implement the interface
type Person struct {
    Name string
}

func (p Person) Greet() string {
    return "Hello, " + p.Name
}

func main() {
    var greeter Greeter
    greeter = Person{Name: "John"}
    fmt.Println(greeter.Greet()) // Output: Hello, John
}
```

## Goroutines and Channels

```go
package main

import (
    "fmt"
    "time"
)

// Function to run as a goroutine
func sayHello() {
    for i := 0; i < 3; i++ {
        fmt.Println("Hello")
        time.Sleep(1 * time.Second)
    }
}

func main() {
    // Start goroutine
    go sayHello()

    // Main thread work
    for i := 0; i < 3; i++ {
        fmt.Println("Main")
        time.Sleep(1 * time.Second)
    }
}
```

## Channels

```go
package main

import (
    "fmt"
)

func sendData(ch chan int) {
    for i := 0; i < 5; i++ {
        ch <- i // Send data to channel
    }
    close(ch) // Close channel
}

func main() {
    ch := make(chan int)
    go sendData(ch)

    // Receive data from channel
    for value := range ch {
        fmt.Println(value) // Output: 0 1 2 3 4
    }
}
```

## Error Handling

```go
package main

import (
    "fmt"
    "errors"
)

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err) // Output: Error: division by zero
    } else {
        fmt.Println("Result:", result)
    }
}
```

## File I/O

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // Writing to a file
    file, err := os.Create("example.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()
    file.WriteString("Hello, file!\n")

    // Reading from a file
    data, err := os.ReadFile("example.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(data)) // Output: Hello, file!
}
```

## Packages and Modules

```go
// File: main.go
package main

import (
    "fmt"
    "myapp/greetings"
)

func main() {
    fmt.Println(greetings.Hello("World"))
}

// File: greetings/hello.go
package greetings

func Hello(name string) string {
    return "Hello, " + name
}
```
