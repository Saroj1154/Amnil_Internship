function func() {
    return new Promise((resolve, reject) => {
        const err = true;
        if (!err) {
            setTimeout(() => {
                console.log(`This is resolved`);
                resolve();
            }, 2000);
        }
        else {
            reject(`This is rejected`);
        }
    });
}

func().then(() => {
    console.log(`We resolved this issue`);

}).catch((err) => {
    console.log(`ERROR: ${err}`);
})