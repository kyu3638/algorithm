import sys
from collections import deque

# 보드의 크기
n = int(sys.stdin.readline())

# 사과의 개수
k = int(sys.stdin.readline())

# 뱀이 사과를 먹었는지 안먹었는지 표시할 수 있도록 사과가 들어간 map을 그려줌
apple = [[0] * (n + 1) for _ in range(n + 1)]
for _ in range(k):
    x, y = map(int, sys.stdin.readline().split())
    apple[x][y] = 1  # 사과의 좌표에 1을 부여함!

# 명령의 개수
c = int(sys.stdin.readline())
# 명령어(몇칸이동, 방향이동)
command = [list(sys.stdin.readline().split()) for i in range(c)]  # 명령어(몇칸이동, 방향이동)
for i in range(c):
    command[i][0] = int(command[i][0])

# 뱀의 초기 위치 설정
snake = deque()
snake.append([1, 1])

# 방향 인덱스 값 설정
dx = [0, 1, 0, -1]  # 오른쪽, 아래, 왼쪽, 위
dy = [1, 0, -1, 0]

# 처음 방향,시간 설정
cur_direction = 0
seconds = 0
command_idx = 0

while True:
    seconds += 1
    head = snake[-1]  # 스네이크의 길이가 늘어나더라도 append되는 값이 머리이기 때문에 [-1]

    next_x = head[0] + dx[cur_direction]
    next_y = head[1] + dy[cur_direction]

    # 방향이 바뀔 때
    if command[command_idx][0] == seconds:  # 1초에 1만큼 이동하므로 seconds 만큼 이동했다면,
        if command[command_idx][1] == "D":
            cur_direction = (cur_direction + 1) % 4
        elif command[command_idx][1] == "L":
            cur_direction = (cur_direction - 1) % 4

        if command_idx < len(command) - 1:
            command_idx += 1

    # 벽에 부딪히는 경우
    if next_x > n or next_y > n or next_x <= 0 or next_y <= 0:
        break

    # 자기 몸에 부딪히는 경우
    if [next_x, next_y] in snake:
        break

    # 사과 안먹고 이동하는 경우 / 사과를 먹고 이동하는 경우
    # 안먹는 경우 새로운 자리를 append 해주고 popleft
    # 먹는 경우 새로운 자리를 append만!
    if apple[next_x][next_y] == 1:
        snake.append([next_x, next_y])
        apple[next_x][next_y] = 0
    else:
        snake.append([next_x, next_y])
        snake.popleft()

print(seconds)
