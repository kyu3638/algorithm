import sys

input = sys.stdin.readline

N = int(input())

time = []
for _ in range(N):
    a, b = map(int, input().split())
    time.append([a, b])

time.sort(key=lambda x: (x[1], x[0]))

count = 1
endtime = time[0][1]
for i in range(1, len(time)):
    if time[i][0] >= endtime:
        count += 1
        endtime = time[i][1]

print(count)
