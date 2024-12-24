---
title: "GCD Using Recursion"
date: 2024-12-23
hidden: true
summary: This program calculates the Greatest Common Divisor (GCD) of two integers using a recursive function. It illustrates the concept of recursion and how it can be applied to solve mathematical problems.
---

```python
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

n1 = int(input("Enter 1st number: "))
n2 = int(input("Enter 2nd number: "))
print(f"GCD of {n1} and {n2} is {gcd(n1, n2)}")

```
