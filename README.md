## next.js SSR

# Transpiler
- Disabled Plugin Object to JSON.parse: the JSON.parse approach is much faster compared to the JavaScript object literal, especially for cold loads.
  There's a Next.js compile error with parse.
- Flow strip types: Uses the Babel plugin

# Static Content
- to serve static files from the root directory use the folder called public and reference those files from the root, e.g: /logo.jpg.

# CSS
- to support importing .css files which configure sensible defaults for server rendered applications use @zeit/next-css

# Persistent Layouts
- Create a getLayout function and Layout Component
- Pages should add a getLayout function property that wraps the children in the necessary parent Component Layout.

# Special Next Components
- Next.js uses the <App> component to initialize pages. You can override it and control the page initialization. 
  To override, create the ./pages/_app.js file and override the App class.
- A custom <Document> is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js 
  pages skip the definition of the surrounding document's markup. To use a custom <Document>, you must create a file at 
  ./pages/_document.js and extend the Document class.
- 404 or 500 errors are handled both client and server side by a default component error.js. If you wish to override it, 
  define a _error.js in the pages folder

# Tests
- For CSS module imports to work with Jest install dependency identity-obj-proxy and add the moduleNameMapper to jest.config. 