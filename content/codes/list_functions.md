---
title: "List Functions"
date: 2024-12-23
hidden: true
summary: This program provides examples of various list functions in Python, such as append, extend, and remove. It serves as a reference for beginners to understand how to manipulate lists effectively.

---

```python
ls = [10, 20, 30, 40, 50]
print("Original List:", ls)
ls.append(60)
print("List after appending 60:", ls)
ls.extend([70, 80, 90])
print("List after appending [70, 80, 90]:", ls)
ls.remove(30)
print("List after removing the element 30:", ls)
rem_element = ls.pop(0)
print(f"List after removing the element at index 0 ({rem_element}):", ls)
del ls[0:2]
print("List after removing the first two elements:", ls)
