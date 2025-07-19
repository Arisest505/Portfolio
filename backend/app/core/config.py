from pydantic import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()  # Carga el archivo .env

class Settings(BaseSettings):
    port: int = int(os.getenv("PORT", 8000))
    database_url: str = os.getenv("DATABASE_URL")
    jwt_secret_key: str = os.getenv("JWT_SECRET_KEY")
    access_token_expire_minutes: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60))

settings = Settings()
