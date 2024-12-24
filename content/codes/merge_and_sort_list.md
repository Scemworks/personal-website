---
title: "Merge and Sort List"
date: 2024-12-23
hidden: true
summary: This program merges multiple lists into one and sorts the combined list in ascending or descending order. It demonstrates the use of Python's built-in list functions and sorting algorithms.
---

```python
ls1 = list(map(int, filter(lambda x: x != '', input("Enter elements of first list separated by spaces: ").split())))
ls2 = list(map(int, filter(lambda x: x != '', input("Enter elements of second list separated by spaces: ").split())))
merged_ls = ls1 + ls2
sorted_ls = sorted(merged_ls, key=lambda x: (x % 2, x))
print("Merged and sorted list with even numbers first, followed by odd numbers:")
print(sorted_ls)

```
