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
    for(var i=0;i<content.length;i++)
    {
        content[i].style.display="none";
        if(i==number-1)
        {
            content[i].style.display="flex";
        }
    }
}


