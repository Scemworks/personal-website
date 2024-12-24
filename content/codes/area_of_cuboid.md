---
title: "Area of Cuboid"
date: 2024-12-23
hidden: true
summary: This program calculates the surface area and volume of a cuboid based on user-provided dimensions. It demonstrates the application of mathematical formulas in programming.
---

```python
l = int(input("Enter length of cuboid: "))
b = int(input("Enter breadth of cuboid: "))
h = int(input("Enter height of cuboid: "))
area = 2 * (l * b + b * h + h * l)
print(f"Area of cuboid is {area}cm²")
