import sys

input = sys.stdin.readline

arr = []
count = 1
while True:
    for _ in range(count):
        arr.append(count)
        if len(arr) == 1000:
            break
    count += 1
    if len(arr) == 1000:
        break

a, b = map(int, input().split())
print(sum(arr[a - 1 : b]))
