import sys
from collections import deque
input = sys.stdin.readline

n, m, c = map(int, input().split())

# 인전리스트의 형태로 간선이 연결하는 두 노드 표현
adj = [[] for _ in range(n+1)]
for _ in range(m): # 간선의 개수만큼 반복
    a,b = map(int, input().split())
    adj[a].append(b)
    adj[b].append(a)

for i in range(n+1):
    adj[i].sort()
    
visited = [False] * (n+1)
def dfs(start):
    visited[start] =True
    print(start, end=" ")
    for i in adj[start]:
        if not visited[i]:
            dfs(i)

def bfs(start):
    visited = [False] * (n+1)
    que = deque([start])
    visited[start] = True
    while que:
        v = que.popleft()
        print(v, end=" ")
        for i in adj[v]:
            if not visited[i]:
                que.append(i)
                visited[i] = True

dfs(c)        
print()
bfs(c)