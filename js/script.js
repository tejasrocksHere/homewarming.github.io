document.addEventListener('DOMContentLoaded', function () {
    // Initialize Sakura falling effect
    var sakuraElement = document.querySelector('.sakura-falling');
    if (sakuraElement && typeof sakuraElement.sakura === 'function') {
      sakuraElement.sakura();
    }
  
    // Set the date the event was completed
    var eventDate = new Date("Jan 6, 2024 00:00:00").getTime();
  
    // Update the elapsed time every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the event date
      var distance = now - eventDate;
  
      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Output the result in an element with id="time"
      var timeElement = document.getElementById("time");
      if (timeElement) {
        timeElement.innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
      }
  
    }, 1000);
  
    // Trigger the play event for the audio element on user interaction
    document.addEventListener('mousedown', function() {
      var audio = new Audio('./song.mp3');
      
      // Use the promise to catch errors or handle other events
      var playPromise = audio.play();
      if (playPromise !== undefined) {
          playPromise.then(_ => {
              // Playback started successfully
          }).catch(error => {
              // Playback failed
              console.error('Playback failed: ', error);
          });
      }
    });

    // Styling for console messages (if needed)
    var styles = [
      'background: linear-gradient(#D33106, #571402)',
      'border: 4px solid #3E0E02',
      'color: white',
      'display: block',
      'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
      'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
      'line-height: 40px',
      'text-align: center',
      'font-weight: bold',
      'font-size: 32px'
    ].join(';');
  
    var styles1 = [
      'color: #FF6C37',
      'display: block',
      'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
      'line-height: 40px',
      'font-weight: bold',
      'font-size: 32px'
    ].join(';');
  
    var styles2 = [
      'color: teal',
      'display: block',
      'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
      'line-height: 40px',
      'font-weight: bold',
      'font-size: 32px'
    ].join(';');
});
