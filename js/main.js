// Video sequence management
function initializeVideo() {
    const video = document.getElementById('bg-video');
    const source = document.getElementById('intro-source');
    
    if (video && source) {
        // Event listener for when intro video ends
        video.addEventListener('ended', () => {
            // Switch to loop video
            source.src = 'Portfolio Loop Vid.mp4';
            video.loop = true;
            video.load();
            video.play();
        });
        
        // Start playing intro video
        video.play();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeVideo();
});
