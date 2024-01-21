from typing import Union
from fastapi import FastAPI
from routes.rps_game import router as rps_game
from routes.rps_random import router as rps_router
from routes.rps_image import router as rps_image
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(rps_router)
app.include_router(rps_image)
app.include_router(rps_game)


@app.get("/")
def read_root():
    return "welcome to rps api by kelompok 4"
