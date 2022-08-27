let counta=0;
let countb=0;
let countc=0;
let countd=0;
let counte=0;
let countf=0;
let countg=0;
let counth=0;
let counti=0;
let countj=0;
let countk=0;
let countl=0;
let countm=0;
let countn=0;
let counto=0;
let countp=0;
let countq=0;
let countr=0;
let counts=0;
let countt=0;
let countu=0;
let countv=0;
let countw=0;
let countx=0;
let county=0;
let countz=0;


function filterLetters(params) {
    a=[];
    for(var i=0;i<params.length;i++){
        for(var j=0;j<params[i].length;j++){
        if((params[i].charAt(j)=='a') || (params[i].charAt(j)=='A')){
         a[0]  = counta+1;
        }
        else{
            continue;
        }

//             else if(a[i[j]]=='b' || a[i[j]]=='B'){
// countb++;
//             }
//             else if(a[i[j]]=='b' || a[i[j]]=='B'){
//                 countb++;
//                             }
//                             else if(a[i[j]]=='b' || a[i[j]]=='B'){
//                                 countb++;
//                                             }
//                                             else if(a[i[j]]=='b' || a[i[j]]=='B'){
//                                                 countb++;
//                                                             }
//                                                             else if(a[i[j]]=='b' || a[i[j]]=='B'){
//                                                                 countb++;
//                                                                             }
//                                                                             else if(a[i[j]]=='c' || a[i[j]]=='C'){
//                                                                                 countc++;
//                                                             }
//                                                                   else if(a[i[j]]=='d' || a[i[j]]=='D'){
//                                                                           countd++;
//                                                                          }
                                                                    
        }
    }
    return a;
}

console.log(filterLetters(['naseem','waseem']));