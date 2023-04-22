import sys
input = sys.stdin.readline

n = int(input())
tree={}

for _ in range(n):
    root, left, right = input().strip().split()
    tree[root] = [left, right]

def preOrder(root):
    if root != '.':
        print(root,end="")
        preOrder(tree[root][0])
        preOrder(tree[root][1])

def inOrder(root):
    if root != '.':
        inOrder(tree[root][0])
        print(root,end="")
        inOrder(tree[root][1])
    
def postOrder(root):
    if root != '.':
        postOrder(tree[root][0])
        postOrder(tree[root][1])
        print(root,end="")

preOrder('A')
print()
inOrder('A')
print()
postOrder('A')