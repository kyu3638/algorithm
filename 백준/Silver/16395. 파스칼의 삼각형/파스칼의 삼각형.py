import sys

input = sys.stdin.readline

N, K = map(int, input().split())

pascal = [[1]]
for i in range(1, N + 1):
    pascal.append([1 for _ in range(i + 1)])

for i in range(2, N + 1):
    for j in range(1, i):
        pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]

print(pascal[N - 1][K - 1])
