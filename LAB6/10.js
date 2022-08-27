function printFirstAndLast(arr){
    let a=[];
for(var i=0;i<arr.length;i++){
   console.log( a[i]=arr[i].charAt(0)+''+arr[i].charAt(arr[i].length-1));
}
}

printFirstAndLast(['awesome','example','of','forEach'])