# 5
# 10111
# 1 2
# 2 3
# 2 4
# 4 5

import sys

input = sys.stdin.readline


def dfs(start):
    global count
    visited[start] = True
    for i in graph[start]:
        if not visited[i]:
            if in_out[i] == 1:
                # print(f"start:{start}, i={i}")
                count += 1
                continue
            elif in_out[i] == 0:
                dfs(i)


N = int(input())
in_out = list(map(int, list(input().rstrip())))
in_out.insert(0, 0)  # i번 이 실내인지 실외인지 쉽게보려고,, 0번째에 의미없는 0 넣어주기,...
graph = [[] for _ in range(N + 1)]
for _ in range(N - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# print(N)
# print(in_out)
# print(graph)


count = 0  # 올바른 산책 경로일 경우 count 추가
for i in range(1, N + 1):
    if in_out[i] == 1:
        # print(i)
        visited = [False] * (N + 1)
        dfs(i)

print(count)
