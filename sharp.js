const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const imagePath = path.join(__dirname, 'dist', 'images', 'heros');
  const files = await fs.readdir(imagePath);

  await Promise.all(
    files
      .map((image) => {
        const l = sharp(path.join(imagePath, image)).resize(800);
        const s = sharp(path.join(imagePath, image)).resize(480);

        return [
          l.toFile(path.join(imagePath, `${image.split('.').slice(0, -1).join('.')}-large.jpg`)),
          s.toFile(path.join(imagePath, `${image.split('.').slice(0, -1).join('.')}-small.jpg`)),
          l
            .webp({ quality: 50 })
            .toFile(path.join(imagePath, `${image.split('.').slice(0, -1).join('.')}-large.webp`)),
          s
            .webp({ quality: 50 })
            .toFile(path.join(imagePath, `${image.split('.').slice(0, -1).join('.')}-small.webp`)),
        ];
      })
      .flat(),
  );

  await Promise.all(files.map((file) => fs.rm(path.join(imagePath, file))));

  const test = await fs.readdir(imagePath);
  console.log(test);
})();
