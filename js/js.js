function MYFUNC() {
console.log('loading');
var btn=document.querySelector(".read-btn");
var t=document.querySelector(".more");
var v=document.querySelector(".more1");
v.classList.toggle('sd')
t.classList.toggle('dsd');
if(btn.innerText==='Read More'){
    btn.innerText='Read Less';
}else{
    btn.innerText='Read More'
}
}

function MYFUNC2() {
    console.log('loading');
    var btn1=document.querySelector(".read-btn2");
    var text1=document.querySelector(".more2");
    var img1=document.querySelector(".more21");
    text1.classList.toggle('tex1')
    img1.classList.toggle('img1');
    if(btn1.innerText==='Read More'){
        btn1.innerText='Read Less';
    }else{
        btn1.innerText='Read More'
    }
    }

// readMorebtn.addEventListener('click',(e)=>{
//     console.log('loadi');
//     text1.classList.toggle('dsd');

// }
// )

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }