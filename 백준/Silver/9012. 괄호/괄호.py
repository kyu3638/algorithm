import sys

input = sys.stdin.readline

n = int(input())

for _ in range(n):
    w = list(input().rstrip())
    stk = []
    isVPS = True
    for i in w:
        if i == "(":
            stk.append(i)
        else:  # ")" 인 경우  - pop
            try:
                stk.pop()
            except:
                isVPS = False
                break
    if len(stk) == 0 and isVPS == True:
        print("YES")
    else:
        print("NO")
