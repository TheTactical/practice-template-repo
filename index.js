function initializeGame() {
    return new Promise((resolve) => {
        console.log("Initializing game...");

        setTimeout(() => {
            console.log("Game successfully initialized!");
            resolve();
        }, 2000);
    });
}

initializeGame().then(() => {
    console.log("Ready to start the game!");
});