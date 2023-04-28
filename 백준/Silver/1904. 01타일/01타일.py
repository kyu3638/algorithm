import sys

input = sys.stdin.readline

N=int(input())

A = [0] * 1000001
A[1] = 1
A[2] = 2
for i in range(3, N+1):
    A[i] = (A[i - 1] + A[i - 2])%15746
    
print(A[N])