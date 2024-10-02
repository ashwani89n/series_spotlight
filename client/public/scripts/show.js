const renderShow = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/series');
    const data = await response.json();

    const seriesContent = document.getElementById('series-content');
    let show;

    if (data) {
        show = data.find(show => show.id === requestedID);
    }

    if (show) {
        const imageElement = document.getElementById('image');
        if (imageElement) {
            imageElement.src = show.image;
        }

        document.getElementById('name').textContent = show.name;
        document.getElementById('releaseyear').textContent = show.releaseyear;
        document.getElementById('genre').textContent = show.genre;
        document.getElementById('synopsis').textContent = show.synopsis;
        document.getElementById('streamingplatform').textContent = show.streamingplatform;
        document.getElementById('imdbrating').textContent =  show.imdbrating;
        document.title = `Series Spotlight - ${show.name}`;
        
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Shows Available 😞';
        seriesContent.appendChild(message); // Fixed reference to seriesContent
    }
};

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderShow();
});
