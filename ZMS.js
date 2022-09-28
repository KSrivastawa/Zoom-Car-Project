// redirect to form area

document.querySelector("#Customer_demo").addEventListener("click",locationToInput1);


function locationToInput1(){

    window.location.href="#submit_details";

}

document.querySelector("#btn").addEventListener("click",locationToInput2);


function locationToInput2(){

    window.location.href="#submit_details";

}


document.querySelector("#more_details").addEventListener("click",locateToMoreDetails);


function locateToMoreDetails(){

    window.location.href="https://zoomcar.s3.ap-southeast-1.amazonaws.com/ZS-Zoomcar-Mobility-Services-ZMS-Subscription02";

}

document.querySelector("#more_details2").addEventListener("click",locateToMoreDetails2);


function locateToMoreDetails2(){

    window.location.href="https://zoomcar.s3.ap-southeast-1.amazonaws.com/ZS-Zoomcar-Mobility-Services-ZMS-Subscription01";

}


function changeData(idName,element,bkcolor,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "white";
      tablinks[i].style.color = "black";
    }
    document.getElementById(idName).style.display = "block";
    element.style.backgroundColor = bkcolor;
    element.style.color = color;
  
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("Default_veichle_solutions").click();


 // causes div -- functionality--------

 function causes(){

  let bigBox = document.querySelector('#causes');

  //===================1=======================
  let div1 = document.createElement('div');
  let img1 = document.createElement('img');
  let h31 = document.createElement('h3');
  let p1 = document.createElement('p');

  img1.src = "https://www.zoomcar.com/images/icons-timer-new.png";
  h31.innerText = "Quick Go-To Market";
  p1.innerText = "Quick and easy onboarding with a fast turnaround time of one week";

  img1.setAttribute("class","image");
  h31.setAttribute("class","title");
  p1.setAttribute("class","summary");

  //=================2=========================

  let div2 = document.createElement('div');
  let img2 = document.createElement('img');
  let h32 = document.createElement('h3');
  let p2 = document.createElement('p');

  img2.src = "https://www.zoomcar.com/images/icons-car-new.png";
  h32.innerText = "India’s largest B2C Mobility Platform";
  p2.innerText = "Fleet management experience of managing 20,000+ assets";

  img2.setAttribute("class","image");
  h32.setAttribute("class","title");
  p2.setAttribute("class","summary");

  //================3==========================
  let div3 = document.createElement('div');
  let img3 = document.createElement('img');
  let h33 = document.createElement('h3');
  let p3 = document.createElement('p');

  img3.src = "https://www.zoomcar.com/images/icons-remote-new.png";
  h33.innerText = "Works Across Vehicle Types";
  p3.innerText = "Works seamlessly across - 2W, 3W, Cars, Trucks & Electric Vehicles alike";

  img3.setAttribute("class","image");
  h33.setAttribute("class","title");
  p3.setAttribute("class","summary");

  //=================4=========================
  let div4 = document.createElement('div');
  let img4 = document.createElement('img');
  let h34 = document.createElement('h3');
  let p4 = document.createElement('p');

  img4.src = "https://www.zoomcar.com/images/icons-table-new.png";
  h34.innerText = "Advanced Data Science Capabilities";
  p4.innerText = "Self-learning algorithms powered by Artificial Intelligence & Machine Learning to predict driver behaviour";

  img4.setAttribute("class","image");
  h34.setAttribute("class","title");
  p4.setAttribute("class","summary");
  //==================5========================
  let div5 = document.createElement('div');
  let img5 = document.createElement('img');
  let h35 = document.createElement('h3');
  let p5 = document.createElement('p');

  img5.src = "https://www.zoomcar.com/images/icons-license-new.png";
  h35.innerText = "Commitment to Customer Satisfaction";
  p5.innerText = "24x7 dedicated assistance and support system";

  img5.setAttribute("class","image");
  h35.setAttribute("class","title");
  p5.setAttribute("class","summary");
  //===================6=======================
  let div6 = document.createElement('div');
  let img6 = document.createElement('img');
  let h36 = document.createElement('h3');
  let p6 = document.createElement('p');

  img6.src = "https://www.zoomcar.com/images/icons-delivery-green-new.png";
  h36.innerText = "Pioneer in Shared subscription";
  p6.innerText = "Innovative techniques to enable 2-sided marketplaces for better utilisation & revenue";

  img6.setAttribute("class","image");
  h36.setAttribute("class","title");
  p6.setAttribute("class","summary");
  //====================7======================
  let div7 = document.createElement('div');
  let img7 = document.createElement('img');
  let h37 = document.createElement('h3');
  let p7 = document.createElement('p');

  img7.src = "https://www.zoomcar.com/images/icons-setting-green-new.png";
  h37.innerText = "Proven Next Gen Technology";
  p7.innerText = "Best in class stable and scalable tech solutions";

  img7.setAttribute("class","image");
  h37.setAttribute("class","title");
  p7.setAttribute("class","summary");
  //====================8======================
  let div8 = document.createElement('div');
  let img8 = document.createElement('img');
  let h38 = document.createElement('h3');
  let p8 = document.createElement('p');

  img8.src = "https://www.zoomcar.com/images/icons-distance-new.png";
  h38.innerText = "Futuristic Products";
  p8.innerText = "Always in sync with the evolving business landscape";

  img8.setAttribute("class","image");
  h38.setAttribute("class","title");
  p8.setAttribute("class","summary");
  //====================9======================
  let div9 = document.createElement('div');
  let img9 = document.createElement('img');
  let h39 = document.createElement('h3');
  let p9 = document.createElement('p');

  img9.src = "https://www.zoomcar.com/images/icons-office-new.png";
  h39.innerText = "Powering Multiple Sectors";
  p9.innerText = "Partners range from Government bodies to Global companies across varied geographies";

  img9.setAttribute("class","image");
  h39.setAttribute("class","title");
  p9.setAttribute("class","summary");

  //================append into divs==========================

  div1.append(img1,h31,p1);
  div2.append(img2,h32,p2);
  div3.append(img3,h33,p3);
  div4.append(img4,h34,p4);
  div5.append(img5,h35,p5);
  div6.append(img6,h36,p6);
  div7.append(img7,h37,p7);
  div8.append(img8,h38,p8);
  div9.append(img9,h39,p9);

  //================append final div==========================

  bigBox.append(div1,div2,div3,div4,div5,div6,div7,div8,div9);

 }

 causes();


  //================ trackRecords==========================
 //================*****************=========================

 function track(){

  let bigBox = document.querySelector('#trackRecords');

  //===================1=======================
  let div1 = document.createElement('div');
  let img1 = document.createElement('img');
  let h31 = document.createElement('h3');


  img1.src = "https://www.zoomcar.com/images/icons-fuel-fuel-type.png";
  h31.innerText = "30% Fuel Costs Savings";
  

  img1.setAttribute("class","image2");
  h31.setAttribute("class","title2");


  //=================2=========================

  let div2 = document.createElement('div');
  let img2 = document.createElement('img');
  let h32 = document.createElement('h3');


  img2.src = "https://www.zoomcar.com/images/icons-swap.png";
  h32.innerText = "20% Reduction in Fleet Downtime";


  img2.setAttribute("class","image2");
  h32.setAttribute("class","title2");


  //================3==========================
  let div3 = document.createElement('div');
  let img3 = document.createElement('img');
  let h33 = document.createElement('h3');
 

  img3.src = "https://www.zoomcar.com/images/icons-car-pick-up.png";
  h33.innerText = "50% Less Accidents & Better Safety";
  

  img3.setAttribute("class","image2");
  h33.setAttribute("class","title2");


  //=================4=========================
  let div4 = document.createElement('div');
  let img4 = document.createElement('img');
  let h34 = document.createElement('h3');


  img4.src = "https://www.zoomcar.com/images/icons-deposit.png";
  h34.innerText = "25% Maintenance Cost Reduction";


  img4.setAttribute("class","image2");
  h34.setAttribute("class","title2");

  //==================5========================
  let div5 = document.createElement('div');
  let img5 = document.createElement('img');
  let h35 = document.createElement('h3');

  img5.src = "https://www.zoomcar.com/images/icons-ruppee.png";
  h35.innerText = "15% Revenue Uplift";


  img5.setAttribute("class","image2");
  h35.setAttribute("class","title2");

  //===================6=======================
  let div6 = document.createElement('div');
  let img6 = document.createElement('img');
  let h36 = document.createElement('h3');


  img6.src = "https://www.zoomcar.com/images/icons-arrows-arrow-right-top.png";
  h36.innerText = "Increase in sales funnel conversion and utilisation";


  img6.setAttribute("class","image2");
  h36.setAttribute("class","title2");

  
  //================append into divs==========================

  div1.append(img1,h31);
  div2.append(img2,h32);
  div3.append(img3,h33);
  div4.append(img4,h34);
  div5.append(img5,h35);
  div6.append(img6,h36);


  //================append final div==========================

  bigBox.append(div1,div2,div3,div4,div5,div6);

 }

 track();


