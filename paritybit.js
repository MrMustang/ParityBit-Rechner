//Version 1.1

const los = document.getElementById('los');


los.addEventListener("click",function(){
    
    
    //Input auslesen
    var x = document.getElementById("wort");
    var y = x.value;
   // console.log(y);

   
    //input aufsplitten und in array packen
    const chars = y.split('');
  // console.log(chars)

    //Array inhalt in ASCII umwandeln
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const gu = document.getElementById('gu');
     
    
    if (gu.value == "ungerade"){


   for (var i =0; i< chars.length; i++){
       var yy= chars[i]
       const  ascii =  yy.charCodeAt(0);
       
       

        if(yy == " "){
            div1.innerHTML += "leer" + " = " +ascii + "<br>";
        }else{
            div1.innerHTML += yy + " = " +ascii + "<br>";
        }

      //console.log(ascii) //to ASCII

        var binary= chars[i].charCodeAt(0).toString(2) + " ";
       //console.log(binary)
       //console.log(binary.length)
                            // hier weiter machen

    }


        console.log("chars: " + chars.length)


      for (var j =0; j< chars.length; j++){
          
       // var yy= chars[j]
        
        var match = binary.split('1').length-1
 
        var binary= chars[j].charCodeAt(0).toString(2) + " ";

        if (binary.length ==6){
         div2.innerHTML += "0"+ "0"+ binary + " "  + isEven(match) + "<br>";  //to binary in div ausgeben, falls 7, 0 davor setzen
        }else if ( binary.length ==7){
            div2.innerHTML += "0" +"0" +binary + " "  + isEven(match) + "<br>"; 
        }else {div2.innerHTML += "0"+ binary +  isEven(match) +"<br>";}
        



       //to binary in div ausgeben, falls 7 oder wenig 0 davor setzen
        
            function isEven(match){
                if (match%2 == 0)
                    return 1;
                else
                    return 0;
            }
       }

       
    
     

      // console.log(binary) //to Binary

   

}else if(gu.value == "gerade"){
   

    for (var i =0; i< chars.length; i++){
        var yy= chars[i]
        const  ascii =  yy.charCodeAt(0);
        
        
 
         if(yy == " "){
             div1.innerHTML += "blank" + " = " +ascii + "<br>";
         }else{
             div1.innerHTML += yy + " = " +ascii + "<br>";
         }
 
      // console.log(ascii) //to ASCII
 
        var binary= chars[i].charCodeAt(0).toString(2) + " ";
 
        if (binary == 100000){
         var match = binary.split('1').length-1
       //  console.log(match)
         div2.innerHTML += "0"+"0"+ binary + " "  + isEven(match) + "<br>" ;
        }else if (binary.length < 8){
 
         var match = binary.split('1').length-1
       //  console.log(match)
         div2.innerHTML += "0"+ binary + " "  + isEven(match) + "<br>" ;
        // div2.innerHTML += "0"+ binary + " " + match ;
        }else{//to binary in div ausgeben, falls 7 oder wenig 0 davor setzen
         var match = binary.split('1').length-1
       //  console.log(match)
         
         
             div2.innerHTML += "0"+ binary + " " + isEven(match) + "<br>";
             function isEven(match){
                 if (match%2 == 0)
                     return 0;
                 else
                     return 1;
             }
        }
 
        
         
        
 
       // console.log(binary) //to Binary
    }} 
    




 // Binär darstellen

    const div3 = document.getElementById('div3');

    for (var j =0; j< chars.length; j++){
        var yy= chars[j]
        
       
 
        var binary= chars[j].charCodeAt(0).toString(2) + " ";
         if (binary == 100000){
            var match = binary.split('1').length-1
           // console.log(match)
            div2.innerHTML += "0"+"0"+ binary + " "  + isEven(match) + "<br>" ;

        }else if (binary.length ==6){
         div3.innerHTML += "0"+ "0"+ binary + " "  + "<br>";  //to binary in div ausgeben, falls 7, 0 davor setzen
        }else if ( binary.length ==7){
            div3.innerHTML += "0" +"0" +binary + " "  + "<br>"; 
        }else {div3.innerHTML += "0"+ binary + "<br>";}
        } 



        x.value = "";


        
        

  });

//© Jason Adam Wirtz , CC-BY-SA, 2021 
