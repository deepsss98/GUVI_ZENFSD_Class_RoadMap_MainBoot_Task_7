var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){

    var data=request.response
    var res=JSON.parse(data);

    //Get all the countries with a population of less than 2 lakhs using Filter function
    var result=[];
    result=res.filter((element)=>element.population<200000).map((element)=>element.name.common);

    console.log("All the countries with a population of less than 2 lakhs using Filter function: ")
    for (let x of result) {
        console.log(x);
    }

}