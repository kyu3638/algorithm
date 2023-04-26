import sys

input = sys.stdin.readline

N = int(input())
nums = list(map(int, input().split()))
plus, minus, mul, div = map(int, input().split())  # 덧셈 뺄셈 곱셈 나눗셈

answer_list = []


def BT(plus, minus, mul, div, result, idx):
    # 종료조건
    if plus == minus == mul == div == 0:
        answer_list.append(result)
        return

    # 재귀 호출
    if plus:
        BT(plus - 1, minus, mul, div, result + nums[idx], idx + 1)
    if minus:
        BT(plus, minus - 1, mul, div, result - nums[idx], idx + 1)
    if mul:
        BT(plus, minus, mul - 1, div, result * nums[idx], idx + 1)
    if div:
        if result < 0:
            BT(plus, minus, mul, div - 1, -(abs(result) // nums[idx]), idx + 1)
        else:
            BT(plus, minus, mul, div - 1, result // nums[idx], idx + 1)


BT(plus, minus, mul, div, nums[0], 1)

print(max(answer_list))
print(min(answer_list))
