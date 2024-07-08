# struct-nd
`struct-nd` is a Node.js package that simplifies the process of setting up a standard Node.js project structure. With a single command, you can generate the recommended file and directory layout commonly used in Node.js projects.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Express js Project structure](#express-js-project-structure)
- [Rest Api Project Structure](#rest-api-project-structure)
- [GraphQL Project Structure](#graphql-project-structure)
- [TypeScript Project Structure](#typescript-project-structure)
- [Nextjs Project structure](#nextjs-project-structure)

## Installation:
- To install `struct-nd`, use the following command:
    `npm install -g struct-nd`
  This will make the struct command available globally on your system.

- or `npm install struct-nd`

## Usage:
- run command `struct express` to generating expressjs project structure.
- `struct rest` - Rest Api structure.
- `struct graph` - Graphql structure.
- `struct typescript` - Typescript structure.
- `struct nextjs` - nextjs structure.


## Express js Project structure:
```js
        my-nodejs-project/
├── node_modules/           # Installed dependencies (auto-generated)
├── public/                 # Static assets (CSS, images, client-side JS)
│   ├── css/
│   ├── images/
│   └── scripts/
├── src/                    # Source code
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Functions that handle request processing
│   ├── models/             # Data models and database schemas
│   ├── routes/             # Application routes
│   ├── services/           # Business logic and data processing
│   └── views/              # Template files (if using a templating engine)
├── config/                 # Configuration files (database, environment)
│   ├── database.js
│   ├── environment.js
├── tests/                  # Unit and integration tests
├── .gitignore              # Ignored files and directories for version control
└── README.md               # Project documentation
```

## Rest Api Project Structure:
```js
  my-rest-api/
├── node_modules/           # Installed dependencies (auto-generated)
├── src/                    # Source code
│   ├── controllers/        # API route handlers
│   ├── middlewares/        # Middleware functions
│   ├── models/             # Data models and database schemas
│   ├── routes/             # API routes
│   ├── services/           # Business logic and data processing
├── config/                 # Configuration files (database, environment)
│   ├── database.js
│   ├── environment.js
├── tests/                  # Unit and integration tests
├── .gitignore              # Ignored files and directories for version control
└── README.md               # Project documentation


```

## GraphQL Project Structure:
```js
my-graphql-project/
├── node_modules/           # Installed dependencies (auto-generated)
├── src/                    # Source code
│   ├── graphql/            # GraphQL schema, resolvers, and types
│   ├── models/             # Data models and database schemas
│   ├── services/           # Business logic and data processing
├── config/                 # Configuration files (database, environment)
│   ├── database.js
│   ├── environment.js
├── tests/                  # Unit and integration tests
├── .gitignore              # Ignored files and directories for version control
└── README.md               # Project documentation

```

## TypeScript Project Structure:
```js
my-typescript-project/
├── node_modules/           # Installed dependencies (auto-generated)
├── src/                    # TypeScript source code
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
├── config/                 # Configuration files (database, environment)
│   ├── database.ts
│   ├── environment.ts
├── tests/                  # Unit and integration tests
├── tsconfig.json           # TypeScript compiler configuration
├── .gitignore              # Ignored files and directories for version control
└── README.md               # Project documentation

```

## Nextjs Project structure:
```js
my-nextjs-project/
├── node_modules/           # Installed dependencies (auto-generated)
├── public/                 # Static assets (images, etc.)
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── pages/              # Next.js pages
│   │   ├── api/            # API routes (serverless functions)
│   │   ├── _app.js         # Custom App component
│   │   ├── _document.js    # Custom Document component
│   ├── styles/             # CSS/Sass styles
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom hooks
│   ├── contexts/           # Context providers
│   ├── lib/                # Libraries and helper functions
├── tests/                  # Unit and integration tests
├── .gitignore              # Ignored files and directories for version control
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── jsconfig.json           # JavaScript configuration (or tsconfig.json for TypeScript)
└── .env                    # Environment variables

```
