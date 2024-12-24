---
title: "Factorial Using Recursion"
date: 2024-12-23
hidden: true
summary: This program computes the factorial of a given number using recursion. It explains the recursive approach and includes examples to demonstrate how the function works step by step.
---

```python
def fact(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fact(n - 1)

num = int(input("Enter number to find factorial: "))
print(f"{num}! is {fact(num)}")

```
