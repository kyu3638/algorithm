import sys

input = sys.stdin.readline

arr = input().split("-")

answer = []
for i in arr:
    s = i.split("+")
    s = map(int, s)
    answer.append(sum(s))

temp = answer[0]
for i in answer[1:]:
    temp -= i

print(temp)
