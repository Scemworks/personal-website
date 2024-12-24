---
title: "Prime Numbers Less Than n"
date: 2024-12-23
hidden: true
summary: This program identifies and lists all prime numbers less than a specified integer. It employs loops and conditional checks to determine the primality of numbers, serving as an introduction to number theory.
---

```python
def check_prime(num):
    for j in range(2, num):
        if num % j == 0:
            return
    print(num, end=" ")

n = int(input("Enter the range for which you want to see the prime numbers: "))
print("Prime numbers: ")
for i in range(2, n):
    check_prime(i)
