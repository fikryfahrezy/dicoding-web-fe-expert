/* eslint-disable */

const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const imagePath = path.join(__dirname, 'src', 'public', 'images', 'heros');
  const files = await fs.readdir(imagePath);

  await Promise.all(
    files.map((image) => {
      const s = sharp(path.join(imagePath, image))
        .resize(480)
        .toFile(
          path.join(
            imagePath,
            `${image.split('.').slice(0, -1).join('.')}-small${path.extname(image)}`,
          ),
        );

      return s;
    }),
  );
})();
