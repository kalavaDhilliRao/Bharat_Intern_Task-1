document.addEventListener('DOMContentLoaded', () => {
    const contentForm = document.getElementById('contentForm');
    const dataSection = document.getElementById('dataSection');

    contentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contentForm);
        const title = formData.get('title');
        const content = formData.get('content');
        const image = formData.get('image');
        const video = formData.get('video');

        let displayData = `<div class="content-card">
            <h3>${title}</h3>
            <p>${content}</p>`;

        if (image) {
            displayData += `<img src="${URL.createObjectURL(image)}" alt="Uploaded Image" class="uploaded-content">`;
        }

        if (video) {
            displayData += `<video src="${URL.createObjectURL(video)}" controls autoplay class="uploaded-content"></video>`;
        }

        displayData += `</div>`;
        dataSection.innerHTML += displayData;

        // Clear the form
        contentForm.reset();
    });
});
