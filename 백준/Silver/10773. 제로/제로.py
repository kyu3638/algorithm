import sys

n = int(sys.stdin.readline())

# 입력된 값 != 0 이면 입력 값을 append 해주고
# 입력된 값이 == 0 이면 pop 함수 실행
# answer_list의 합계를 출력

answer_list = []
for i in range(n):
    num = int(sys.stdin.readline())
    if num != 0:
        answer_list.append(num)
    else:
        answer_list.pop()

print(sum(answer_list))
