let btn = document.querySelectorAll(".input");
let reset = document.querySelector(".reset-btn-box");
let playagain = document.querySelector(".playagain-btn");
let massage = document.querySelector(".winmassage");
let hide = document.querySelector(".winbox");
// let draw = document.querySelector(".drawbox");
let trun="x";
let btns=Array.from(btn);



let winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


playagain.addEventListener("click",()=>{
    trun ="x";
    enebelbtn();
    hide.classList.add("hide");
    dwaw.classList.add("hide12");
})

reset.addEventListener("click",()=>{
    // console.log(reset.innerText);
    trun ="x";
    enebelbtn();
})

btn.forEach(button => {
    button.addEventListener("click",()=>{
        if(trun =="x")
        {
            button.innerText ="x";
            trun="o";
            button.style.color ="red";
        }
        else
        {
            button.innerText ="o";
            trun="x";
            button.style.color="green";
        }
        button.disabled = true;
        let cheek1 = cheek_win();
        let cheek2 = cheek_deaw();
        if(cheek1 != true && cheek2 == true)
        {
            show_draw();
            hide.classList.remove("hide");
        }
    })
});


function enebelbtn()
{
    for(let bt of btns)
    {
        bt.disabled = false;
        bt.innerText="";
    }
}
function disablebtn()
{
    for(let bt of btn)
    {
        bt.disabled = true;
    }
}
function show_winner(win)
{
    massage.innerText = `congratulation \nwinner is ${win}`;
}
function show_draw()
{
    massage.innerText = `Its draw`;
}

function cheek_win()
{
    for(let pattern of winpatterns)
    {
        let val1 = btn[pattern[0]].innerText;
        let val2 = btn[pattern[1]].innerText;
        let val3 = btn[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != "")
        {
            if(val1 == val2 && val2 == val3)
            {
                disablebtn();
                hide.classList.remove("hide");
                show_winner(val1);
                return true;
            }
        }
    }
}

function cheek_deaw()
{
    let count = 0;
    for(let bt of btn)
    {
        if(bt.innerText == "o" || bt.innerText == "x")
        {
            count=count+1;
        }
    }
    if(count == 9)
    {
        return true;
    }
    else
    {
        return false;
    }
}