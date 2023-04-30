**AI Article Summarizer**
==============

## Quick Overview

### **Problem**
The problem was to create a new AI article summarizer that quickly and accurately summarizes lengthy articles, helping users save time and effort.

### **Solution**
To solve this problem, I used React and Next.js to create the application's front end, then TailwindCSS for styling and RapidAPI, a third party platform to call OpenAI API.

### **Demo**
Github Repo: [Repo](https://github.com/phungo-hub/ai-summarizer)

Live preview: [Website](https://ai-summarizer-alpha.vercel.app/)

## Project Showing
https://user-images.githubusercontent.com/55489328/235343714-9c5a9b19-0ef8-48fa-b465-af33c9af106e.mp4


## Technologies

### **Core**
  - **React (18.2.0)**
  - **NextJS**
  - **Typescript**
### **Styling**
  - **Tailwind CSS**: used for styling components, page layout
### **Hosting and Deployment**
  - **Vercel**: hosting & continuous deployment

## Code Formatting & Linting
- Use Prettier as code formatter to auto format code (on Save). Rules defined in ```.prettierrc.``` (to avoid conflicting formatting between developers)
- Use Eslint to find errors in code. Rules defined in ```.eslintrc```

## Setup / Installation 
```node``` and ```npm``` (or yarn) are required to be installed on your machine.
Clone this repository.

At the root directory:

Install packages: yarn install (or npm install)
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

