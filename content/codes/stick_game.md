---
title: "Stick Game"
date: 2024-12-23
hidden: true
summary: This interactive program simulates a stick game where players take turns removing sticks from a pile. It includes rules for winning and strategies for players, enhancing understanding of game theory concepts.
---

```python
total_sticks = 16

while total_sticks > 0:
    print(f"There are {total_sticks} sticks left")
    
    play1_choice = int(input("Player 1, choose 1, 2, or 3 sticks: "))
    while play1_choice < 1 or play1_choice > 3 or play1_choice > total_sticks:
        print("Invalid choice. You can only pick 1, 2, or 3 sticks.")
        play1_choice = int(input("Player 1, choose 1, 2, or 3 sticks: "))

    total_sticks -= play1_choice

    if total_sticks == 0:
        print("Player 1 has taken the last stick. Player 1 loses!")
        break

    print(f"There are {total_sticks} sticks left")

    play2_choice = int(input("Player 2, choose 1, 2, or 3 sticks: "))
    while play2_choice < 1 or play2_choice > 3 or play2_choice > total_sticks:
        print("Invalid choice. You can only pick 1, 2, or 3 sticks.")
        play2_choice = int(input("Player 2, choose 1, 2, or 3 sticks: "))

    total_sticks -= play2_choice

    if total_sticks == 0:
        print("Player 2 has taken the last stick. Player 2 loses!")
        break
