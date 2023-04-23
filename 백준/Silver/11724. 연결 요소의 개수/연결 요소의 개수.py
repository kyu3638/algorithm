import sys
from collections import deque
input = sys.stdin.readline

V, E = map(int, input().split())
adj = [[] for _ in range(V+1)]
for _ in range(E):
    a, b = map(int, input().split())
    adj[a].append(b)
    adj[b].append(a)
    
visited = [False] * (V+1)

def bfs(start):
    que = deque([start])
    visited[start] = True
    while que:
        v = que.popleft()
        for i in adj[v]:
            if not visited[i]:
                que.append(i)
                visited[i]=True

count =0
for i in range(1,V+1):
    if visited[i] == False:
        bfs(i)
        count+=1
        
print(count)
