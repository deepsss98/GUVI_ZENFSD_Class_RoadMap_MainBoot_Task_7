var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){

    var data=request.response
    var res=JSON.parse(data);
    
    res.forEach(element => {
        console.log("Country_name: "+element.name.common+", "+"Capital: "+element.capital+", "+
        "Flag: "+element.flag)
    });

   
}
