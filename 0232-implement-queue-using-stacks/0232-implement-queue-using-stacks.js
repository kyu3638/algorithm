class MyQueue {
    constructor(){
        this.queue = [];
    }

    push(value){
        this.queue.push(value)
    }

    peek(){
        return this.queue[0]
    }

    pop(){
        if(!this.queue.length) return null;

        const removedNode = this.queue.shift();
        return removedNode;
    }

    empty(){
        return !this.queue.length ? true : false;
    }

}