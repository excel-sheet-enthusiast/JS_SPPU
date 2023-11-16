function set_string()
    {
		var string1  = document.getElementById("st1").value;
           var string2  = document.getElementById("st2").value;
           compare1(string1,string2);
           compare2(string1,string2);
           compare3(string1,string2);
           compare4(string1,string2);

	}
        
        function compare1(string1,string2)
        {
           
           var ot;
        const result1 = string1.toUpperCase() === string2.toUpperCase();
        
        if(result1) {
               disp="The strings are similar ";
               

          } else {
                disp="The strings are not similar ";
           
            
        }
              
        document.getElementById("casing").innerHTML=disp;

         }
  
      

      function compare2(string1,string2)
        {
        
        const pattern = new RegExp(string1, "gi");
          var ot;
         
         const result2 = pattern.test(string2)
         
        if(result2) {
             ot="The strings are similar <br><br>";
            
            
         } else {
             ot="The strings are not similar <br><br>";
            
            
        }
        document.getElementById("regex").innerHTML=ot;

      }

   function compare3(string1,string2)
        {

        // program to perform case insensitive string comparison
          var ot;
         const result3 = string1.localeCompare(string2, undefined, { sensitivity: 'base' });
         
        if(result3 == 0) {
            ot="The strings are similar <br><br>";
         
        } else {
          ot="The strings are not similar <br><br>";
         
       
        }

       document.getElementById("locom").innerHTML=ot;
}


function compare4(string1,string2)
        {
        

     var ot;
      
        if( string1 === string2)
        {
         ot="The strings are similar <br><br>";
           
        }
        else
        {
         ot="The strings are not similar";
         
        }

     document.getElementById("equality").innerHTML=ot;
    }