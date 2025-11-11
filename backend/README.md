# Backend Setup

This backend environment is prepared for building production-ready APIs with FastAPI, SQLAlchemy, and Strawberry GraphQL.

## Installed tooling

- **FastAPI** – high-performance ASGI framework for REST endpoints.
- **Uvicorn** (standard extras) – ASGI server with hot-reload tooling.
- **SQLAlchemy** – ORM and SQL toolkit.
- **Alembic** – database migrations.
- **databases[asyncpg]** – async DB access with PostgreSQL driver.
- **psycopg2-binary** & **asyncpg** – PostgreSQL synchronous and async drivers.
- **pymongo** & **motor** – MongoDB synchronous and async drivers.
- **Strawberry GraphQL** – GraphQL schema & server integration with FastAPI adapter.
- **python-dotenv** & **pydantic-settings** – environment configuration loading.
- **httpx** – HTTP client for integration tests or service calls.

## Working in the virtual environment

1. Activate the existing virtual environment:

```powershell
E:\MyProjects\Fronend-Learning\backend\venv\Scripts\Activate.ps1
```

2. Install or update dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the FastAPI development server (example entry-point `main.py` assumed):

```powershell
uvicorn main:app --reload
```

4. Launch Strawberry GraphQL Playground once the app is running by visiting:

```
http://localhost:8000/graphql
```

## Next steps

- Scaffold `main.py` with FastAPI app and Strawberry schema mounting.
- Configure database URL via environment variables managed with `.env`.
- Add Alembic migration environment in `alembic/`.
- Implement REST routes, GraphQL schema, and SQLAlchemy models.
