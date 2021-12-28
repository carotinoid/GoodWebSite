document.addEventListener("click", (e) => {console.log(e.target)});
const numofBox = document.querySelectorAll('div[id^="box"]').length;
const plusBox = 4 - (numofBox % 4);
/*for(let i=1;i<=numofBox;i++)
{
    numbox = document.getElementById("box"+i);
    numbox.addEventListener("click", check(i));
}*/

///////////////
let boxxx = document.getElementById("box6");
boxxx.addEventListener("click", booox6);
function booox6()
{
    document.getElementById("box6").style.width="90%";
}
////////////////

//function Reload(i);

let container = document.getElementById("container");
container.addEventListener("click", uncheck);
function uncheck()
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