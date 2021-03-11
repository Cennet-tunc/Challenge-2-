 setInterval(()=>{
        const time = document.getElementById("time");
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
       
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        if(minutes < 10){
          minutes = "0" + minutes;
        }
        if(hours < 10){
          hours = "0" + hours;
        }
        document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
      });


function dayandnight(){
  var current = new Date();
  var day_night = current.getHours();
    if (day_night >= 6 && day_night<12){
      // Ochtend
      var bodyColor = document.getElementsByTagName("BODY")[0];
      bodyColor.style.backgroundImage = 'url("Afbeeldingen/ochtend.jpg")';
    }
    else if (day_night >= 12 && day_night<18){
      //Middag
      var bodyColor = document.getElementsByTagName("BODY")[0];
       bodyColor.style.backgroundImage = 'url("Afbeeldingen/middag.jpg")';
    }
     else if (day_night >= 18 && day_night<24){
      //Avond
      var bodyColor = document.getElementsByTagName("BODY")[0];
       bodyColor.style.backgroundImage = 'url("Afbeeldingen/avond.jpg")';
    }
    else if (day_night >= 0 && day_night<6){
      //Nacht
      var bodyColor = document.getElementsByTagName("BODY")[0];
       bodyColor.style.backgroundImage = 'url("Afbeeldingen/nacht.jpg")';
    }
   }

   dayandnight();

   