import sys
input = sys.stdin.readline

N_list=list(input().rstrip())
N_list.insert(0,0)
N = len(N_list)

M_list = list(input().rstrip())
M_list.insert(0,0)
M = len(M_list)

dp = [[0 for _ in range(M)] for _ in range(N)]

for i in range(1,N):
    for j in range(1,M):
        if N_list[i] == M_list[j]:
            dp[i][j] = dp[i-1][j-1]+1
        elif N_list[i] != M_list[j]:
            dp[i][j] = max(dp[i-1][j],dp[i][j-1])
            
print(dp[N-1][M-1])