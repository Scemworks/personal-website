---
title: "Downward Triangle Pattern"
date: 2024-12-23
hidden: true
summary: This program prints a downward triangle pattern using numbers. It uses nested loops to create the desired shape, helping to visualize control flow in programming.
---

```python
n = int(input("Enter no. of rows: "))
for i in range(n, 0, -1):
    for j in range(i):
        print(n - i + 1, end="")
    print()
