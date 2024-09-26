const renderSeries = async () => {
    try {
        const response = await fetch('/series');
        const data = await response.json();
        const mainContent = document.getElementById('main-content');

        if (data) {
            data.map(show => {
                const card = document.createElement('div');
                card.classList.add('card');

                const topContainer = document.createElement('div');
                topContainer.classList.add('top-container');
                topContainer.style.backgroundImage = `url(${show.image})`;

                const bottomContainer = document.createElement('div');
                bottomContainer.classList.add('bottom-container');
                
                const name = document.createElement('h3');
                name.textContent = show.name;
                bottomContainer.appendChild(name);
                
                const synopsis = document.createElement('p');
                synopsis.textContent = show.synopsis.slice(0, 100) + '...';
                bottomContainer.appendChild(synopsis);
                
                const link = document.createElement('a');
                link.textContent = 'Read More >';
                link.setAttribute('role', 'button');
                link.href = `/series/${show.id}`;
                
                bottomContainer.appendChild(link);
                card.appendChild(topContainer);
                card.appendChild(bottomContainer);
                mainContent.appendChild(card);
            });
        } else {
            const message = document.createElement('h2');
            message.textContent = 'No Series Available 😞';
            mainContent.appendChild(message);
        }
    } catch (error) {
        console.error('Error fetching series:', error);
    }
};

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderSeries();  
  }
  
