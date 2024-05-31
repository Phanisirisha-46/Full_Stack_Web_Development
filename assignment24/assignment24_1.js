let con=true;

const change=new Promise((fulfilled,rejected)=>{

    setTimeout(function(){
        if(con===true)
        {
            fulfilled("she changed and promise is true");
        }
        else{
            rejected("she does not changed and promise is false");
        }

    },5000);
})

change.then(function(result){

    console.log(result);

})
.catch(function(error){
    console.log(error);

}
)
console.log("promise is being tested");