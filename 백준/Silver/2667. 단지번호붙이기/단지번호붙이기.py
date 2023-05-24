import sys
from collections import deque

input = sys.stdin.readline


def bfs(i, j, count):
    num_apart = 1
    Q = deque()
    Q.append([i, j])
    graph[i][j] = count
    while Q:
        x, y = Q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and graph[nx][ny] == 1:
                graph[nx][ny] = count
                Q.append([nx, ny])
                num_apart += 1
    arr_num_apart.append(num_apart)


N = int(input())
graph = []
for _ in range(N):
    graph.append(list(map(int, list(input().rstrip()))))


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

count = 1
arr_num_apart = []
for i in range(N):
    for j in range(N):
        if graph[i][j] == 1:
            count += 1
            bfs(i, j, count)

arr_num_apart.sort()
print(count - 1)
for i in arr_num_apart:
    print(i)
