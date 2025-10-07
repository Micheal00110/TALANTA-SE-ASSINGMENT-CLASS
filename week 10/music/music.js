class Song {
    constructor(title, artist, file) {
        this.title = title;
        this.artist = artist;
        this.file = file;
    }
}

class MusicPlayer {
    constructor() {
        // Convert absolute paths to relative paths
        this.songs = [
            new Song("Knick Knack", "9lokkNine", "./music/Knick Knack.mp3"),
            new Song("No Relay", "9lokkNine x Soldier Kidd", "./music/No Relay.mp3"),
            new Song("Why You LYING", "9lokknine", "./music/Why You LYING.mp3")  // Added new song
        ];
        this.playlist = [];
        this.currentSongIndex = 0;
        this.isLooping = false;
        this.isShuffling = false;
        this.audioPlayer = document.getElementById('audio-player');
        
        // Add error handling for audio element
        if (!this.audioPlayer) {
            console.error('Audio player element not found!');
            return;
        }

        this.audioPlayer.addEventListener('ended', () => this.handleSongEnded());
        this.audioPlayer.addEventListener('error', (e) => this.handleError(e));
        
        this.loadSongs();
        this.loadPlaylist();
        this.bindControlEvents();
    }

    loadSongs() {
        const songsList = document.getElementById('songs');
        songsList.innerHTML = '';
        this.songs.forEach((song, index) => {
            const songElement = document.createElement('li');
            songElement.textContent = `${song.title} - ${song.artist}`;
            songElement.onclick = () => this.playSong(index);
            songElement.classList.add('song-item');
            if (index === this.currentSongIndex) {
                songElement.classList.add('playing');
            }
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

        try {
            // Direct audio source setting
            this.audioPlayer.src = song.file;
            
            const playPromise = this.audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        document.getElementById('song-title').textContent = `${song.title} - ${song.artist}`;
                        document.getElementById('play').textContent = 'Pause';
                        this.showNotification(song.title, song.artist);
                    })
                    .catch(error => {
                        console.error('Playback error:', error);
                        alert('Error playing song. Please check if the file exists and has correct permissions.');
                    });
            }
        } catch (error) {
            console.error('Error setting up audio:', error);
            alert('Error setting up audio player.');
        }

        this.loadSongs();
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

    handleError(error) {
        console.error('Audio error:', error);
        const errorMessages = {
            MEDIA_ERR_ABORTED: 'Playback aborted by user',
            MEDIA_ERR_NETWORK: 'Network error while loading',
            MEDIA_ERR_DECODE: 'Audio file is corrupted',
            MEDIA_ERR_SRC_NOT_SUPPORTED: 'Audio format not supported'
        };
        
        const errorMessage = errorMessages[error.target.error.code] || 'Unknown error occurred';
        alert(`Audio Error: ${errorMessage}`);
    }

    bindControlEvents() {
        const playButton = document.getElementById('play');
        playButton.addEventListener('click', () => {
            if (this.audioPlayer.paused) {
                this.audioPlayer.play()
                    .then(() => {
                        playButton.textContent = 'Pause';
                    })
                    .catch(error => {
                        console.error('Play error:', error);
                    });
            } else {
                this.audioPlayer.pause();
                playButton.textContent = 'Play';
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

// Initialize player when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    
    const player = new MusicPlayer();
    
    // Don't autoplay initially - wait for user interaction
    document.getElementById('play').addEventListener('click', () => {
        if (player.audioPlayer.paused) {
            player.playSong(0);
        }
    });
});