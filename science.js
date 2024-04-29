function changeStyleSheet() {
            var stylesheet = document.getElementById('stylesheet');
            if (stylesheet.href.endsWith('science.css')) {
                stylesheet.href = 'theme1.css';
            } else {
                stylesheet.href = 'science.css';
            }
        } 
// page 3button
        document.addEventListener("DOMContentLoaded", function() {
            var showAuthorBtns = document.querySelectorAll(".showAuthorBtn");
            
            showAuthorBtns.forEach(function(btn) {
                btn.addEventListener("click", function() {
                    var authorContent = this.nextElementSibling;
                    if (authorContent.style.display === "none" || authorContent.style.display === "") {
                        authorContent.style.display = "block";
                    } else {
                        authorContent.style.display = "none";
                    }
                });
            });
        });
// gallery
document.addEventListener("DOMContentLoaded", function() {
    const videoPlaylist = document.querySelector('.videos-gallery');
    // Create 10 videos
    for (let i = 1; i <= 10; i++) {
        const video = document.createElement('div');
        video.classList.add('video-gallery');
        video.innerHTML = `
        <h3 style="color:black;">Video${i}</h3>
            <p>experiment ${i}</p>
        `;
        video.addEventListener('click', function() {
            document.querySelectorAll('.videos-gallery .video-gallery').forEach(v => {
                v.classList.remove('active-gallery');
            });
            this.classList.add('active-gallery');
            document.querySelector('.main-video-gallery video').src = `vid${i}.mp4`;
            document.querySelector('.main-video-gallery .title-gallery').textContent = `Video ${i}`;
        });
        videoPlaylist.appendChild(video);
    }
    document.querySelector('.videos-gallery .video-gallery').click();
});
// button audio
    document.addEventListener("DOMContentLoaded", function() {
    let audioButton = document.querySelector('.audio-button');
    audioButton.addEventListener('click', function(){
    var audio = document.getElementById("audio");
    if (audio.paused) {
    audio.play();
        } else {
            audio.pause();
                }
            });
        });