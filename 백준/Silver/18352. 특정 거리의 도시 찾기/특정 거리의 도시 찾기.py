import sys
from collections import deque

input = sys.stdin.readline

V, E, K, start = map(int, input().split())
adj = [[] for _ in range(V + 1)]
for _ in range(E):
    a, b = map(int, input().split())
    adj[a].append(b)

visited = [False] * (V + 1)
distance = [0] * (V + 1)


def bfs(start):
    answer_list = []
    que = deque([start])
    visited[start] = True
    distance[start] = 0
    while que:
        now = que.popleft()
        for i in adj[now]:
            if not visited[i]:
                visited[i] = True
                que.append(i)
                distance[i] = distance[now] + 1
                if distance[i] == K:
                    answer_list.append(i)

    if len(answer_list) == 0:
        print(-1)
    else:
        answer_list.sort()
        for i in answer_list:
            print(i)


bfs(start)
