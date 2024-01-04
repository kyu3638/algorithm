class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(value) {
        if (!this.q1.length && !this.q2.length) this.q1.push(value);
        else if (this.q1.length && !this.q2.length) this.q1.push(value);
        else if (!this.q1.length && this.q2.length) this.q2.push(value);
    }

    top() {
        if (this.q1.length) return this.q1[this.q1.length - 1];
        if (this.q2.length) return this.q2[this.q2.length - 1];
    }

    pop() {
        if (this.q1.length) {
            const len1 = this.q1.length
            for (let i = 0; i < len1 - 1; i++) {
                this.q2.push(this.q1.shift())
            }

            return this.q1.shift();
        }

        if (this.q2.length) {
            const len2 = this.q2.length;
            for (let i = 0; i < len2 - 1; i++) {
                this.q1.push(this.q2.shift());
            }
            return this.q2.shift();
        }
    }

    empty() {
        if (this.q1.length || this.q2.length) return false;
        else if (!this.q1.length && !this.q2.length) return true;
    }
}