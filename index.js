const initializeGame = () =>{
    return new Promise((resolve, reject)=> {
        setTimeout(resolve("Game started"), 2000);
    })
}

initializeGame()
.then((message)=>{
    console.log(message);
    
})