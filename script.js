window.onload = () => {
    setCurrentSong(2)
    listSongs()
    setCurrentSongStyle(2)
}

function setCurrentSong(i) {
    for (e of document.getElementsByClassName('song-title')) {
        e.innerText = songs[i]['song-title']
    }

    for (e of document.getElementsByClassName('artist-name')) {
        e.innerText = songs[i]['artist-name']
    }

    document.getElementById('progress-duration').innerText = songs[i]['song-duration']
}

function listSongs() {
    for (song of songs) {
        document.getElementById('album-songs').innerHTML += `
        <div class="album-song">
            <div class="row-wrapper">
                <div class="song-icon">
                    <i class="fas fa-music"></i>
                </div>
                <div class="song-info">
                    <div class="song-title" id="playing">
                        ${song['song-title']}
                    </div>
                    <div class="song-artist-album">
                        ${song['artist-name']}
                    </div>
                </div>
            </div>
            <div class="song-duration">
                ${song['song-duration']}
            </div>
        </div>
        `
    }
}

function setCurrentSongStyle(index) {
    document.getElementsByClassName('song-icon')[index].style.color = '#1fb653'
    document.getElementsByClassName('song-title')[index].style.color = '#1fb653'
}