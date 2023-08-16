import sys

n,m = map(int, sys.stdin.readline().split())
A = list(map(int, sys.stdin.readline().split()))
B = list(map(int, sys.stdin.readline().split()))

answer = A+B
answer.sort()
# print(answer)

for i in range(len(answer)-1):
    print(answer[i], end=" ")

print(answer[len(answer)-1])