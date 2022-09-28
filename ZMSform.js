function SubmitDetails(){
    let cont = document.querySelector("#submit_details");

    let box = document.createElement("div");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");
    let input5 = document.createElement("input");
    let textarea = document.createElement("textarea");
    let submit = document.createElement("button");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    

    h1.innerText = "Connect With Us";
    p.innerText = "Leave details for us to help your business become future ready"
    input1.placeholder = "Name";
    input2.placeholder = "Company Name"; 
    input3.placeholder = "Email"; 
    input4.placeholder = "Phone Number"; 
    input5.placeholder = "Country";
    textarea.placeholder = "Mention Requirements ";
    submit.innerHTML = "Submit";
    p2.innerHTML ="";
    p3.innerHTML="";

    box.setAttribute("id", "box");
    h1.setAttribute("id", "h1");
    p.setAttribute("id", "p");
    input1.setAttribute("id", "input1");
    input2.setAttribute("id", "input2");
    input3.setAttribute("id", "input3");
    input4.setAttribute("id", "input4");
    input5.setAttribute("id", "input5"); 
    textarea.setAttribute("id","textarea")
    submit.setAttribute("id", "submit_button"); 
    p2.setAttribute("id", "p2");
    p3.setAttribute("id", "p3");


    submit.addEventListener("click", function(){
        submitAlert()
    })

    div1.append(input1,input2);
    div2.append(input3);
    div3.append(input4,input5);

    box.append(h1,p,div1,div2,div3,textarea,submit,p2,p3);

    cont.append(box);
}

SubmitDetails();


function submitAlert(){

    if(h1){   
       
        
        document.querySelector("#p2").innerHTML= "Your details have been submitted successfully.We'll reach out to you shortly."; 
    }
    else{
        
        document.querySelector("#p2").innerHTML= required
    }    
   
}


