import sys
from collections import deque

input = sys.stdin.readline

m, n = map(int, input().split())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

# 입력 : 1 - 익은 토마토, 0 - 익지 않은 토마토, -1 - 토마토가 들어있지 않음
# 출력 : 모든 토마토가 익어있는 상태면 0, 토마토가 모두 익지 못하는 상황이면 -1
# 좌표 및 이동 문제니까 dx, dy

# 상 하 좌 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

Q = deque()
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            Q.append([i, j])


def bfs():
    while Q:
        x, y = Q.popleft()
        for i in range(4):
            next_x = x + dx[i]
            next_y = y + dy[i]
            if 0 <= next_x < n and 0 <= next_y < m and graph[next_x][next_y] == 0:
                graph[next_x][next_y] = graph[x][y] + 1
                Q.append([next_x, next_y])


bfs()
# for i in range(n):
#     print(graph[i])

for i in graph:
    for j in i:
        if j == 0:
            print(-1)
            exit()

print(max(map(max, graph)) - 1)
