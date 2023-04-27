import sys
from collections import deque

N, K = map(int, input().split())
graph = []
for _ in range(N):
    graph.append(list(map(int, input().split())))
S, X, Y = map(int, input().split())

# print(graph)

# K번째 바이러스까지 큐에 넣기
Q = deque()
order = []
for i in range(N):
    for j in range(N):
        if graph[i][j] != 0:
            order.append([i, j, graph[i][j]])
order.sort(key=lambda x: x[2])
for i in range(len(order)):
    Q.append(order[i])


# print(Q)

dx = [-1, 1, 0, 0]  # 상 하 좌 우
dy = [0, 0, -1, 1]  # 상 하 좌 우


def bfs():
    n = len(Q)
    for _ in range(n):
        x, y, v = Q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and graph[nx][ny] == 0:
                graph[nx][ny] = v
                Q.append([nx, ny, v])


for _ in range(S):
    bfs()

# for i in range(N):
#     print(graph[i])
if graph[X - 1][Y - 1] == 0:
    print(0)
else:
    print(graph[X - 1][Y - 1])
