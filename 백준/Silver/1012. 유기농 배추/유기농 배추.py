import sys
from collections import deque

input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(a, b):
    Q = deque()
    graph[a][b] = 2
    Q.append([a, b])
    while Q:
        x, y = Q.popleft()
        for i in range(4):
            next_x = x + dx[i]
            next_y = y + dy[i]
            if 0 <= next_x < N and 0 <= next_y < M and graph[next_x][next_y] == 1:
                Q.append([next_x, next_y])
                graph[next_x][next_y] = 2


T = int(input())
for _ in range(T):
    M, N, K = map(int, input().split())
    graph = [[0 for _ in range(M)] for _ in range(N)]
    for _ in range(K):
        j, i = map(int, input().split())
        graph[i][j] = 1

    count = 0
    for i in range(N):
        for j in range(M):
            if graph[i][j] == 1:
                bfs(i, j)
                count += 1

    print(count)
