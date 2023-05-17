import sys

input = sys.stdin.readline

N = int(input())

arr = {}
count = 0

for i in range(N):
    a, b = map(int, input().split())
    if a not in arr:
        arr[a] = b
    else:
        if arr[a] != b:
            count += 1
            arr[a] = b

print(count)
