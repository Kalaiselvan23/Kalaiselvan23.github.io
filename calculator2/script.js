const theme = document.getElementById("ball");
const root = document.querySelector(":root");
let prop1 = {
    "--background":"#17062A",
    "--display":"#1E0836",
    "--buttons":"#1E0836",
    "--button-color":"#331B4D",
    "--number-hover-bg":"#6B34AC",
    "--number-hover":"white",
    "--text-color":"yellow",
    "--equal-color":"blue",
    "--ball-color":"white",
    "--display-text":"yellow",
    "--button-text":"yellow",
    "--head-color":"yellow",
    "--equal-bg":"white",
}
let prop2={
    "--background":"#3B4664",
    "--display":"#181F32",
    "--buttons":"#252D44",
    "--button-color":"#EAE3DB",
    "--number-hover-bg":"#A2B3E1",
    "--number-hover":"white",
    "--text-color":"#242C46",
    "--equal-color":"white",
    "--ball-color":"#F96C59",
    "--display-text":"white",
    "--button-text":"#505864",
    "--head-color":"white",
    "--equal-bg":"#F96C5B",
}
let prop3={
    "--background":"#E6E6E6",
    "--display":"#EEEEEE",
    "--buttons":"#D3CDCD",
    "--button-color":"#E5E4E0",
    "--number-hover-bg":"white",
    "--number-hover":"#42433C",
    "--text-color":"#34332E",
    "--equal-color":"white",
    "--ball-color":"#FF8B38",
    "--display-text":"#464541",
    "--button-text":"#464541",
    "--head-color":"#4A4942",
    "--equal-bg":"#FF8B38",
}
theme.addEventListener("click", function () {
    var translate = parseInt(theme.style.translate);
    if (theme.style.translate != "" && translate < 2.5) {
        theme.style.translate = translate + 2.5 + "vh";
    }
    else if (translate > 2.5) {
        theme.style.translate = "";
        // console.log(theme.style.translate)
    }
    else {
        theme.style.setProperty("translate", "2vh");
    }

    if (theme.style.getPropertyValue("translate") == "2vh") {
        var rs = getComputedStyle(root);
        //root.style.setProperty("--background","yellow");
        setProperty(prop2);
        // console.log(translate)
    }
    //console.log(theme.style.getPropertyValue("translate"))
    else if(theme.style.getPropertyValue("translate")=="4.5h" || translate==2)
    {
        setProperty(prop3);
    }
    else
    {
        setProperty(prop1)
    }
});
function setProperty(props) {
    for (i of Object.keys(props)) {
        root.style.setProperty(i, props[i]);
    }
}
var button = document.querySelectorAll(".button");
let values = document.querySelector("#values");
let operations = document.querySelectorAll(".operation")
for (let i of button) {
    var val1;
    var val2;
    i.addEventListener("click", function () {
        if (!i.classList.contains("operation")) {
            if (values.innerHTML.length < 13) {
                values.innerHTML += i.innerHTML;
            }
        }
    });
}
let arr=[];
const calc=
{
    first_operand:"",
    second_operand:"",
    operate:"",
};
for(let o of operations)
{
    o.addEventListener("click",function()
    {
        
        arr.push(values.innerHTML);
        calc.first_operand=values.innerHTML;
        calc.operate=o.innerHTML;
        values.innerHTML="0";
        
        if(o.innerHTML=="=")
        {
            let value=calculate(calc);
            values.innerHTML=value;
        }
    })
}
function calculate()
{
    let v1=parseInt(calc.first_operand);
    let v2=parseInt(calc.second_operand);
    let op=calc.operate;
    let sum;
    console.log(op);
    switch(op)
    {
        case "+":
            sum=v1+v2;
            break;
        case "-":
            sum=v1-v2;
            break;
        case "/":
            sum=v1/v2;
            break;
        case "*":
            sum=v1*v2;
            break;
        default:
            sum=NaN;
            break;
    }
}