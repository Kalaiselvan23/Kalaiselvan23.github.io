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