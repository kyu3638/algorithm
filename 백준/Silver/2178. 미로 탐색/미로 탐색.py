import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())
MIRO = []
for i in range(N):
    MIRO.append(list(map(int, input().rstrip())))

# 상 하 좌 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    Q = deque([(x, y)])
    while Q:
        x, y = Q.popleft()
        for i in range(4):
            nx = x + dx[i]  # 다음 좌표가 될 수 있는 4가지 경우
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and MIRO[nx][ny] == 1:
                Q.append([nx, ny])
                MIRO[nx][ny] = MIRO[x][y] + 1
                if nx == (N - 1) and ny == (M - 1):
                    return MIRO[nx][ny]


print(bfs(0, 0))
