import sys
from collections import deque

input = sys.stdin.readline


def bfs(start):
    Q = deque([start])
    while Q:
        w = Q.popleft()
        for i in graph[w]:
            if visited[i] == 0:  # 방문하지 않았다면,
                visited[i] = visited[w] + 1  # 직전 노드의 출발지로부터의 거리 + 1
                Q.append(i)


n = int(input())
a, b = map(int, input().split())
m = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [0] * (n + 1)  # 출발지로부터 거리를 저장하는 리스트

bfs(a)
print(visited[b] if visited[b] > 0 else -1)
