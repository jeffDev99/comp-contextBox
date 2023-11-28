let $ = document;
let bodyEl = $.body
let contextMenuEl =$.querySelector("#contextMenu")

bodyEl.addEventListener("contextmenu",(e)=>{
e.preventDefault();
console.log(e.pageX , e.pageY);
contextMenuEl.style.left=e.pageX
contextMenuEl.style.top=e.pageY
contextMenuEl.style.display="block"
})

bodyEl.addEventListener("click",()=>{
    contextMenuEl.style.left="0"
    contextMenuEl.style.top="0"
    contextMenuEl.style.display="none"
})


bodyEl.addEventListener("keydown",(e)=>{
    if(e.key === "Escape"){
        contextMenuEl.style.left="0"
        contextMenuEl.style.top="0"
        contextMenuEl.style.display="none"
    }
})