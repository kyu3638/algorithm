import sys
from queue import Queue

n, k = map(int, sys.stdin.readline().split())

Q = Queue()

for i in range(1, n + 1):
    Q.put(i)

k_list = []
while Q.qsize() != 0:
    for _ in range(k - 1):
        Q.put(Q.get())
    k_list.append(Q.get())

print("<", end="")
for i in k_list[: n - 1]:
    print(i, end=", ")
print(k_list[n - 1], end="")
print(">")
