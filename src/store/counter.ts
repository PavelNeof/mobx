import {makeAutoObservable, makeObservable} from "mobx";

class Counter {

    count:number = 0
    timer:number = 10
    sum:number | null = null

    constructor() {
        makeAutoObservable(this)
    }

    increment(){
        this.count = this.count + 1;
    }
    decrement(){
        this.count = this.count - 1;
    }

    get total() {
        return `count + timer = ` + this.count + this.timer
    }

    allSum() {
        this.sum = this.count + this.timer
    }
}

export default new Counter();