# Rightbrain Next.js Template

A template for building AI-powered applications with Rightbrain and Next.js. This template provides everything you need to start building AI applications with authentication, API integration, and modern web technologies.

## Features

- 🔒 Built-in authentication with Replit Auth
- 🤖 Rightbrain SDK integration for AI capabilities
- ⚡ Next.js 14 App Router
- 🎨 Tailwind CSS for styling
- 📝 Full TypeScript support
- 🔐 Protected API routes
- 🚀 Production-ready configuration

## Quick Start

1. Click "Use Template" on Replit
2. Sign up for [Rightbrain](https://rightbrain.ai/)
3. Add your Rightbrain credentials in Replit Secrets:
   - RB_ORG_ID
   - RB_PROJECT_ID
   - RB_OAUTH2_URL
   - RB_API_URL
   - RB_CLIENT_ID
   - RB_CLIENT_SECRET
   - RB_OAUTH2_TOKEN_PATH
4. Click "Run"

The template will automatically:

- Install dependencies
- Generate the Rightbrain SDK
- Start the development server

## Development

To run locally:

```bash
Install dependencies
npm install
Generate Rightbrain SDK
npm run generate-sdk
Start development server
npm run dev
```

## Project Structure

```bash
src/
├── app/ # Next.js App Router pages
├── components/ # React components
├── generated/ # Generated Rightbrain SDK
├── hooks/ # Custom React hooks
├── lib/ # Utility libraries
├── types/ # TypeScript types
└── utils/ # Helper functions
```

## Security

This template implements several security best practices:

- Replit Auth integration
- Protected API routes
- Environment variable validation
- Secure token handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this template in your own projects.

## Support

- [Rightbrain Documentation](https://docs.rightbrain.ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [Replit Documentation](https://docs.replit.com)
