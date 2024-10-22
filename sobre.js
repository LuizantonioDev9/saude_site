const playButton = document.getElementById('playButton');
const videoPopup = document.getElementById('videoPopup');
const closePopup = document.getElementById('closePopup');

playButton.addEventListener('click', function() {
    videoPopup.style.display = 'flex';
});

closePopup.addEventListener('click', function() {
    videoPopup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == videoPopup) {
        videoPopup.style.display = 'none';
    }
});

function openVideo() {
    document.getElementById('popup-overlay').style.display = 'flex';
    document.getElementById('popup-video').src = 'https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1'; 
}

function closeVideo() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-video').src = ''; 
}


