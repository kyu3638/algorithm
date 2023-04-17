import sys

a, b, c = map(int, sys.stdin.readline().split())


def divide(b):
    if b == 1:
        return a**b % c
    else:
        temp = divide(b // 2)
        if b % 2 == True:
            return temp**2 * a % c
        elif b % 2 == False:
            return temp**2 % c


print(divide(b))
