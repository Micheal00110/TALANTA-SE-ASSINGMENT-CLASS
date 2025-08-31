class Song {
    constructor(title, artist, file) {
        this.title = title;
        this.artist = artist;
        this.file = file;
    }
}

class MusicPlayer {
    constructor() {
        this.songs = [
            new Song("Song 1", "Artist 1", "song1.mp3"),
            new Song("Song 2", "Artist 2", "song2.mp3"),
            new Song("Song 3", "Artist 3", "song3.mp3")
        ];
        this.playlist = [];
        this.currentSongIndex = 0;
        this.isLooping = false;
        this.isShuffling = false;
        this.audioPlayer = document.getElementById('audio-player');
        this.audioPlayer.addEventListener('ended', () => this.handleSongEnded());
        this.loadSongs();
        this.loadPlaylist();
        this.bindControlEvents();
    }

    loadSongs() {
        const songsList = document.getElementById('songs');
        songsList.innerHTML = '';
        this.songs.forEach((song, index) => {
            const songElement = document.createElement('li');
            songElement.textContent = `${song.title} by ${song.artist}`;
            songElement.onclick = () => this.playSong(index);
            songsList.appendChild(songElement);
        });
    }

    loadPlaylist() {
        const playlistList = document.getElementById('playlist-songs');
        playlistList.innerHTML = '';
        this.playlist.forEach((song, index) => {
            const songElement = document.createElement('li');
            songElement.textContent = `${song.title} by ${song.artist}`;
            songElement.onclick = () => this.playSong(this.songs.indexOf(song));
            playlistList.appendChild(songElement);
        });
    }

    playSong(index) {
        if (index < 0 || index >= this.songs.length) return;
        this.currentSongIndex = index;
        const song = this.songs[index];
        this.audioPlayer.src = song.file;
        this.audioPlayer.play();
        document.getElementById('song-title').textContent = `${song.title} by ${song.artist}`;
        this.showNotification(song.title, song.artist);
    }

    handleSongEnded() {
        if (this.isShuffling) {
            this.currentSongIndex = Math.floor(Math.random() * this.songs.length);
        } else {
            this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        }
        if (this.currentSongIndex === 0 && !this.isLooping) {
            this.audioPlayer.pause();
            document.getElementById('song-title').textContent = 'No song playing';
        } else {
            this.playSong(this.currentSongIndex);
        }
    }

    showNotification(title, artist) {
        if (Notification.permission === "granted") {
            new Notification(`${title} by ${artist}`, { body: "Now playing" });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(`${title} by ${artist}`, { body: "Now playing" });
                }
            });
        }
    }

    bindControlEvents() {
        document.getElementById('play').addEventListener('click', () => {
            if (this.audioPlayer.paused) {
                this.audioPlayer.play();
            } else {
                this.audioPlayer.pause();
            }
        });

        document.getElementById('next').addEventListener('click', () => {
            this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
            this.playSong(this.currentSongIndex);
        });

        document.getElementById('prev').addEventListener('click', () => {
            this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
            this.playSong(this.currentSongIndex);
        });

        document.getElementById('shuffle').addEventListener('click', () => {
            this.isShuffling = !this.isShuffling;
            document.getElementById('shuffle').textContent = this.isShuffling ? 'Shuffle: On' : 'Shuffle: Off';
        });

        document.getElementById('loop').addEventListener('click', () => {
            this.isLooping = !this.isLooping;
            document.getElementById('loop').textContent = this.isLooping ? 'Loop: On' : 'Loop: Off';
        });
    }
}

window.onload = () => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    new MusicPlayer();
};