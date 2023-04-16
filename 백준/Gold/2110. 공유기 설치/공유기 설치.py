import sys


# 공유기를 몇개설치할수있는지 리턴해주는 함수
def router_count(pc):
    sum = 0
    count = 1
    for i in h_distance:
        sum += i
        if sum >= pc:
            count += 1
            sum = 0
    return count


n, c = map(int, sys.stdin.readline().split())

h_list = []
for _ in range(n):
    h_list.append(int(sys.stdin.readline().rstrip()))
h_list.sort()
h_distance = []

for i in range(len(h_list) - 1):
    h_distance.append(h_list[i + 1] - h_list[i])

pl, pr = 1, max(h_list)

while pl <= pr:
    pc = (pl + pr) // 2
    ret = router_count(pc)
    if ret >= c:
        pl = pc + 1
    else:
        pr = pc - 1
print(pr)
