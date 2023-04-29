import sys

input = sys.stdin.readline

N, Goal = map(int, input().split())
coins = [0 for _ in range(N)]
for i in range(N):
    coins[i] = int(input())

coins.sort(reverse=True)

count = 0
for coin in coins:
    while Goal >= coin:
        count += Goal // coin
        Goal = Goal % coin

print(count)
