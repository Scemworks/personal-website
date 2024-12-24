---
title: "Diamond Pattern"
date: 2024-12-23
hidden: true
summary: This program prints a diamond pattern using asterisks. It utilizes nested loops to create the desired shape, helping to visualize control flow in programming.
---

```python
def print_hollow_diamond(n):
    for i in range(n):
        for j in range(n - i - 1):
            print(" ", end="")
        for j in range(2 * i + 1):
            if j == 0 or j == 2 * i:
                print("*", end="")
            else:
                print(" ", end="")
        print()
    for i in range(n - 2, -1, -1):
        for j in range(n - i - 1):
            print(" ", end="")
        for j in range(2 * i + 1):
            if j == 0 or j == 2 * i:
                print("*", end="")
            else:
                print(" ", end="")
        print()

n = int(input("Enter no. of rows: "))
print_hollow_diamond(n)
