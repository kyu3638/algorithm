import sys

input = sys.stdin.readline

N = int(input())
board = [[0] * (N + 1)]
for _ in range(N):
    li = list(map(int, input().split()))
    li.insert(0, 0)
    board.append(li)


dp = [[0 for _ in range(N + 1)] for _ in range(N + 1)]
dp[1][1] = 1

for i in range(1, N + 1):
    for j in range(1, N + 1):
        k = board[i][j]
        if k == 0:
            break
        if i + k < N + 1:
            dp[i + k][j] += dp[i][j]
        if j + k < N + 1:
            dp[i][j + k] += dp[i][j]

print(dp[-1][-1])
