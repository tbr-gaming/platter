# Tailwind CSS Setup for Shopify Theme

This Shopify theme has been configured with Tailwind CSS v4 for utility-first styling.

## What's Been Set Up

1. **Node.js Project**: Initialized with `package.json`
2. **Tailwind CSS**: Installed and configured
3. **PostCSS**: Configured for processing
4. **Build Scripts**: Added to `package.json`
5. **Layout Integration**: Tailwind CSS is loaded in `layout/theme.liquid`
6. **Development Workflow**: Configured to run both Tailwind and Shopify CLI simultaneously

## File Structure

```
├── src/
│   └── input.css          # Source CSS with Tailwind directives
├── assets/
│   └── tailwind.css       # Generated Tailwind CSS (don't edit directly)
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Node.js dependencies and scripts
```

## Available Scripts

### 🚀 Full Development Environment (Recommended)
```bash
npm run dev
```
This runs both Tailwind CSS watch mode AND Shopify theme development server simultaneously.

### Individual Development Commands
```bash
# Tailwind CSS watch mode only
npm run dev:css

# Shopify theme development server only
npm run dev:shopify

# Build CSS for production
npm run build:css:prod
```

## Development Workflow

### Option 1: Full Development Environment (Recommended)
1. **Start Everything**: Run `npm run dev`
2. **Make Changes**: Edit your Liquid templates with Tailwind classes
3. **Auto-rebuild**: Both Tailwind CSS and Shopify theme will update automatically
4. **Preview**: View changes at the local development URL (usually http://127.0.0.1:9292)

### Option 2: Separate Terminals
If you prefer to run processes separately:

**Terminal 1 - Tailwind CSS:**
```bash
npm run dev:css
```

**Terminal 2 - Shopify Theme:**
```bash
npm run dev:shopify
```

## How to Use Tailwind CSS

### 1. In Liquid Templates
You can now use Tailwind utility classes directly in your Liquid templates:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  <h1 class="text-2xl font-bold mb-2">Hello World</h1>
  <p class="text-sm opacity-90">This is styled with Tailwind CSS!</p>
</div>
```

### 2. Example Section
Check out `sections/hello-world.liquid` for a complete example of how to use Tailwind classes in a Shopify section.

### 3. Responsive Design
Tailwind's responsive prefixes work perfectly:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid layout -->
</div>
```

## Configuration

### Content Paths
The `tailwind.config.js` file is configured to scan these directories for classes:
- `./layout/*.liquid`
- `./templates/**/*.liquid`
- `./sections/**/*.liquid`
- `./snippets/**/*.liquid`
- `./assets/**/*.css`
- `./assets/**/*.js`

### Customization
You can extend Tailwind's theme in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    // ... content paths
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#ff6b6b',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
```

## Troubleshooting

### CSS Not Updating
- Make sure you're running the development environment: `npm run dev`
- Check that your Liquid files are in the content paths in `tailwind.config.js`
- Verify that `tailwind.css` is being loaded in `layout/theme.liquid`
- Check the terminal output for any error messages

### Shopify Theme Not Loading
- Ensure you're logged into Shopify CLI: `shopify auth login`
- Check that you have a store configured: `shopify config list`
- Verify the theme structure matches Shopify requirements

### Classes Not Working
- Ensure the class names are correct (check Tailwind documentation)
- Rebuild the CSS after adding new classes
- Check browser developer tools for any CSS conflicts
- Clear browser cache if needed

### Development Server Issues
- If `npm run dev` fails, try running the processes separately:
  ```bash
  # Terminal 1
  npm run dev:css
  
  # Terminal 2  
  npm run dev:shopify
  ```

## Best Practices

1. **Use Utility Classes**: Prefer Tailwind utilities over custom CSS when possible
2. **Responsive Design**: Use Tailwind's responsive prefixes for mobile-first design
3. **Component Classes**: For repeated patterns, consider using `@apply` in your CSS or creating reusable components
4. **Performance**: The generated CSS only includes classes you actually use
5. **Development**: Always use `npm run dev` for the best development experience

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shopify Theme Development](https://shopify.dev/docs/storefronts/themes)
- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
- [Liquid Template Language](https://shopify.dev/docs/api/liquid) 