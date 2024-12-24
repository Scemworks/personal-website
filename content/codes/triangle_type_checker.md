---
title: "Triangle Type Checker"
date: 2024-12-23
hidden: true
summary: This program checks the type of a triangle based on its sides. It follows the triangle inequality theorem and uses conditional statements to determine the type of triangle.
---

```python
print("Remember to follow triangle inequality theorem")
a = int(input("1st side of triangle: "))
b = int(input("2nd side of triangle: "))
c = int(input("3rd side of triangle: "))

if ((a + b > c) and (b + c > a) and (c + a > b)):
    if (a == b == c):
        print("Equilateral triangle")
    elif (a == b or b == c or a == c):
        print("Isosceles triangle")
    else:
        print("Scalene triangle")
else:
    print("Not a triangle")
