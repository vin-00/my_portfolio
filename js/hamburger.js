

let menu = document.getElementsByClassName('hamburger')[0];

let des = document.getElementsByClassName("desktop")[0];

let can = document.getElementsByClassName("cancel")[0];

can.addEventListener("click",()=>{
    mob.classList.add("dis");
    des.classList.remove("dis");
})

let li = document.querySelectorAll(".opt li");

for(let l of li){
    l.addEventListener("click",()=>{
        mob.classList.add("dis");
        des.classList.remove("dis");
    })
}

let mob = document.getElementsByClassName("mobile")[0];
menu.addEventListener('click',()=>{
    mob.classList.remove("dis");
    des.classList.add('dis');
})