import sys
import heapq

n = int(sys.stdin.readline())
x = []
for _ in range(n):
    x.append(int(sys.stdin.readline()))

heap = []
for i in x:
    if i != 0:
        heapq.heappush(heap, (-i, i))
    else:
        if len(heap) == 0:
            print(0)
        else:
            print(heapq.heappop(heap)[1])
