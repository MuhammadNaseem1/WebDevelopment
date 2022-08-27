
function countDown(number)
{
let id = setInterval(function (){
    number--;
    console.log(number);
    if(number==0){
        console.log('done');
        clearInterval(id);
    }
    },1000)
}
countDown(6)

