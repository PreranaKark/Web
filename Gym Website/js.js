function validate()
    {
        if(fname.value=="") //takes the firstname and checks if the value is entered
        {
            alert("Please  Enter Your First Name:-");//provide error message if the field is empty
            fname.focus();
            return false;
        }
        else if(lname.value=="")
        {
            alert("Please Enter Your  Last Name:-");
            lname.focus();
            return false;
        }
        else if(email.value=="")
        {
            alert("Please Enter Your Email Address:-");
            email.focus();
            return false;
        }
        else if(email.value.indexOf("@")==-1) //checks if the email has @ symbol
        {
            alert("Email Contain @ Symbol");
            email.focus();
            return false;
        }
        else if(email.value.indexOf("@")==0 ||email.value.indexOf("@")==email.value.length-2 ||email.value.indexOf("@")==email.value.length-1)
        {
            alert("Invalid Email");
            email.focus();
            return false;
        }
        else if(email.value.indexOf(".")==-1)
        {
            alert("Email Contain . Symbol");
            email.focus();
            return false;
        }
        else if(email.value.indexOf(".")==0 ||email.value.indexOf(".")==email.value.length-2 ||email.value.indexOf(".")==email.value.length-1)
        {
            alert("Invalid Email");
            email.focus();
            return false;
        }
        else if(tno.value=="")
        {
            alert("Please Enter Telephone No");
            tno.focus();
            return false;
        }
        else if(tno.value.length!=10)//checks if the phone number is less than 10 digit.
        {
            alert("Please enter 10 digit phone number");
            tno.focus();
            return false;
        }
        
    
        else
        { 
         //return true;
         alert("Thank you! The form is submitted");
           
        }
        
        
    }
    function locate() {

        
        var page = "LOCATION";
        var address1 = "2044 N Alma School Rd,";
        var city = "Chandler AZ,85225";
        
        
        //get element and insert in the filed
        document.getElementById("name").innerHTML = page;
        document.getElementById("about").innerHTML = address1
        //add city
        document.getElementById("address").innerHTML = city;
        
        }

