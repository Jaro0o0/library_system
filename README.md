# Library Website 


This project is a web application for a library, consisting of a backend (.NET) and a frontend (React + Vite + TypeScript). The application allows users to create accounts, log in, browse and highlight books, check availability, view rental history and active rentals. The system also generates book recommendations based on rental history.



## Features
- User registration and login (authentication and user management controllers).
- Browsing the book catalog and viewing item details.
- Highlighting/marking books (e.g. favorites or to-read).
- Tracking a user's rental history and list of active rentals.
- Checking availability of book copies.
- Book recommendations based on rental history.

## Project Architecture
```text
library_website/
├── backend/                          # ASP.NET Core (.NET 10) API
│   ├── Controllers/                  # API endpoints
│   ├── Data/                         # DbContext, DatabaseSeeder
│   ├── Migrations/                   # EF Core migrations
│   ├── Models/                       # domain models
│   ├── Services/                     # business logic (e.g. RecommendService)
│   ├── SeedImages/                   # sample images used when seeding data
│   ├── Properties/
│   ├── appsettings.json              # main configuration
│   ├── appsettings.Development.json  # dev-only configuration
│   ├── .env                          # environment variables
│   ├── Dockerfile
│   └── Program.cs                    # app entry point
│
├── frontend/                         # React + Vite + TypeScript UI
│   ├── src/                          # source code (components, pages, services)
│   ├── public/                       # static assets
│   ├── tests/                        # frontend tests
│   ├── dist/                         # build output
│   ├── .env
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── docker-compose.yml                # runs backend + frontend together
└── .gitignore
```


## Running Locally (Docker)
1. Build and run the services using Docker Compose:

```bash
docker compose up --build
```

2. The application will start the frontend and backend (configured by default in `docker-compose.yml`).

If you don't use Docker, you can run the backend and frontend separately (make sure you have .NET SDK and Node.js/npm installed):

- Backend: go to `backend/` and run
  
 ```bash
    dotnet run
  ```
- Frontend: go to `frontend/` and run
  
```bash
  npm install
```

**Configuration and Files**
- Backend uses `appsettings.json` / `appsettings.Development.json` for configuration (database connection, JWT key, etc.).
- EF Core migrations are located in `backend/Migrations/`.
- The `SeedImages/` folder (if present) contains sample images used when seeding data.

## Example API Endpoints
- Registration: `POST /api/user/register` (registration data)
- Login: `POST /api/user/login` (returns a JWT token)
- Book list: `GET /api/books`


Note: exact paths and payloads can be found in the controllers in `backend/Controllers/`.

## Database and Seed
- The project contains EF Core migrations. To initialize the database locally without Docker, run the migrations (`dotnet ef database update`) in the backend directory (requires EF Core tools).
- If the project contains a `DatabaseSeeder` class, it will seed sample data (authors, books, images) on startup.

## Recommendations
- The recommendation system uses rental history (recommendation service in `backend/Services/RecommendService.cs`) to suggest books similar to ones the user has previously rented.


## Status
This project is actively being developed, and new features, improvements, and updates will be added regularly. 


