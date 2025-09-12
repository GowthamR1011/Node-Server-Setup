# Node Server Setup Template

A robust, ready-to-fork **Node.js** server setup with **TypeScript, Express**, and essential libraries for building scalable services. This template provides a solid foundation for new projects and microservices, featuring best practices for logging, error handling, security, and graceful shutdown.

---

## Features

- **TypeScript**: Strict typing and modern JavaScript features
- **Express**: Fast, minimalist web framework
- **Helmet**: Security headers for HTTP
- **CORS**: Cross-origin resource sharing configuration
- **Morgan + Winston**: Advanced logging to console and files
- **Dotenv**: Environment variable management
- **Graceful Shutdown**: Handles SIGINT/SIGTERM, uncaught exceptions, and cleanup
- **Custom Error Handling**: Centralized error responses
- **Nodemon**: Hot-reloading for development

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/GowthamR1011/node-server-setup.git
cd node-server-setup
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
PORT=4000
```

### 4. Run in Development

```bash
npm run dev
```

### 5. Build and Start Production

```bash
npm start
```

---

## Project Structure

```
├── src/
│   ├── index.ts              # Main server entry point
│   ├── config/
│   │   ├── index.ts          # Loads environment config
│   │   └── logger.ts         # Winston logger setup
│   ├── types/
│   │   └── AppError.ts       # Custom error class
│   └── utils/
│       └── shutdown.ts       # Graceful shutdown logic
├── logs/
│   ├── combined.log          # All logs
│   └── error.log             # Error logs
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

---

## API Endpoints

- `GET /` — A welcome endpoint returns a welcome message
- `GET /health` — An Endpoint that is used to check the health of the service

---

## Logging

- **Winston** logs to console and files (`logs/combined.log`, `logs/error.log`)
- **Morgan** HTTP request logging integrated with Winston

---

## Graceful Shutdown

Handles process signals and errors to ensure clean server exit and resource cleanup.

---

## Customization

- Add routes/services in `src/`
- Extend error handling in `src/types/AppError.ts`
- Configure logger in `src/config/logger.ts`
- Add environment variables in `.env`

---

## License

This project is [ISC Licensed](LICENSE).

---

## Contributing

Fork, create a feature branch, and submit a pull request! Issues and suggestions welcome.

---

## Author

Created by [Gowtham Ravichander](https://github.com/GowthamR1011)

---

## Acknowledgements

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Winston](https://github.com/winstonjs/winston)
- [Morgan](https://github.com/expressjs/morgan)
- [Helmet](https://helmetjs.github.io/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/)
