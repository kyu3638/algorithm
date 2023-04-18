# sort 한 후에 좌우 맨 끝의 값을 합쳐봄,
# 좌/우 한쪽씩 땡겨서 합쳐보고,
# 첨에 합친값이랑 비교,,,,

import sys

n = int(sys.stdin.readline())
n_list = list(map(int, sys.stdin.readline().split()))
n_list.sort()

# 좌우 좌표 초기화
left = 0
right = n - 1

answer = abs(n_list[left] + n_list[right])

answer_list = [n_list[left], n_list[right]]

while left < right:
    left_val = n_list[left]
    right_val = n_list[right]

    sum = left_val + right_val

    if abs(sum) < answer:
        answer = abs(sum)
        answer_list = [left_val, right_val]
        if answer == 0:
            break

    if sum < 0:
        left += 1
    else:
        right -= 1

print(answer_list[0], answer_list[1])