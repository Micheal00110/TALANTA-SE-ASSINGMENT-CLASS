document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('image-input');
    const previewBtn = document.getElementById('preview-btn');
    
    let selectedImages = [];

    imageInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                selectedImages.push(e.target.result);
            };
            reader.readAsDataURL(file);
        });
    });

    previewBtn.addEventListener('click', function() {
        if (selectedImages.length === 0) {
            alert('Please select images first!');
            return;
        }
        
        // Store images in localStorage
        localStorage.setItem('previewImages', JSON.stringify(selectedImages));
        
        // Navigate to preview page
        window.location.href = 'preview.html';
    });
});