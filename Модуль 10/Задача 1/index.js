const thumbnails = document.querySelectorAll('.thumbnail');
const fullsizeImage = document.getElementById('fullsizeImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const imageUrl = this.src;
        
        fullsizeImage.src = imageUrl;
    });
});

