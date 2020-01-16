function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class worker {
    constructor(n_food) {
        this.n_food = n_food;
    }

    do_work = async (duration) => {
        if (this.n_food > 0) {
            console.log('Start work');
            await sleep(duration);
            console.log('Work done');
            this.n_food--;
            console.log('n_food:', this.n_food);
            //this.n_food = this.n_food -1;
        } else {
            console.log('No food');
        }
        return; //Promise<void>
    }
}

let worker_obj = new worker(3);
worker_obj.do_work(2500).then(() => {
    return worker_obj.do_work(1000);
}).then(() => {
    return worker_obj.do_work(500);
}).then(() => {
    return worker_obj.do_work(300);
}).then(() => {
    return worker_obj.do_work(200);
});

console.log('End of program');