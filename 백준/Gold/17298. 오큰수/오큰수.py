import sys

input = sys.stdin.readline


N = int(input())
nums = list(map(int, input().split()))
stk = []
answer = [-1] * N

for i in range(len(nums)):
    while stk and nums[stk[-1]] < nums[i]:
        answer[stk.pop()] = nums[i]
    stk.append(i)

print(*answer)