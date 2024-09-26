const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'SERIES SPOTLIGHT';

const headerSubtitle = document.createElement('h2');
headerSubtitle.textContent = 'Uncover the Stories that captivates your Imagination';

const headerButton = document.createElement('button');
headerButton.textContent = 'All Shows';

headerButton.addEventListener('click', function handleClick(event) {
  window.location.href = '/';
});

headerContainer.appendChild(headerTitle);
headerContainer.appendChild(headerSubtitle);
headerContainer.appendChild(headerButton);
header.appendChild(headerContainer);
