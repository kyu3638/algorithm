function solution(num_list, n) {
    const moved = num_list.splice(n);
    return moved.concat(num_list);
}