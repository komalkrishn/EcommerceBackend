console.log('start');
const user=getUser(1,(data)=>{

    console.log('user data',data);
    getRepos(data.username,(repos)=>{
        console.log(repos);
        getcommits(data.username.repocallback,(commit)=>{
            console.log(commit[0]);
        })

    })
});
console.log('end');

function getUser(id,callback){

    setTimeout(()=>{
        console.log('getting some information about the users in repos');
        callback({id:id,username:'komal'});
    },2000);
    }
    function getRepos(username,repocallback){
        setTimeout(()=>{
            console.log('getting some information about the users in git');
            repocallback(['repo1','repo2','repo3']);
        },2000);

    }
    function getcommits(repocallback,commitcallback){

        setTimeout(()=>{
            console.log('getting some information about the commits in git repos');
            commitcallback(['commit','commit2','commit3']);
        },2000);

    }
