var request=new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true);
        request.send();
        request.onload=function(){

            var data=request.response
            var res=JSON.parse(data);

        //Get all the countries from the Asia continent /region using the Filter function

            var result=[];
            result=res.filter((element)=>element.continents=="Asia").map((element)=>element.name.common);
            console.log("All the countries from the Asia continent /region using the Filter function: ");
            
            for (let x of result) {
                console.log(x);
            }
        }