import sys
from collections import deque
from itertools import chain

input = sys.stdin.readline

m, n, t = map(int, input().split())
graph = [[] for _ in range(t)]
for i in range(t):
    for _ in range(n):
        graph[i].append(list(map(int, input().split())))

dx = [-1, 1, 0, 0, 0, 0]
dy = [0, 0, -1, 1, 0, 0]
dh = [0, 0, 0, 0, -1, 1]

Q = deque()
for i in range(t):
    for j in range(n):
        for k in range(m):
            if graph[i][j][k] == 1:
                Q.append([i, j, k])


def bfs():
    while Q:
        h, x, y = Q.popleft()
        for i in range(6):
            next_x = x + dx[i]
            next_y = y + dy[i]
            next_h = h + dh[i]
            if (
                0 <= next_x < n
                and 0 <= next_y < m
                and 0 <= next_h < t
                and graph[next_h][next_x][next_y] == 0
            ):
                graph[next_h][next_x][next_y] = graph[h][x][y] + 1
                Q.append([next_h, next_x, next_y])


bfs()

for i in graph:
    for j in i:
        for k in j:
            if k == 0:
                print(-1)
                exit()
temp = []
for i in graph:
    temp.extend(chain(*i))
print(max(temp) - 1)
