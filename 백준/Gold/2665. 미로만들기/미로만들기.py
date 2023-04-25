import sys
import heapq

INF = 1e9
input = sys.stdin.readline

N = int(input())
matrix = []
for i in range(N):
    matrix.append(list(map(int, input().rstrip())))
black_count = [[0] * (N) for _ in range(N)]

dx = [-1, 1, 0, 0]  # 상 하 좌 우
dy = [0, 0, -1, 1]  # 상 하 좌 우


def bfs(x, y):
    Q = []
    heapq.heappush(Q, (0, x, y))
    black_count[0][0] = 1

    while Q:
        count, x, y = heapq.heappop(Q)

        if x == N - 1 and y == N - 1:
            print(count)
            return

        for i in range(4):
            next_x = x + dx[i]
            next_y = y + dy[i]
            if 0 <= next_x < N and 0 <= next_y < N and black_count[next_x][next_y] == 0:
                black_count[next_x][next_y] = 1
                if matrix[next_x][next_y] == 0:
                    heapq.heappush(Q, (count + 1, next_x, next_y))
                else:
                    heapq.heappush(Q, (count, next_x, next_y))


bfs(0, 0)
