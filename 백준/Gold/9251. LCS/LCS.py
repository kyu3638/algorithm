import sys

input = sys.stdin.readline

a = list(input().rstrip())
a.insert(0, 0)
N = len(a)

b = list(input().rstrip())
b.insert(0, 0)
M = len(b)

dp = [[0 for _ in range(M)] for _ in range(N)]

for i in range(1, N):
    for j in range(1, M):
        if a[i] == b[j]:
            dp[i][j] = dp[i - 1][j - 1] + 1
        else:
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

print(dp[N - 1][M - 1])
