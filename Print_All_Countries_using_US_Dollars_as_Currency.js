var request=new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true);
        request.send();
        request.onload=function(){

            var data=request.response
            var res=JSON.parse(data);
            //Print_All_Countries_using_US_Dollars_as_Currency
            var result=[];
            result=res.filter((element)=>element.currencies="USD").map((element)=>element.name.common);
            console.log("All the countries using_US_Dollars_as_Currency: ")
            for (let x of result) {
                console.log(x);
            }
                }