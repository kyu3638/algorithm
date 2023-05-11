import sys

input = sys.stdin.readline

T = int(input())
for _ in range(T):
    l, a = map(int, input().split())
    ants = []
    for _ in range(a):
        ants.append(int(input()))
    ants.sort()

    min_time = 0
    max_time = 0
    for ant in ants:
        min_time = max(min_time, min(ant, l - ant))
        max_time = max(max_time, ant, l - ant)
    print(min_time, max_time)
