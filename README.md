# Text-to-Slug

A simple library to convert text into URL-friendly slugs.

For example:

- **Input:** `My Product 2025`
- **Output:** `my-product-2025`

## **Features**

- Removes accents and special characters.
- Converts text to lowercase.
- Replaces spaces with hyphens.

## **Installation**

### For Node.js:

1. **Clone the repository** or copy the `text-to-slug.js` file:
 
```bash
git clone https://github.com/your-username/text-to-slug.git
```
2. **Import and use** it in your project:

```javascript
const textToSlug = require("./text-to-slug");

const slug = textToSlug("My Product 2025");
console.log(slug); // Output: my-product-2025
```

## For browser usage:

1. For browser usage:

```html
<script src="text-to-slug.js"></script>
```

2. Use it in JavaScript:

```javascript
const slug = textToSlug("My Product 2025");
console.log(slug); // Output: my-product-2025
```

## How to Contribute

1. Fork the project.

2. Create a new branch:

```bash
git checkout -b feature-new-functionality
```

3. Push your changes and open a pull request.

## License

This project is licensed under the MIT License.
