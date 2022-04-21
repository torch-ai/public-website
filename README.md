# Getting Started

You'll need a set of credentials for our [Contentful](https://app.contentful.com/spaces/dtb5w0ega2aw/home) account.

Create a file at `./.env.local` with your personal credentials. An example:

```dotenv
CONTENTFUL_ACCESS_KEY=l-C5F3_*****
```

First, run the development server:

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Generated features

### Contentful

This code base uses a set of tools provided by Contentful and the community to generate type definitions:
You can then use the cli with a personal access token from your account to export space's content model definitions:

```shell
cf-content-types-generator -o generated/contentful -s dtb5w0ega2aw -t CFPAT-****
```

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deploy on Vercel

This repository is connected to our Vercel account and will automatically deploy when `main` is updated.  
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Backlog

See our internal backlog in [Azure DevOps](https://dev.azure.com/TorchResearchLLC/Marketing%20and%20Communications/_backlogs/backlog/Public%20website/Stories).
