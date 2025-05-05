function initializeGallery() {
    fetch('gallery.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('gallery-container');

        for (const folder in data) {
          const heading = document.createElement('h2');
          heading.classList.add('gallery-header');
          heading.textContent = folder;
          container.appendChild(heading);

          data[folder].forEach(file => {
            console.log(`Lade Bild: ${file}`);
            const img = document.createElement('img');
            img.src = `gallery/${folder}/${file}`;
            img.className = 'img-thumbnail';
            img.loading = 'lazy';
            img.alt = file.replace(/_/g, ' ').replace(/\.\w+$/, '');
            container.appendChild(img);
          });
        }
      })
      .catch(error => {
        console.error('Fehler beim Laden der Galerie:', error);
      });
 }

 document.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG" && event.target.classList.contains("img-thumbnail")) {
      console.log("Bild angeklickt:", event.target.src);
        const modalImage = document.getElementById("modalImage");
      modalImage.src = event.target.src; 
      const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
      imageModal.show(); 
    }
  });