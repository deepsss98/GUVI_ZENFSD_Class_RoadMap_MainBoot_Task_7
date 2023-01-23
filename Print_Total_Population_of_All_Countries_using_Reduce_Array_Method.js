var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){

    var data=request.response
    var res=JSON.parse(data);

    //Print the total population of countries using reduce function
    var result=[];
    result=res.reduce((acc,element)=>acc+element.population,0);
    console.log("Total population of all countries: "+result);
}