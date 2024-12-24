---
title: "Fibonacci Series Using Recursion"
date: 2024-12-23
hidden: true
summary: This program generates Fibonacci numbers using a recursive approach. It explains the Fibonacci sequence and demonstrates how recursion can simplify the calculation of sequences.
---

```python
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

n = int(input("Enter no. of terms in Fibonacci series: "))
for i in range(n):
    print(fibonacci(i), end=" ")
