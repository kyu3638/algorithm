import sys

input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

answer_list = []


def func(x, y, n):
    color = arr[x][y]
    for i in range(x, x + n):
        for j in range(y, y + n):
            if color != arr[i][j]:
                func(x, y, n // 2)
                func(x, y + n // 2, n // 2)
                func(x + n // 2, y, n // 2)
                func(x + n // 2, y + n // 2, n // 2)
                return
    if color == 0:
        answer_list.append(0)
    elif color == 1:
        answer_list.append(1)


func(0, 0, n)
print(answer_list.count(0))
print(answer_list.count(1))
