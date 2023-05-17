from collections import deque
import sys

input = sys.stdin.readline

N = int(input())

cards = []
for i in range(1, N + 1):
    cards.append(i)

Q = deque(cards)

while len(Q) != 1:
    print(Q.popleft(), end=" ")
    try:
        Q.append(Q.popleft())
    except:
        break
print(Q.popleft())
