let bList = document.getElementById("blist");
let bListMenu = document.getElementById("bListMenu");


bList.addEventListener('click', (e)=>{
    e.preventDefault();
    bListMenu.classlist.toggle("show");
}
)
