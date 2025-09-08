

let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let p=document.getElementById("ele")

let div=document.getElementById("div")
let btn3=document.getElementById("btn-change")
let p1=document.getElementById("fetch")



function increment() {
    return {type:'INCREMENT'}
}

function decrement() {
    return {type:'DECREMENT'}
}

function changeColor(){
    return {type:"CHANGE"}
}

function fetchUser() {
    return function (dispatch,state) {
        dispatch({type:'FETCH'})    
        console.log("current",state());
        
        setTimeout(()=>{
            dispatch({type:"FETCH_DONE"})
        },4000)
    }
}

store.dispatch(fetchUser())

store.subscribe(()=>{  
    p.textContent = store.getState().count; 
    div.style.backgroundColor=store.getState().color
    p1.textContent = "Status: " + store.getState().data;
   console.log("State now:", store.getState().data);
   
})
