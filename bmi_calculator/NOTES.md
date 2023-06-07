# Notes from building the BMI calculator

## What I learned?

- How to import fonts from a font folder using `@font-face` to define a custom font

```css
@font-face {
    font-family: "Custom Font":
    src: local("CustomFontName"),
    url("./fonts/CustomFontNAme.woff")
}
```

- How to import svg in react vite app using vite-plugin-svgr

1. Install the vite svgr plugin

```
yarn add vite-plugin-svgr
```

2. Configure it in the vite configuration file

```javascript
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
});
```
