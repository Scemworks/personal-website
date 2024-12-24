---
title: "Equilateral Triangle Pattern"
date: 2024-12-23
hidden: true
summary: This program prints an equilateral triangle pattern using asterisks. It uses nested loops to create the desired shape, helping to visualize control flow in programming.
---

```python
n = int(input("Enter no. of rows: "))
for i in range(1, n + 1):
    for j in range(1, n - i + 1):
        print(" ", end="")
    for j in range(1, i + 1):
        print(" *", end="")
    print()
