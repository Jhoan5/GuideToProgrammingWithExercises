# CheatSheet for Python

## Input and Output Operations

```python
# Output
print('Hello World')  # Outputs text to the console

# Input from user
name = input('Enter your name: ')  # Reads input from the console
print(f'Hello, {name}!')  # Outputs text to the console
```

## Data Types

```python
str_val = 'Hello World'  # string
num_val = 3.14159  # float
int_val = 42  # integer
lst = [1, 2, 3, 4, 5]  # list
tpl = (1, 2, 3)  # tuple
dct = {'a': 1, 'b': 2, 'c': 3}  # dictionary
bool_val = True  # boolean
none_val = None  # NoneType
```

## String Methods

```python
str_val = 'Hello World'

# Basic methods
len(str_val)  # Output: 11
str_val[0]  # Output: 'H'
str_val.find('World')  # Output: 6
str_val.rfind('o')  # Output: 7
'World' in str_val  # Output: True
str_val.startswith('Hello')  # Output: True
str_val.endswith('World')  # Output: True

# Manipulation methods
str_val.upper()  # Output: 'HELLO WORLD'
str_val.lower()  # Output: 'hello world'
str_val.strip()  # Output: 'Hello World' (removes whitespace from both ends)
str_val.replace('World', 'Everyone')  # Output: 'Hello Everyone'
str_val[:5]  # Output: 'Hello'
str_val.split(' ')  # Output: ['Hello', 'World']
str_val + '!!!'  # Output: 'Hello World!!!'
str_val.ljust(20, '*')  # Output: 'Hello World*******'
str_val.rjust(20, '*')  # Output: '*******Hello World'
str_val.zfill(20)  # Output: '00000000000Hello World'

# Additional methods
import re
re.findall('o', str_val)  # Output: ['o', 'o'] (find all matches)
str_val.normalize()  # Python does not have a normalize() method, Unicode is handled differently
```

## Number Methods

```python
num_val = 3.14159

# Conversion and manipulation
format(num_val, '.2f')  # Output: '3.14'
'{:.2e}'.format(num_val)  # Output: '3.14e+00'
'{:.4}'.format(num_val)  # Output: '3.142'

# Math methods
round(num_val)  # Output: 3
int(num_val)  # Output: 3
import math
math.floor(num_val)  # Output: 3
math.ceil(num_val)  # Output: 4
abs(-num_val)  # Output: 3.14159
max(1, 2, 3)  # Output: 3
min(1, 2, 3)  # Output: 1
import random
random.random()  # Output: Random number between 0 and 1
math.sqrt(16)  # Output: 4
pow(2, 3)  # Output: 8
math.log(10)  # Output: 2.302585092994046

# Additional methods
math.cbrt(27)  # Output: 3.0 (cube root, available from Python 3.11)
```

## List Methods

```python
lst = [1, 2, 3, 4, 5]

# Accessing elements
len(lst)  # Output: 5
lst[0]  # Output: 1

# Iteration methods
for item in lst:
    print(item)  # Output: 1 2 3 4 5

# Transformation methods
list(map(lambda x: x * 2, lst))  # Output: [2, 4, 6, 8, 10]
list(filter(lambda x: x > 3, lst))  # Output: [4, 5]
sum(lst)  # Output: 15

# Sorting and reversing
lst.sort()  # Sorts the list in place: [1, 2, 3, 4, 5]
lst.reverse()  # Reverses the list in place: [5, 4, 3, 2, 1]

# Utility methods
lst.append(6)  # Output: [1, 2, 3, 4, 5, 6]
lst.pop()  # Output: 6 (removes and returns the last element)
lst.pop(0)  # Output: 1 (removes and returns element at index 0)
lst.insert(0, 0)  # Output: [0, 2, 3, 4, 5]
lst.remove(2)  # Output: [0, 3, 4, 5] (removes the first occurrence of 2)
lst.extend([7, 8])  # Output: [0, 3, 4, 5, 7, 8]
lst[1:4]  # Output: [3, 4, 5]
lst = [1, [2, [3, [4]]]]
lst[1][1][0]  # Output: 3 (accessing nested list)
lst_flattened = [item for sublist in lst for item in sublist]  # Flattens one level (manual)
```

## Dictionary Methods

```python
dct = {'a': 1, 'b': 2, 'c': 3}

# Accessing properties
dct['a']  # Output: 1

# Property manipulation
'a' in dct  # Output: True
dct.keys()  # Output: dict_keys(['a', 'b', 'c'])
dct.values()  # Output: dict_values([1, 2, 3])
dct.items()  # Output: dict_items([('a', 1), ('b', 2), ('c', 3)])

# Dictionary manipulation
dct.update({'d': 4})  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
del dct['a']  # Removes key 'a'
dct.copy()  # Creates a shallow copy
dct.clear()  # Clears all items in dictionary
```

## Function Syntax

```python
# Function definition
def greet(name):
    return f'Hello, {name}!'

# Lambda function
add = lambda a, b: a + b

# Default parameters
def greet(name='Guest'):
    return f'Hello, {name}!'

# Variable-length arguments
def sum_numbers(*numbers):
    return sum(numbers)

# Keyword arguments
def print_info(name, **info):
    print(f'Name: {name}')
    for key, value in info.items():
        print(f'{key}: {value}')

# Closures
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

counter = make_counter()
counter()  # Output: 1
counter()  # Output: 2
```

## Python Features

```python
# List comprehensions
squares = [x ** 2 for x in range(10)]  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Dictionary comprehensions
squares_dict = {x: x ** 2 for x in range(10)}  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

# Sets comprehensions
squares_set = {x ** 2 for x in range(10)}  # Output: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Classes
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f'Hello, {self.name}!'

p = Person('John')
p.greet()  # Output: 'Hello, John!'

# Exception Handling
try:
    # Code that may throw an error
    raise Exception('Something went wrong')
except Exception as e:
    print(e)  # Output: 'Something went wrong'
finally:
    print('This will always execute')

# Custom errors
class CustomError(Exception):
    def __init__(self, message):
        super().__init__(message)
        self.name = 'CustomError'

raise CustomError('This is a custom error')
```

## Regular Expressions

```python
import re

regex = re.compile(r'hello', re.IGNORECASE)  # Case-insensitive match
str_val = 'Hello world!'

# Test for a match
regex.search(str_val)  # Output: <

re.Match object; span=(0, 5), match='Hello'>

# Match the string
regex.findall(str_val)  # Output: ['Hello']

# Replace text
regex.sub('hi', str_val)  # Output: 'hi world!'

# Split string
re.split(r',', 'one,two,three')  # Output: ['one', 'two', 'three']

# Additional methods
match = regex.match('Hello world!')  # Output: <re.Match object; span=(0, 5), match='Hello'>
matches = regex.finditer('Hello world!')  # Output: Iterator of all matches
```
