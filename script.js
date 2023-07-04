function saveName() {
    var name = document.getElementById('nameInput').value;
    localStorage.setItem('name', name);
    alert('Il nome è stato salvato.');
  }

  function removeName() {
    localStorage.removeItem('name');
    alert('Il nome è stato rimosso.');
  }

  function checkSavedName() {
    var name = localStorage.getItem('name');
    if (name) {
      document.getElementById('nameInput').value = name;
    }
  }



 
function startCounter() {
    if (typeof(Storage) !== "undefined") {
      var counter = sessionStorage.getItem("counter");
      if (counter) {
        counter = parseInt(counter); 
      } else {
        counter = 0;
      }
      
    
      setInterval(function() {
        counter++;
        sessionStorage.setItem("counter", counter);
         document.getElementById("counter").innerText = counter;
      }, 1000); 
    } else {
      alert("Spiacenti, il tuo browser non supporta il sessionStorage.");
    }
  }
  
  window.onload = startCounter;
  