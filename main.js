let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  idd = id("idd"),
  SN = id("SN"),
  validate = id("validate"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => 
{
  e.preventDefault();

  engine(username, 0, "Required**");
  engine(idd, 1, "Required**");
  engine(SN, 2, "Required**");
  engine(validate, 3, "Required**");
});

let engine = (id, serial, message) =>
{
  if (id.value.trim() === "") 
  {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";


     // Show notification
     notificationMessage.innerText = "Please Fill Up All The Queries !!";
     notification.classList.remove("hidden");
     notification.classList.add("show");
 
     // Hide notification after 3 seconds
     setTimeout(() => 
     {
          notification.classList.remove("show");
          notification.classList.add("hidden");
     }, 3000);
    
  }

  
   
  else if(id.value.trim() !== "" && validate.value === "Spring 2020")
  {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";



    // Show notification
    notificationMessage.innerText = "Congratulations!! Your Transport Card Is Valid";
    notification.classList.remove("hidden");
    notification.classList.add("show");

    // Hide notification after 3 seconds
    setTimeout(() => 
    {
         notification.classList.remove("show");
         notification.classList.add("hidden");  
         clearData(); 
    }, 3000);

  }

  else if(id.value.trim() !== "" && validate.value !== "Spring 2020")
  {
    
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";



    // Show notification
    notificationMessage.innerText = "Not a Valid Transport Card";
    notification.classList.remove("hidden");
    notification.classList.add("show");

    // Hide notification after 3 seconds
    setTimeout(() => 
    {
         notification.classList.remove("show");
         notification.classList.add("hidden");
        
    }, 3000);
    
    
  }
  
  function clearData() {
    // Clear input values
    username.value = "";
    idd.value = "";
    SN.value = "";
    validate.value = "";
  
    // Clear error messages
    for (let i = 0; i < errorMsg.length; i++) {
      errorMsg[i].innerHTML = "";
    }
  
    // Reset borders
    username.style.border = "none";
    idd.style.border = "none";
    SN.style.border = "none";
    validate.style.border = "none";
  
    // Reset icons
    for (let i = 0; i < failureIcon.length; i++) {
      failureIcon[i].style.opacity = "0";
    }
    for (let i = 0; i < successIcon.length; i++) {
      successIcon[i].style.opacity = "0";
    }
  }



};

