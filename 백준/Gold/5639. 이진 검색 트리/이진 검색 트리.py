import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

def func(start, end):
    if start > end:
        return
    else:
        root = n_list[start]
        div = end +1
        for i in range(start+1,end+1):
            if root < n_list[i]:
                div = i
                break
        func(start+1, div-1)
        func(div,end)
        print(root)

n_list=[]
while True:
    try:
        n_list.append(int(input().strip()))
    except:
        break
    
func(0,len(n_list)-1)