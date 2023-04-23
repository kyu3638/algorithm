import sys
from collections import deque

V = int(input())
E = int(input())
adj=[[] for _ in range(V+1)]
for _ in range(E):
    a, b = map(int, input().split())
    adj[a].append(b)
    adj[b].append(a)

visited = [False]*(V+1)

def bfs(start):
    que = deque([start])
    visited[start] = True
    while que:
        v = que.popleft()
        for i in adj[v]:
            if not visited[i]:
                que.append(i)
                visited[i] = True

bfs(1)
print(visited.count(True)-1)