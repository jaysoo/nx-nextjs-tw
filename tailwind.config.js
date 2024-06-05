const { join } = require('path');
const prettierPlugin = require("prettier-plugin-tailwindcss");

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    extend: {},
  },
  "plugins": [prettierPlugin],
};
