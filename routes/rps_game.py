from fastapi import APIRouter
from models import RPS
import random
from fastapi.responses import JSONResponse

router = APIRouter()


@router.post("/api/v1/k4/rps/rps_game")
async def rps_game(rps: RPS):
    choice = ["rock", "paper", "scissors"]
    bot_choice = random.choice(choice)
    if rps.choice in choice:
        if (rps.choice).lower() == bot_choice:
            return "Seri!"
        elif (
            ((rps.choice).lower() == "rock" and bot_choice == "scissors")
            or ((rps.choice).lower() == "scissors" and bot_choice == "paper")
            or ((rps.choice).lower() == "paper" and bot_choice == "rock")
        ):
            return "Anda Menang!"
        else:
            return "Anda Kalah!"
    else:
        return JSONResponse(
            content={"k4": {"status": f"{rps.choice} not found", "status_code": 404}},
            status_code=404,
        )
