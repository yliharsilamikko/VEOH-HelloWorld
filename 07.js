function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }

    deliver = async () => {
        await sleep(1000);
        this.delivered = true;
        return;
    }

    summarize = async () => {
        console.log('start summarize');

        //Simulate database delay or heavy calculation
        await sleep(1000);
        const summary = 'order id: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        console.log('end summarize');
        return summary;
    }
}

let order_obj = new order(1237, 'Second order');

order_obj.deliver().then(() => {
    console.log('delivered!');
    return order_obj.summarize();
}).then((summary) => {
    console.log(summary);
});