# 지원자 A 의 성적이 다른 지원자 B의 성적에 비해 서류 심사 결과와 면접 성적 모두 떨어진다면 A는 결코 선발되지 않는다.
# 1차 시험의 성적을 오름차순으로 정렬
# 2차 시험의 성적이 앞선 사람보다 낮으면 탈락(둘다 낮기 때문에!)

import sys

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    rank = []
    for _ in range(N):
        a, b = map(int, input().split())
        rank.append([a, b])
    rank.sort()

    count = 1
    condition = rank[0][1]
    for i in rank[1:]:
        if condition > i[1]:
            count += 1
            condition = i[1]

    print(count)
