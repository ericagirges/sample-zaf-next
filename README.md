This is an app scaffold integrating Next.js with the Zendesk App Framework.

## Getting Started 

1. Clone or fork this repo
2. Change (`cd`) into the `app_local` directory
3. Run `yarn install` or `npm install`

### Running Zendesk App Tools locally

To serve the app to your Zendesk instance with `?zat=true`, run

```
yarn run watch
zat server -p dist
```

### Running Next.js app locally

Run the development server for Next.js:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
