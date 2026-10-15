# test-drive

A Node.js project written in TypeScript.

## Requirements

- [Node.js](https://nodejs.org/) 20 or later (LTS recommended)
- npm (comes with Node.js)

## Getting started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd test-drive
npm install
```

## Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Run the app in watch mode with `tsx`            |
| `npm run build` | Compile TypeScript from `src/` into `dist/`     |
| `npm start`     | Run the compiled app from `dist/`               |
| `npm test`      | Run the test suite                              |
| `npm run lint`  | Check the code with ESLint                      |

## Project structure

```
test-drive/
├── src/            # TypeScript source files
│   └── index.ts    # Application entry point
├── dist/           # Compiled JavaScript (generated, not committed)
├── tests/          # Tests
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

Environment variables can be placed in a `.env` file in the project root. Do not commit this file; add example values to `.env.example` instead.

## Contributing

1. Create a branch: `git switch -c feature/my-change`
2. Commit your changes: `git commit -m "Add my change"`
3. Push the branch and open a pull request

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
