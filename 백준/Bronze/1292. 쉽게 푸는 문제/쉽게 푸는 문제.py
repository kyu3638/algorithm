import sys

input = sys.stdin.readline

nums = []
count = 1
while len(nums) < 1000:
    for _ in range(count):
        nums.append(count)
    count += 1

a, b = map(int, input().split())
print(sum(nums[a - 1 : b]))
