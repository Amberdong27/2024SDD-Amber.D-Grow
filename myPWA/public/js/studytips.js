
let result = ""; 

fetch('./frontEndData.json') 
  .then(function (response) { 
    return response.json(); 
  }) 
  .then(function (data) { 
    appendData(data); 
  }) 

  .catch(function (err) { 
    console.log('error: ' + err); 
  }); 

  function appendData(data) { 
    data.forEach(({tipID, name, details} = rows) => { 
      result += ` 
       <div id=${tipID} class="card"> 
            <h2 class="card-name">${name}</h2> 
            <p class="card-about">${details}</p>  
        </div> 
       `; 
    }); 
    document.getElementById("advice").innerHTML = result; 
  } 

  function selection() {
    var value = document.getElementById("selector").value;
    var option1 = document.getElementById("1");
    var option2 = document.getElementById("2");
    var option3 = document.getElementById("3");
    if (value == "1") {
      option1.style.visibility = "visible";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
    } else if (value == "2") {
      option1.style.visibility = "hidden";
      option2.style.visibility = "visible";
      option3.style.visibility = "hidden";
    } else if (value == "3") {
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "visible";
    } else {
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
    }
  }