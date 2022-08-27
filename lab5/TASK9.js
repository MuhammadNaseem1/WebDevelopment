let flag=true;
let object={}
let count1=1;
let count2=1;
function text(obj)
{
    if(flag==true)
    {
        obj.innerText="X"
        object[obj.id]="X"
        flag=false;
        count1++;
    }
    else
    {
        obj.innerText="O";
        object[obj.id]='O'
        flag=true;
        count2++;
    }
    if(count1%3==0||count2%3==0)
    {
        console.log("j")
        call()
    }  
}
function restart()
{
    location.reload()
}
function call()
{

    

}