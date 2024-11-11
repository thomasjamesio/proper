export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main() {
    console.log('Content script loaded');
    
    const searchButton = document.querySelector('#search-icon-legacy');
    const searchInput = document.querySelector('input#search') as HTMLInputElement;

    console.log('Search button:', searchButton);
    console.log('Search input:', searchInput);

    if (searchButton && searchInput) {
      console.log('Adding click event listener');
      searchButton.addEventListener('click', (e) => {
        console.log('Search button clicked');
        e.preventDefault();
        e.stopPropagation();
        
        const searchQuery = searchInput.value;
        console.log('Search query:', searchQuery);
        
        const googleSearchUrl = `https://www.google.com/search?q=site:youtube.com+${encodeURIComponent(searchQuery)}&tbm=vid`;
        console.log('Redirecting to:', googleSearchUrl);
        
        window.location.href = googleSearchUrl;
      });
    } else {
      console.log('Search elements not found');
    }

    // Add style to hide search suggestions
    const style = document.createElement('style');
    style.textContent = `
      .gstl_50.sbdd_a,
      .sbdd_b {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  },
});
