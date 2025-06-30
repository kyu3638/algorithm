function solution(order) {
    return order.reduce((acc,menu) =>{
        if(menu.includes("americano")||menu.includes("anything")){
            return acc + 4500;
        } else {
            return acc + 5000;
        }
    },0)
}
