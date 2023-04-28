import sys
input = sys.stdin.readline

T = int(input())
# for _ in range(T):
#     N = int(input())
#     coins = list(map(int, input().split()))
#     coins.insert(0,0)
#     money = int(input())
    
#     dp = [[0 for _ in range(money+1)] for _ in range(N+1)]
#     for i in range(N+1):
#         dp[i][0] =1
        
#     for i in range(1,N+1):
#         for j in range(1, money+1):
#             dp[i][j] = dp[i-1][j]
#             if j - coins[i] >=0:
#                 dp[i][j] = dp[i][j] + dp[i][j-coins[i]]
                
#     print(dp[N][money])
    
for _ in range(T):
    N = int(input())
    coins = list(map(int, input().split()))
    money = int(input())

    dp = [0 for _ in range(money+1)]
    dp[0]=1
    
    for coin in coins:
        for i in range(1, money+1):
            if i - coin >= 0:
                dp[i] = dp[i] + dp[i-coin]
                
    print(dp[money])