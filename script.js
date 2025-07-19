function generateVideo() {
  const text = document.getElementById("videoText").value.trim();
  if (!text) {
    alert("אנא הקלד טקסט");
    return;
  }

  document.getElementById("overlayText").innerText = text;
  document.getElementById("videoContainer").style.display = "block";

  const music = document.getElementById("backgroundMusic");
  music.volume = 0.5;
  music.play();
}

function downloadVideo() {
  alert("הורדה מדומה – נדרש שילוב FFmpeg או API ליצירת הווידאו בפועל");
}
