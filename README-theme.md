# aminamirtrends-theme

This folder contains a minimal Shopify theme scaffold named `aminamirtrends-theme` for development and testing.

Structure:
- layout/theme.liquid
- templates/index.liquid
- templates/product.liquid
- sections/header.liquid
- sections/footer.liquid
- snippets/product-card.liquid
- assets/styles.css
- config/settings_schema.json
- locales/en.default.json

Notes:
- This is a minimal, buildless theme intended as a starting point. If you plan to use the Shopify GitHub integration, prefer keeping theme code in its own repository or in a dedicated `theme/` subfolder and ensure the connected branch has the theme folder structure.
- To preview locally, use Shopify CLI (`shopify theme serve`) and authenticate with your store.
