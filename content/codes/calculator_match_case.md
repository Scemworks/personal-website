---
title: "Calculator Using Match-Case"
date: 2024-12-23
hidden: true
summary: This program demonstrates a calculator that performs basic arithmetic operations using match-case statements. It provides a clear example of using match-case statements in programming.
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

if o == "+":
    res = add(x1, y1)
elif o == "-":
    res = sub(x1, y1)
elif o == "*":
    res = prod(x1, y1)
elif o == "/":
    res = div(x1, y1)
elif o == "%":
    res = mod(x1, y1)
else:
    res = None

if res is not None:
    print(f"{x1} {o} {y1} = {res}")
else:
    print("Invalid operation")
