function renderCards(containerId, category, watches) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear existing content if re-rendered
  const filtered = watches.filter(w => w.category === category);

  filtered.forEach((watch, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const detailId = `${category}-detail-${index}`;

    card.innerHTML = `
      <img src="${watch.image}" alt="${watch.title}">
      <div class="card-content">
        <div class="title">${watch.title}</div>
        <p class="description">${watch.description}</p>
        <a href="#" class="learn-more" data-id="${detailId}">Learn More →</a>
        <div id="${detailId}" class="extra-details" style="display: none; margin-top: 0.5rem; color: #374151;">
          ${watch.details}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach events to "Learn More" links
  container.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const detailBox = document.getElementById(this.dataset.id);
      const isVisible = detailBox.style.display === 'block';
      detailBox.style.display = isVisible ? 'none' : 'block';
      this.textContent = isVisible ? 'Learn More →' : 'Show Less ←';
    });
  });
}

// Fetch data from watches.json
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("watches.json");
    const watches = await response.json();

    renderCards("mensContainer", "men", watches);
    renderCards("womensContainer", "women", watches);
  } catch (error) {
    console.error("Error loading watches.json:", error);
  }
});

