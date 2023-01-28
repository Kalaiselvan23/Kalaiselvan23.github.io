var slider = document.getElementById("password-length");
var charLen = document.getElementById("length");
let charlength;
var choseOpt = document.querySelectorAll(".input-option");
let bar=document.querySelectorAll(".bar");
let options = {
    "includeUpper": false,
    "includeLower": false,
    "includeNumber": false,
    "includeSymbol": false,
};
slider.addEventListener("input", function () {
    charLen.innerText = slider.value;
    charlength = slider.value;
    viewStrength();
})
choseOpt.forEach(function (option) {
    option.addEventListener("input", function () {
        let id = option.getAttribute("id");
        if (option.checked) {
           options[id]=true;
           viewStrength();
        }
        else {
            options[id] = false;
            viewStrength();
        }
    })
})
function viewStrength()
{
    let opt=getCheckedLen(options);
    bar.forEach(function(bar)
    {
        if(bar.classList.contains("full"))
        {
            bar.classList.remove("full")
        }
    })
    if(opt==1 && (length>=7 && length<=30))
    {

        bar[0].className+=" full";
    }
    else if(opt>=2 && (length>8 && length<25))
    {
        bar[0].className+=" full";
        bar[1].className+=" full";
    }
    else if(opt>=3 && (length>8 && length<30))
    {
        bar.forEach(function(bar){
            bar.className+=" full";
        })
    }
    
    // bar[0].style.background="";
}
function getCheckedLen(options) {
    let count = 0;
    for (let i of Object.values(options)) {
        if(i==true)
        {
            count+=1;
        }
    }
    return count;
}
const generate=document.getElementById("generate");
generate.addEventListener("click",generatePassword());
function generatePassword()
{
    document.getElementById("password").innerHTML="$2y$10$wTiJ5oRzLk68frC2niMequiq5voMGS3xM9KEh9ZOygKhVQL89l8Au"
}