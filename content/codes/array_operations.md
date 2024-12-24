---
title: "Array Operations (Using NumPy)"
date: 2024-12-23
hidden: true
summary: This program demonstrates various operations that can be performed on arrays, including insertion, deletion, and traversal. It provides practical examples to illustrate how to manipulate arrays effectively in programming.
---

```python
import numpy as np
array = np.array([10, 20, 30, 40, 50])
print("Original Array:", array)
array = np.append(array, 60)
print("Array after appending 60:", array)
array = np.append(array, [70, 80, 90])
print("Array after appending [70, 80, 90]:", array)
array = np.delete(array, 2)
print("Array after removing the element at index 2:", array)
array = np.delete(array, [0, 1])
print("Array after removing elements at indices 0 and 1:", array)
