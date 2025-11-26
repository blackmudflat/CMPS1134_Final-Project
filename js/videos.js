/**
 * Videos Gallery Script
 * Displays videos from Google Drive using embed links
 */

// Video list with Google Drive links
const videosList = [
  {
    id: 'adrian',
    title: 'Networking and the Internet',
    author: 'Adrian Morris',
    description: 'An comprehensive exploration of networking concepts and how the internet works.',
    duration: '12:45',
    embedUrl: 'https://drive.google.com/file/d/1gICk6ysiWV49_4Pxdjd2hN6Pf8kEpMgw/preview'
  },
  {
    id: 'lisandro',
    title: 'Algorithms',
    author: 'Lisandro Figueroa',
    description: 'A dive into fundamentals of  algorithms and their implementations.',
    duration: '15:30',
    embedUrl: 'https://drive.google.com/file/d/1p5zZDJ6BBdudXngKiLgOLqXLQgUzLu5z/preview'
  },
  {
    id: 'derick',
    title: 'Operating Systems',
    author: 'Derick Cal',
    description: 'Understanding the core concepts of operating systems and their architecture.',
    duration: '18:20',
    embedUrl: 'https://drive.google.com/file/d/1cBuPkNbBgcIdpjL3yC0u4bZDAzDKKw1K/preview'
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    author: 'Team Member',
    description: 'Introduction to various programming languages and their characteristics.',
    duration: '14:15',
    embedUrl: 'https://drive.google.com/file/d/1rfHv4BkCTa29PO_6WO5NrrLUkWYx7By9/preview'
  }
];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('📹 Videos gallery loaded');
  loadVideos();
  setupEventListeners();
});

/**
 * Load videos into the gallery
 */
function loadVideos() {
  const videoContainer = document.getElementById('video-container');
  const videoCountElement = document.getElementById('video-count');
  
  if (!videoContainer) {
    console.error('❌ Video container not found');
    return;
  }

  // Clear loading spinner
  videoContainer.innerHTML = '';

  // Create video items
  videosList.forEach((video, index) => {
    const videoItem = createVideoElement(video, index);
    videoContainer.appendChild(videoItem);
  });

  // Update video count
  if (videoCountElement) {
    videoCountElement.textContent = videosList.length;
  }

  console.log(`✅ Loaded ${videosList.length} videos`);
}

/**
 * Create a video element
 */
function createVideoElement(video, index) {
  const videoItem = document.createElement('div');
  videoItem.className = 'video-item';
  videoItem.style.animationDelay = `${index * 0.1}s`;

  videoItem.innerHTML = `
    <div class="video-player-wrapper">
      <iframe
        src="${video.embedUrl}"
        width="100%"
        height="100%"
        allow="autoplay"
        allowfullscreen
        loading="lazy"
        style="border: none; border-radius: 8px;"
      ></iframe>
    </div>
    <div class="video-info">
      <h3 class="video-title">${video.title}</h3>
      <p class="video-author" style="font-size: 0.9rem; color: #6366f1; margin-bottom: 8px;">By ${video.author}</p>
      <p class="video-description">${video.description}</p>
      <div class="video-meta">
        <span class="video-duration">${video.duration}</span>
        <a href="${video.embedUrl.replace('/preview', '/view?usp=sharing')}" target="_blank" class="watch-button">Watch on Drive</a>
      </div>
    </div>
  `;

  return videoItem;
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  console.log('✅ Event listeners setup complete');
}

/**
 * Search videos by title or author
 */
function searchVideos(query) {
  const filtered = videosList.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.author.toLowerCase().includes(query.toLowerCase())
  );

  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = '';

  filtered.forEach((video, index) => {
    const videoItem = createVideoElement(video, index);
    videoContainer.appendChild(videoItem);
  });

  console.log(`🔍 Search results: ${filtered.length} videos found`);
}
