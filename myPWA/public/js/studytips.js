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
    data.forEach(({tipID, name} = rows) => { 
      result += ` 
      <div class=""> 
      <select class="form-select" aria-label="Default select example">
      <option selected> Select a study tip</option>
      <option value = ${tipID} class="card-name">${name}</option>
      </select>
  
       `; 
    }); 
    document.querySelector(".container").innerHTML = result; 
  } 