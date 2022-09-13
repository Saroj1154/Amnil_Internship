// Callback task
//story  ===> buy cycle => learn to ride => go to ride => accident => go to hospital

function buyCycle(model, callback) {
    setTimeout(function () {
        console.log(`I went to a bicycle shop to buy a bicycle. `);
        setTimeout(function () {
            console.log(`Shopkeeper showed me a ${model} bicycle and I liked it.`);
            setTimeout(() => {
                console.log(`So, finally I bought a ${model} bicycle.`);
                callback();
            }, 3000);
        }, 3000);


    }, 3000);
}

function learnCycle(time, callback) {
    setTimeout(function () {
        console.log(`I learnt to ride the bicycle in ${time} days.`);
        callback();
    }, 3000);
}

function goToRide(place, callback) {
    setTimeout(function () {
        console.log(`One day, I went on a ride along the ${place}.`);
        callback();
    }, 3000);
}

function accident(callback) {
    setTimeout(function () {
        console.log(`It was a minor accident.`);
        callback();
    }, 3000);
}

function wentToHospital(injury, callback) {
    setTimeout(function () {
        console.log(`So, I went to a nearby hospital and doctor told me about my ${injury}.`);
        callback();
    }, 3000);
}

function heal() {
    setTimeout(function () {
        console.log(`I healed quickly. :D`);
    }, 3000)

}


buyCycle('mountain', function () {
    setTimeout(function () {
        console.log(`I am excited to learn to ride.`);
        learnCycle(15, function () {
            setTimeout(() => {
                console.log(`It's so much fun to ride a bicycle. I love it.`);
                goToRide('highway', function () {
                    setTimeout(() => {
                        console.log(`Unfortunately, my chain broke loose and I fell.`);
                        accident(function () {
                            setTimeout(() => {

                                console.log(`But I couldn't move my left arm.`);
                                wentToHospital('disloacted shoulder', function (heal) {
                                    // setTimeout(() => {
                                    //     console.log(`My shoulder was treated and I was given some medications.`)
                                    // }, 3000);
                                    // setTimeout(() => {
                                    //     console.log(`I healed rather quickly.`)
                                    // }, 6000);
                                    // setTimeout(() => {
                                    //     console.log(`P.S : I STILL LOVE TO RIDE :D`)
                                    // }, 9000);
                                    // setTimeout(() => {
                                    //     console.log(`THE END!`)
                                    // }, 12000);
                                    heal();
                                })
                            }, 3000)
                        })
                    }, 3000);
                });
            }, 3000);
        });
    }, 3000);
});