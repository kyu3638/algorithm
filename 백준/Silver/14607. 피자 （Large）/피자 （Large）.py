import sys

input = sys.stdin.readline

N = int(input())

answer = round(N * (N - 1) // 2)
print(answer)
