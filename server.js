function validate() //authentication 
{
    if(  
        document.getElementById("username").value == "user" //username
        && document.getElementById("password").value == "admin" //password
    )
    {
        alert( "Επιτυχής Ταυτοποίηση Χρήστη" );
        
    }
    else
    {
        alert( "Ανεπιτυχής Ταυτοποίηση Χρήστη" );
    }
}