
// node 16Sept_Classwork on terminal to RUN and READ a small STORY ABOUT BHAIRE. 
// CTRL + C to stop execution, it's a never ending loop. 

function start(bhaire) {
    setTimeout(() => {
        console.log(`Once upon a time there was a village.`);
        bhaire();
    }, 1000);
}

function goat(alone) {
    setTimeout(() => {
        console.log(`He had 4 goats.`);
        alone();
    }, 1000);
}

function grandmother(graze) {
    setTimeout(() => {
        console.log(`He lived with his grandmother who was very old.`);
        graze();
    }, 1000);
}

function sleep(tiger) {
    setTimeout(() => {
        console.log(`Bhaire fell asleep on a tree while watching his goats.`);
        tiger();
    }, 1000);
}

function wake(cry) {
    setTimeout(() => {
        console.log(`Bhaire woke up and saw his goats killed by the tiger.`);
        cry();
    }, 1000);
}

function happy() {
    return new Promise((resolve) => {
        resolve(setTimeout(() => {
            console.log(`His grandmother made him a bowl of pudding.`);
        }, 1000));
    });
};

function gratitude(recurring) {
    setInterval(() => {
        console.log(`THANK YOU FOR READING!`);
        recurring();
    }, 2000);
}

start(function () {
    setTimeout(() => {
        console.log(`Bhaire lived in that village.`);
        goat(function () {
            setTimeout(() => {
                console.log(`He had no parents.`);
                grandmother(function () {
                    setTimeout(() => {
                        console.log(`One day we went to graze his goats in a jungle.`);
                        sleep(function () {
                            setTimeout((predator) => {
                                console.log(`A ${predator} came and ate all his goats.`);
                                wake(function () {
                                    setTimeout(() => {
                                        console.log(`He walked and cried his way back home.`);
                                        happy().then(setTimeout((name, relative) => {
                                            console.log(`${name} hugged his ${relative} and thanked her.`);
                                        }, 2000, 'Bhaire', "grandmother")
                                        ).then(setTimeout(() => {
                                            console.log(`THE END!`);
                                            gratitude(function () {
                                                setTimeout(() => {
                                                    console.log(`REPEATING`);
                                                }, 1000);
                                            });
                                        }, 3000)).catch((err) => console.log(`${err}`));
                                    }, 1000);
                                });
                            }, 1000, 'tiger');
                        });
                    }, 1000);
                });
            }, 1000);
        });
    }, 1000);
});