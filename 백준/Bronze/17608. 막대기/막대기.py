import sys

n = int(sys.stdin.readline())
stk = []
for _ in range(n):
    stk.append(int(sys.stdin.readline()))

tall = stk.pop()  # 첫 값을 pop 하면서 tall에 저장(현재까지 제일 큰 값)
count = 1  # 첫 값은 count 에 무조건 포함되므로 count = 1
for i in stk[::-1]:  # stk의 뒤 쪽부터 반복
    temp = stk.pop()  # 다음 비교대상을 pop 하면서 temp 에 저장
    # tall >= temp 인 경우, tall 값은 안 변할가고, 다음 반복에서 temp값(비교대상) 바뀔 것이므로 continue
    if tall >= temp:
        continue
    elif tall < temp:  # tall < temp 인 경우, 새로운 더 큰 값이 나타난 것이므로, count +=1, tall 값을 비교대상이었던 값으로 업데이트
        count += 1
        tall = temp

print(count)
