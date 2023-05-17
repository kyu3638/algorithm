import sys

input = sys.stdin.readline

N, M = map(int, input().split())
A = []
for _ in range(N):
    A.append(list(map(int, input().split())))
M, K = map(int, input().split())
B = []
for _ in range(M):
    B.append(list(map(int, input().split())))

# 정답을 담을 행렬 만들기 N*M * M*K 이므로 N*K 행렬
answer = [[0 for _ in range(K)] for _ in range(N)]

for n in range(N):
    for k in range(K):
        for m in range(M):
            answer[n][k] += A[n][m] * B[m][k]

for i in answer:
    for j in i:
        print(j, end=" ")
    print()
