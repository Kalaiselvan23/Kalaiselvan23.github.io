function opentab(planet)
{
    var contents=document.querySelectorAll(".planet-content");
    // contents.style.visibility="visible";
    for(i of contents)
    {
        i.style.display="none";
        if(i.id==planet)
        {
            i.style.display="flex";
            // console.log(i.style.visibility)
        }
    }
}
function opencontent(number)
{
    const content=document.querySelectorAll(".crew-content");
    // console.log(content[number-1])
    // content[number-1].style.display="flex";
    const dots=document.querySelector("dots").innerHTML;
    console.log(dots)
    for(var i=0;i<content.length;i++)
    {
        content[i].style.display="none";
        if(i==number-1)
        {
            content[i].style.display="flex";
            // dots.style.backgroundColor="white";
        }
    }
}

function opentech(number)
{
    var tech=document.querySelectorAll(".content-tech");
    var nav=document.querySelectorAll(".number");
    for(var i=0;i<tech.length;i++)
    {
        tech[i].style.display="none";
        nav[i].style.backgroundColor="";
        nav[i].style.color="white";
        if(i==number-1)
        {
            tech[i].style.display="flex";
            // console.log(nav[i]);
            nav[i].style.backgroundColor="white";
            nav[i].style.color="blue";
        }
    }
}
