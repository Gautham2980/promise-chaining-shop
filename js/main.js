let stocks={
    fruits:["Strawberry","orange","mango"],
    liquid:["water","ice"],
    holder:["cup","cone","stick"],
    toppings:["peanus","chocolate","sprinkles"]
}


let a=new Promise((resolve,reject)=>{

    let b=true;

    if(b){
        resolve(b)
    }

    else{
        reject()
    }

})

a.then(()=>{
    console.log("shop is open");
}).then(()=>{
    console.log(`${stocks.fruits[0]} was selected`);
}).then(()=>{
    setTimeout(function(){
        console.log("production was started");
    },1000)
}).then(()=>{
    setTimeout(function(){
        console.log("fruits has been chopped");
    },2000)
    
}).then(()=>{
    setTimeout(function(){
        console.log(`${stocks.liquid[1]} was selected`);
    },2000)
}).then(()=>{
    return new Promise((resolve,reject)=>{
     setTimeout(function(){
        resolve();
        console.log("Start the Machine");
     },3000)

        
    })
}).then(()=>{
    setTimeout(function(){
        console.log(`Ice-Cream placed on ${stocks.holder[1]}`)

    },3000)
}).then(()=>{
    setTimeout(function(){
        console.log(`${stocks.toppings[1]} was added`)
    },4000)
}).then(()=>{
    setTimeout(function(){
        console.log("Serve the Ice-cream")
    },5000)
})