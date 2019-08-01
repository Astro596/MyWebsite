
<script>
    function formSubmit(){
  var response= grecaptcha.getResponse();
  if(response.length==0){
          document.getElementById('g-recaptcha-error').innerHTML= '<span style="color-red;"> <h3>This field is required.</h3></span> ';
 return false;
  }
  return true;
    }
  function verifyCaptcha(){
      document.getElementById('g-recaptcha-error').innerHTML='';
  }  
  </script>