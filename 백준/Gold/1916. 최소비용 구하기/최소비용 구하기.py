import sys
import heapq

input = sys.stdin.readline
INT = 1e9


def dijkstar(start):
    Q = []
    heapq.heappush(Q, (0, start))  # 스타트 노드에서 스타트 노드 가는건 비용 0
    distance[start] = 0

    while Q:
        dist, now = heapq.heappop(Q)

        if distance[now] < dist:
            continue

        for i in graph[now]:
            if distance[i[0]] > dist + i[1]:  # 기존 값이 후보 값보다 커버리면 => 아래와 같이 변경
                distance[i[0]] = dist + i[1]
                heapq.heappush(Q, (dist + i[1], i[0]))


V = int(input())
E = int(input())
graph = [[] for _ in range(V + 1)]
for _ in range(E):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
src, dest = map(int, input().split())
distance = [INT] * (V + 1)


dijkstar(src)
print(distance[dest])
