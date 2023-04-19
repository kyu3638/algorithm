import sys
from typing import Any, Sequence

n = int(sys.stdin.readline())
n_list = list(map(int, sys.stdin.readline().split()))

m = int(sys.stdin.readline())
m_list = list(map(int, sys.stdin.readline().split()))

n_list.sort()


def search(n_list: Sequence, key: Any):
    pl = 0
    pr = len(n_list)-1

    while True:
        pc = (pl+pr)//2
        if n_list[pc] == key:
            return print(1)
        elif n_list[pc] < key:
            pl = pc+1
        elif n_list[pc] > key:
            pr = pc-1
        if pl > pr:
            break
    return print(0)


for i in range(m):
    x = m_list[i]
    search(n_list, x)