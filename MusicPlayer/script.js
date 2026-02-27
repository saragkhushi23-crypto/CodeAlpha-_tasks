const songs = [
  {
    title: "Song One",
    artist: "Artist A",
    src: "songs/song1.mp3"
  },
  {
    title: "Song Two",
    artist: "Artist B",
    src: "songs/song2.mp3"
  }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");

function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
  audio.src = song.src;
}

loadSong(songs[index]);

playBtn.addEventListener("click", () => {
  audio.play();
});
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
});
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(songs[index]);
  audio.play();
  playBtn.innerText = "⏸";
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(songs[index]);
  audio.play();
  playBtn.innerText = "⏸";
});
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  current.innerText = formatTime(audio.currentTime);
  duration.innerText = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

const volume = document.getElementById("volume");
audio.volume = 0.5;
volume.value = 0.5;

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
audio.addEventListener("ended", () => {
  index = (index + 1) % songs.length;
  loadSong(songs[index]);
  audio.play();
});
