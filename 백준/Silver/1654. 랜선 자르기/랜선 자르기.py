import sys


def lines(pc):
    count = 0
    for i in length:
        count += i // pc
    return count


k, n = map(int, sys.stdin.readline().split())
length = []
for _ in range(k):
    length.append(int(sys.stdin.readline()))

pl = 1
pr = max(length)

while pl <= pr:
    pc = (pl + pr) // 2
    if lines(pc) >= n:  # 만든 줄의 개수가 n개보다 많으면, 길이를 늘려 최대 길이로 만들 수 있기 때문에 pl = pc +1
        pl = pc + 1
    elif lines(pc) < n:  # 더 짧은 많은 개수를 만들기 위해 pr = pc -1
        pr = pc - 1

print(pr)
