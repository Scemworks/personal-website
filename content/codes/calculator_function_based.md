---
title: "Calculator Using Function"
date: 2024-12-23
hidden: true
summary: This program demonstrates a calculator that performs basic arithmetic operations using functions. It provides a clear example of using functions in programming.
---

```python
def add(x, y):
    return x + y

def sub(x, y):
    return x - y

def prod(x, y):
    return x * y

def div(x, y):
    return x / y

def mod(x, y):
    return x % y

print("Available Operations: +, -, *, /, %")
o = input("Enter operation: ")
x1 = int(input("Enter num1: "))
y1 = int(input("Enter num2: "))

match o:
    case "+":
        res = add(x1, y1)
    case "-":
        res = sub(x1, y1)
    case "*":
        res = prod(x1, y1)
    case "/":
        res = div(x1, y1)
    case "%":
        res = mod(x1, y1)
    case _:
        res = None

if res is not None:
    print(f"{x1} {o} {y1} = {res}")
else:
    print("Invalid operation")
