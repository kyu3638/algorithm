import sys

input = sys.stdin.readline

N = int(input())
minutes = list(map(int, input().split()))

minutes.sort()
minutes_sum = []

M_sum = 0
for i in minutes:
    M_sum += i
    minutes_sum.append(M_sum)

print(sum(minutes_sum))
