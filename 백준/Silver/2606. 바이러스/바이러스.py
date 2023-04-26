import sys
from collections import deque

input = sys.stdin.readline

V = int(input())
E = int(input())
graph = [[] for _ in range(V + 1)]
for _ in range(E):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (V + 1)


# bfs 풀이
def bfs(start):
    Q = deque([start])
    visited[start] = True
    while Q:
        v = Q.popleft()
        for i in graph[v]:
            if not visited[i]:
                Q.append(i)
                visited[i] = True


bfs(1)
print(visited.count(True) - 1)
