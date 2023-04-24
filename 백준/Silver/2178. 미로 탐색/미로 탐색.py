# 미로문제
# 상하좌우가 미로(범위)를 벗어나지 않고,
# 1인 값으로 이동하면서 값을 +1 씩 해줄 것..
# 사실상 미로에서 이동할 수 있는 모든 위치들에 대해 이동값을 구하고 목적지의 값을 구하는 것

import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().rstrip())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    que = deque([(x, y)])
    while que:  # que 가 비어있지 않다면 반복..
        x, y = que.popleft()  # que에 튜플로 담긴 값을 각각 뽑아내는 방법이군아..

        for i in range(4):
            next_x = x + dx[i]
            next_y = y + dy[i]
            if (
                0 <= next_x < n and 0 <= next_y < m and matrix[next_x][next_y] == 1
            ):  # x,y좌표가 미로 밖을 벗어나지 않고 해당 칸 값이 1인 경우
                que.append((next_x, next_y))
                matrix[next_x][next_y] = matrix[x][y] + 1


bfs(0, 0)
print(matrix[n - 1][m - 1])
