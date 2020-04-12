const menus = document.getElementById("menu_s");
const ul = document.getElementById("menu");

function show_menu(){
    document.getElementById('menu').classList.add("show");
}
function hide_menu(){
    document.getElementById('menu').classList.remove("show");
}

menus.addEventListener("click", function () {
   
    switch(ul.className){
        case "":
            show_menu();
        break
        case "show":
            hide_menu();
        break
    }
});