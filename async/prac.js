console.log('start');
// const user=getUser(1,(admin)=>{
//     console.log('getting user database',admin)
//     getRepos('bob',(repos)=>{
//         console.log('getting repos',repos)
//     })
// });
getUser(1)
// .then(user=>console.log(user))
.then(user=>getRepos(user.gitusername))
.then(comits=>console.log(comits[0]))
.catch(error=>console.log('error',error.message))

// console.log('end');
function getUser(id){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log('getting user info in git')
            resolve({id:id,gitusername:'komal'});
        
        },2000);

    })
   
}
function getRepos(username){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log('getting user info in git')
            resolve(['repo1','repo2','repo3']);
        
        },2000);

    })
   
}