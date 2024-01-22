from fastapi import APIRouter
from models import RPS
from fastapi.responses import JSONResponse

router = APIRouter()


@router.post("/api/v1/k4/rps/rps_image")
async def rps_image(rps: RPS):
    choice = {
        "rock": "https://media.discordapp.net/attachments/1123932471143182468/1198585975878721586/9534508.png?ex=65bf712d&is=65acfc2d&hm=c565c986a3525fd462566fbc16f04c4b294079516079686af4485ef93a619b83&=&format=webp&quality=lossless",
        "paper": "https://media.discordapp.net/attachments/1123932471143182468/1198585945537122416/9534514.png?ex=65bf7126&is=65acfc26&hm=59350479c9c92ef82d76f26c1a17c5f750d27ef4aa822bbc35f640036f39fe23&=&format=webp&quality=lossless",
        "scissors": "https://media.discordapp.net/attachments/1123932471143182468/1198585909881348247/9534511.png?ex=65bf711d&is=65acfc1d&hm=25acfb9b892f7d74f21a9f79a0356dbca5646cf819509243a6b92828dadede27&=&format=webp&quality=lossless",
    }
    if (rps.choice).lower() in [key for key, value in choice.items()]:
        return JSONResponse(
            content={
                "k4": {
                    "status": f"success",
                    "url_image": choice[rps.choice],
                    "status_code": 200,
                }
            },
            status_code=200,
        )
    else:
        return JSONResponse(
            content={
                "k4": {
                    "status": f"{(rps.choice).lower()} not found",
                    "status_code": 404,
                }
            },
            status_code=404,
        )
