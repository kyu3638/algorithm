import sys

answer_list = []


class Stack:
    def __init__(self):
        self.items = []

    def push(self, val: int):
        return self.items.append(val)

    def pop(self):
        if len(self.items) > 0:
            answer_list.append(self.items.pop())
            # return print(self.items.pop())
        else:
            answer_list.append(-1)
            # return print(-1)

    def size(self):
        answer_list.append(len(self.items))
        # return len(self.items)

    def empty(self):
        if len(self.items) == 0:
            answer_list.append(1)
            # return print(1)
        else:
            answer_list.append(0)
            # return print(0)

    def top(self):
        if len(self.items) > 0:
            answer_list.append(self.items[-1])
            # return print(self.items[-1])
        else:
            answer_list.append(-1)
            # return print(-1)


n = int(sys.stdin.readline())
S = Stack()
for _ in range(n):
    order = sys.stdin.readline().split()
    if order[0] == "push":
        S.push(int(order[1]))
    elif order[0] == "pop":
        S.pop()
    elif order[0] == "size":
        S.size()
    elif order[0] == "empty":
        S.empty()
    elif order[0] == "top":
        S.top()

for i in answer_list:
    print(i)
