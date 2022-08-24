function buyCake(type){
    return new Promise((resolve,reject)=>{
        if(type=='coffee'){
            resolve('job done!')
        }
        else{
            reject('not done!')
        }
    })
}
buyCake('coffee').then(res=>{ console.log(res)}).catch(err=>{console.log(err)});