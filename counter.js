let countValue=document.getElementById("count")
let inc=document.getElementById("in")
let dec=document.getElementById("de")
let reset=document.getElementById("reset")

function display(){
    countValue.textContent=count

}

  count=0
  display()

inc.addEventListener("click",function(){
    count++
    // console.log(count);
    display();
})
dec.addEventListener("click",function(){

    count--
    // console.log(count);
    display();
})
reset.addEventListener("click",()=>{
    count=0
    // console.log(count)
    display();
})