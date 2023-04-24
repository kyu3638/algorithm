import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

V = int(input())
adj = [[] for _ in range(V + 1)]
for _ in range(V - 1):
    a, b = map(int, input().split())
    adj[a].append(b)
    adj[b].append(a)

visited_dfs = [False] * (V + 1)
answer_list = [[] for _ in range(V + 1)]


def dfs(start):
    visited_dfs[start] = True
    for i in adj[start]:
        if not visited_dfs[i]:
            answer_list[i].append(start)
            # print(f"{i}의 부모: {start}")
            dfs(i)


dfs(1)

for i in answer_list:
    if i:
        print(i[0])
