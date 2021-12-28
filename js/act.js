const numofBox = document.querySelectorAll('div[id^="box"]').length;
const plusBox = 4 - (numofBox % 4);

document.addEventListener('DOMContentLoaded',()=>{
    for(let i=1;i<=numofBox;i++)
    {
        console.log(document.getElementById("box"+i));
        document.getElementById("box"+i).addEventListener("click", checked);
    }
});


//체크하는 함수
function checked(e)
{   
    uncheck();
    console.log(e.target)
    e.target.style.width="90%";
    e.stopPropagation();
}

//컨테이너 작업
let container = document.getElementById("container");
container.addEventListener("click", uncheck);
function uncheck(e)
{
    for(let i=1;i<=numofBox;i++) 
    {
        document.getElementById("box"+i).style.width="22%";
    }
}

for(let i=0;i<plusBox;i++)
{
    container.innerHTML += `<div class=emptybox></div>`
}