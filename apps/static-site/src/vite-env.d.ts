/// <reference types="vite/client" />

// Markdown files with ?raw suffix
declare module "*.md?raw" {
  const content: string;
  export default content;
}
