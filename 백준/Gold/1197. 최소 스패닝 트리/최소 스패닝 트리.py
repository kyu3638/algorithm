import sys
input = sys.stdin.readline

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a,b):
    a=find_parent(parent,a)
    b=find_parent(parent,b)
    if a < b:
        parent[b] =a
    else:
        parent[a]=b

V, E = map(int, input().split())
Edges=[]
for _ in range(E):
    Edges.append(list(map(int, input().split())))

Edges.sort(key=lambda x:x[2])

parent = [i for i in range(V+1)]

total_cost = 0
for i in Edges:
    if find_parent(parent, i[0]) != find_parent(parent, i[1]):
        union_parent(parent, i[0],i[1])
        total_cost += i[2]

print(total_cost)
