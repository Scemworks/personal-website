---
title: "Multiplication Table"
date: 2024-12-23
hidden: true
summary: This program generates and displays the multiplication table for a specified number. It uses loops to iterate through the multiplication process, making it a useful tool for learning basic arithmetic.
---

```python
n = int(input("Enter a number: "))
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")
