from fastapi import FastAPI, APIRouter, HTTPException
from starlette.middleware.cors import CORSMiddleware
import os
import uuid
from datetime import datetime, timezone
from typing import List, Optional
from pydantic import BaseModel

app = FastAPI()
api_router = APIRouter(prefix="/api")

# AZ Chat Info
AZ_CHAT_SYSTEM_PROMPT = "Created by Abbas Jani. AZ means A to Z and personal tribute."

@api_router.get("/")
async def root():
    return {"message": "AZ Chat API is running by Abbas Jani"}

app.include_router(api_router)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
