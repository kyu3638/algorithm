import sys

t, m = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))
start, end = 1, max(trees)

while start <= end:
    mid = (start + end) // 2
    timber = 0
    for tree in trees:
        if tree >= mid:
            timber += tree - mid
        else:
            continue
    if timber >= m:
        start = mid + 1
    else:
        end = mid - 1

print(end)
