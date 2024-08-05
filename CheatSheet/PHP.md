# CheatSheet for PHP

## Input and Output Operations

```php
<?php
// Output
echo 'Hello World';  // Outputs text to the browser

// Input from browser
$name = htmlspecialchars($_GET['name'] ?? 'Guest');  // Get input from query parameter 'name'
echo "Hello, $name!";

// Input from CLI (Command Line Interface)
$handle = fopen("php://stdin", "r");
echo "Enter your name: ";
$name = trim(fgets($handle));
echo "Hello, $name!";
fclose($handle);
?>
```

## Data Types

```php
<?php
$str = 'Hello World';  // string
$num = 3.14159;  // float
$int = 42;  // integer
$arr = [1, 2, 3, 4, 5];  // array
$assocArr = ['a' => 1, 'b' => 2, 'c' => 3];  // associative array
$bool = true;  // boolean
$nullVal = null;  // null
?>
```

## String Methods

```php
<?php
$str = 'Hello World';

// Basic methods
strlen($str);  // Output: 11
$str[0];  // Output: 'H'
strpos($str, 'World');  // Output: 6
strrpos($str, 'o');  // Output: 7
str_contains($str, 'World');  // Output: true
str_starts_with($str, 'Hello');  // Output: true
str_ends_with($str, 'World');  // Output: true

// Manipulation methods
strtoupper($str);  // Output: 'HELLO WORLD'
strtolower($str);  // Output: 'hello world'
trim($str);  // Output: 'Hello World' (removes whitespace from both ends)
str_replace('World', 'Everyone', $str);  // Output: 'Hello Everyone'
substr($str, 0, 5);  // Output: 'Hello'
explode(' ', $str);  // Output: ['Hello', 'World']
$str . '!!!';  // Output: 'Hello World!!!'
str_pad($str, 20, '*', STR_PAD_LEFT);  // Output: '*******Hello World'
str_pad($str, 20, '*', STR_PAD_RIGHT);  // Output: 'Hello World*******'

// Additional methods
preg_match_all('/o/', $str, $matches);  // Output: [['o', 'o']]
?>
```

## Number Methods

```php
<?php
$num = 3.14159;

// Conversion and manipulation
number_format($num, 2);  // Output: '3.14'
sprintf('%.2e', $num);  // Output: '3.14e+00'
sprintf('%.4f', $num);  // Output: '3.1420'

// Math methods
round($num);  // Output: 3
floor($num);  // Output: 3
ceil($num);  // Output: 4
abs(-$num);  // Output: 3.14159
max(1, 2, 3);  // Output: 3
min(1, 2, 3);  // Output: 1
mt_rand(0, 100);  // Output: Random number between 0 and 100
sqrt(16);  // Output: 4
pow(2, 3);  // Output: 8
log(10);  // Output: 2.302585092994046
?>
```

## Array Methods

```php
<?php
$arr = [1, 2, 3, 4, 5];

// Accessing elements
count($arr);  // Output: 5
$arr[0];  // Output: 1

// Iteration methods
array_walk($arr, function($item) { echo $item . ' '; });  // Output: 1 2 3 4 5

// Transformation methods
array_map(function($x) { return $x * 2; }, $arr);  // Output: [2, 4, 6, 8, 10]
array_filter($arr, function($x) { return $x > 3; });  // Output: [4, 5]
array_sum($arr);  // Output: 15

// Sorting and reversing
sort($arr);  // Sorts the array in place: [1, 2, 3, 4, 5]
rsort($arr);  // Reverses the array in place: [5, 4, 3, 2, 1]

// Utility methods
array_push($arr, 6);  // Output: [1, 2, 3, 4, 5, 6]
array_pop($arr);  // Output: [1, 2, 3, 4, 5]
array_shift($arr);  // Output: [2, 3, 4, 5]
array_unshift($arr, 0);  // Output: [0, 2, 3, 4, 5]
array_splice($arr, 2, 1, [10]);  // Output: [0, 2, 10, 4, 5] (removes 1 element at index 2 and adds 10)
array_slice($arr, 1, 4);  // Output: [2, 10, 4]
array_merge($arr, [7, 8]);  // Output: [0, 2, 10, 4, 5, 7, 8]
?>
```

## Associative Array (Dictionary) Methods

```php
<?php
$dct = ['a' => 1, 'b' => 2, 'c' => 3];

// Accessing properties
$dct['a'];  // Output: 1

// Property manipulation
array_key_exists('a', $dct);  // Output: true
array_keys($dct);  // Output: ['a', 'b', 'c']
array_values($dct);  // Output: [1, 2, 3]
foreach ($dct as $key => $value) {
    echo "$key: $value\n";
}

// Dictionary manipulation
$dct['d'] = 4;  // Output: ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4]
unset($dct['a']);  // Removes key 'a'
$dct_copy = $dct;  // Creates a shallow copy
$dct = [];  // Clears all items in dictionary
?>
```

## Function Syntax

```php
<?php
// Function definition
function greet($name) {
    return "Hello, $name!";
}

// Anonymous function
$add = function($a, $b) {
    return $a + $b;
};

// Default parameters
function greet($name = 'Guest') {
    return "Hello, $name!";
}

// Variable-length arguments
function sumNumbers(...$numbers) {
    return array_sum($numbers);
}

// Closures
function makeCounter() {
    $count = 0;
    return function() use (&$count) {
        $count += 1;
        return $count;
    };
}

$counter = makeCounter();
$counter();  // Output: 1
$counter();  // Output: 2
?>
```

## PHP Features

```php
<?php
// Array destructuring
[$a, $b] = [1, 2];  // Output: $a = 1, $b = 2

// Classes
class Person {
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function greet() {
        return "Hello, $this->name!";
    }
}

$p = new Person('John');
echo $p->greet();  // Output: 'Hello, John!'

// Exception Handling
try {
    // Code that may throw an error
    throw new Exception('Something went wrong');
} catch (Exception $e) {
    echo $e->getMessage();  // Output: 'Something went wrong'
} finally {
    echo 'This will always execute';
}

// Custom errors
class CustomError extends Exception {
    public function __construct($message) {
        parent::__construct($message);
        $this->name = 'CustomError';
    }
}

throw new CustomError('This is a custom error');
?>
```

## Regular Expressions

```php
<?php
$regex = '/hello/i';  // Case-insensitive match
$str = 'Hello world!';

// Test for a match
preg_match($regex, $str, $matches);  // Output: Array ( [0] => Hello )

// Replace text
echo preg_replace($regex, 'hi', $str);  // Output: 'hi world!'

// Split string
print_r(preg_split('/,/', 'one,two,three'));  // Output: Array ( [0] => one [1] => two [2] => three )

// Additional methods
preg_match_all('/\w+/', $str, $matches);  // Output: Array ( [0] => Array ( [0] => Hello [1] => world ) )
?>
```
