from fastapi import APIRouter
from models import RPSRandom
import random
from fastapi.responses import JSONResponse

router = APIRouter()


@router.post("/api/v1/k4/rps/rps_random")
async def rps_random(rps: RPSRandom):
    try:
        rps.amount = int(rps.amount)
    except:
        return JSONResponse(
            content={
                "k4": {
                    "status": f"input must be number",
                    "status_code": 400,
                }
            },
            status_code=400,
        )
    else:
        if rps.amount <= 5 and rps.amount > 0:
            choice = ["rock", "paper", "scissors"]
            return JSONResponse(
                content={
                    "k4": {
                        "status": "success",
                        "item": random.choices(choice, k=rps.amount),
                        "status_code": 200,
                    }
                },
                status_code=200,
            )
        else:
            return JSONResponse(
                content={
                    "k4": {
                        "status": f"number must be 1 - 5",
                        "status_code": 400,
                    }
                },
                status_code=400,
            )
