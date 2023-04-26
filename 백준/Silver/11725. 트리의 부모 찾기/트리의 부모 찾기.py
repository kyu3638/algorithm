import sys

sys.setrecursionlimit(10**9)

input = sys.stdin.readline

V = int(input())
graph = [[] for _ in range(V + 1)]
for _ in range(V - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


visited = [False] * (V + 1)

parent_child = []


def dfs(start):
    visited[start] = True
    for i in graph[start]:
        if not visited[i]:
            parent_child.append((i, start))
            dfs(i)


dfs(1)
parent_child.sort()
for i in parent_child:
    print(i[1])
