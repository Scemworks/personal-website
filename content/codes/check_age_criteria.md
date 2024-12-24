---
title: "Check Age Criteria"
date: 2024-12-23
hidden: true
summary: This program checks the age criteria of a person based on their age. It provides a clear example of using if-elif-else statements in programming.
---

```python
age = int(input("Enter your age: "))
if age > 0 and age < 12:
    print("Kid")
elif age >= 12 and age < 19:
    print("Teenager")
elif age >= 19 and age < 30:
    print("Young")
elif age >= 30 and age < 45:
    print("Mature")
elif age >= 45 and age < 60:
    print("Experienced")
elif age >= 60 and age < 75:
    print("Old")
elif age >= 75:
    print("Senior")
