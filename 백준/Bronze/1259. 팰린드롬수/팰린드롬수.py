import sys

input = sys.stdin.readline

while True:
    a = int(input())
    if a == 0:
        break

    if a < 10:
        print("yes")
        continue

    a = str(a)
    count = 0

    for i in range(len(a) // 2):
        if a[i] == a[len(a) - 1 - i]:
            count += 1
            if count == len(a) // 2:
                print("yes")
        else:
            print("no")
            break
