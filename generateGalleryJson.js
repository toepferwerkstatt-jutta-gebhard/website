const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'gallery';
const OUTPUT_FILE = 'gallery.json';
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function generateGalleryJson() {
  const result = {};

  const folders = fs.readdirSync(ROOT_DIR).filter(f =>
    fs.statSync(path.join(ROOT_DIR, f)).isDirectory()
  );

  folders.forEach(folder => {
    const folderPath = path.join(ROOT_DIR, folder);
    const files = fs.readdirSync(folderPath).filter(file =>
      SUPPORTED_EXTENSIONS.includes(path.extname(file).toLowerCase())
    );
    result[folder] = files;
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`✅ JSON-Galerie erzeugt: ${OUTPUT_FILE}`);
}

generateGalleryJson();
