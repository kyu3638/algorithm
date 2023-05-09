import sys
input = sys.stdin.readline

N, M = map(int, input().split())

answer = []
answer.append(N//M)
answer.append(N%M)

for i in answer:
    print(i)