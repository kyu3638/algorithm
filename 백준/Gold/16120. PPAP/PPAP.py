import sys

letters = sys.stdin.readline().rstrip()

ppap = ["P", "P", "A", "P"]
stk = []

for i in letters:
    stk.append(i)
    if stk[-4:] == ppap:
        for _ in range(4):
            stk.pop()
        stk.append("P")

if stk == ppap or stk == ["P"]:
    print("PPAP")
else:
    print("NP")
