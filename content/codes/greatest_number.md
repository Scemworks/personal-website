---
title: "Greatest Number Among Three"
date: 2024-12-23
hidden: true
summary: This program finds the greatest number among three user-inputted numbers. It uses conditional statements to compare the numbers and determine the largest one, showcasing basic programming logic.
---

```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))
if (num1 > num2 and num1 > num3):
    greatest = num1
elif (num2 > num3):
    greatest = num2
else:
    greatest = num3
print(f"The greatest is {greatest}")

```
