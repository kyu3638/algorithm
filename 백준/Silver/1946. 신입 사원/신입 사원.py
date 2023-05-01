import sys

input = sys.stdin.readline

T = int(input())
answer = []
for _ in range(T):
    N = int(input())
    grade = []
    for _ in range(N):
        a, b = map(int, input().split())
        grade.append([a, b])
    grade.sort()  # 서류 성적 오름차순

    count = 1
    condition = grade[0][1]
    for i in grade[1:]:
        if condition > i[1]:
            condition = i[1]
            count += 1

    answer.append(count)

for i in range(T):
    print(answer[i])
