

let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let p=document.getElementById("ele")

let div=document.getElementById("div")
let btn3=document.getElementById("btn-change")


function increment() {
    store.dispatch({type:'INCREMENT'})
    store.getState(); 
}

function decrement() {
    store.dispatch({type:'DECREMENT'})
}

function changeColor(){
    store.dispatch({type:"CHANGE"})
}


store.subscribe(()=>{  
    p.textContent = store.getState().count; 
    div.style.backgroundColor=store.getState().color

    console.log(store.getState());
})
