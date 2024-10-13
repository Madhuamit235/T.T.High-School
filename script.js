// প্রতিটি ২ সেকেন্ড পর "WELCOME" এবং "Talimpur Telihati High School" পালাক্রমে আসবে
window.onload = function() {
  const welcome = document.getElementById('welcome');
  const school = document.getElementById('school');

  let showWelcome = true;

  function toggleWords() {
    if (showWelcome) {
      welcome.style.display = 'flex';
      school.style.display = 'none';
      addAnimation(welcome);
    } else {
      welcome.style.display = 'none';
      school.style.display = 'flex';
      addAnimation(school);
    }
    showWelcome = !showWelcome;
  }

  // প্রতিটি শব্দে অ্যানিমেশন যোগ করা
  function addAnimation(word) {
    const letters = word.getElementsByClassName('letter');
    for (let i = 0; i < letters.length; i++) {
      letters[i].style.animationDelay = `${i * 0.1}s`;  // প্রতিটি লেটারে একটু দেরি করে অ্যানিমেশন হবে
    }
    setTimeout(() => {
      word.classList.add('glow-effect');
    }, 1000);  // অ্যানিমেশন শেষ হওয়ার পরে আলো জ্বলে-নিভে যোগ করা হবে
  }

  // প্রথমে "WELCOME" দেখাবে
  addAnimation(welcome);

  // প্রতিটি ৪ সেকেন্ড পর Toggle করবে
  setInterval(toggleWords, 4000);
};




function toggleParagraph() {
    var info = document.getElementById("info");
    var arrow = document.getElementById("arrow");
    
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block"; // Show the paragraph
        arrow.textContent = "▼"; // Change arrow to down
        arrow.classList.add("active"); // Add the 'active' class to change background color
    } else {
        info.style.display = "none"; // Hide the paragraph
        arrow.textContent = "►"; // Change arrow back to right
        arrow.classList.remove("active"); // Remove the 'active' class to revert background color
    }
}




