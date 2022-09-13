// coffee shop => order coffee => drink coffee => goto cinema => get home => sleep

function coffeeShop(cb) {
    setTimeout(() => {
        console.log(`I went to a coffeshop.`);
        cb();
    }, 1000)
}

function orderCoffee(cb) {
    setTimeout(() => {
        console.log(`I ordered a cup of coffee`);
        cb();
    }, 1000)
}

function drinkCoffee(cb) {
    setTimeout(() => {
        console.log(`I drank the coffee`);
        cb();
    }, 1000);
}

function goToCinema(cb) {
    setTimeout(() => {
        console.log(`I went to the cinema`);
        cb();
    }, 1000);
}

function getHome(cb) {
    setTimeout(() => {
        console.log(`I got back home`);
        cb();
    }, 1000);
}

function sleep(cb) {
    setTimeout(() => {
        console.log(`I slept.`);
        cb();
    }, 1000)
}

coffeeShop(function () {
    setTimeout(() => {
        console.log(`I looked at the menu`);
        orderCoffee(function () {
            setTimeout(() => {
                console.log(`The coffee came in hot.`);
                drinkCoffee(() => setTimeout(() => {
                    console.log(`I paid the bill.`);
                    goToCinema(() => setTimeout(() => {
                        console.log(`I watched Quantummania`);
                        getHome(() => setTimeout(() => {
                            console.log(`I ate my dinner`);
                            sleep(() => setTimeout(() => {
                                console.log(`THE END!`);
                            }, 1000));
                        }, 1000));
                    }, 1000));
                }, 1000));
            }, 1000);
        });

    }, 1000);
});
