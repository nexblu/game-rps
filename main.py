from typing import Union
from fastapi import FastAPI
from routes.rps_game import router as rps_game
from routes.rps_random import router as rps_router

app = FastAPI()

app.include_router(rps_game)
app.include_router(rps_router)


@app.get("/")
def read_root():
    return "welcome to rps api by kelompok 4"
