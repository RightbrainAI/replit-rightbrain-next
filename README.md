# Rightbrain Next.js Template

A template for building AI-powered applications with Rightbrain and Next.js. This template is designed to work seamlessly on Replit while providing a robust foundation for AI integration.

## Features

- 🔒 Built-in authentication with Replit Auth
- 🤖 Rightbrain SDK integration
- ⚡ Next.js App Router
- 🎨 Tailwind CSS styling
- 📝 TypeScript support

## Getting Started

1. Create a new Repl using this template
2. Add your Rightbrain credentials to the Repl secrets:

   - RB_ORG_ID
   - RB_PROJECT_ID
   - RB_OAUTH2_URL
   - RB_API_URL
   - RB_CLIENT_ID
   - RB_CLIENT_SECRET
   - RB_OAUTH2_TOKEN_PATH

3. Install dependencies:

```bash
npm install
```

4. Generate the Rightbrain SDK:

```bash
npm run generate-sdk
```

5. Start the development server:

```bash
npm run dev
```

## Project Structure

- `/src/app` - Next.js App Router pages and API routes
- `/src/components` - React components
- `/src/utils` - Utility functions
- `/src/generated` - Generated Rightbrain SDK code

## Security

This template includes:

- Replit Auth for user authentication
- Protected API routes
- Environment variable validation

## Learn More

- [Rightbrain Documentation](https://docs.rightbrain.ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [Replit Documentation](https://docs.replit.com)
