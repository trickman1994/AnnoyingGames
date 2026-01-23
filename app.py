from starlette.applications import Starlette
from starlette.responses import FileResponse
from starlette.routing import Route, Mount
from starlette.staticfiles import StaticFiles
import os

# Get the current directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


async def homepage(request):
    """Serve the main homepage"""
    file_path = os.path.join(BASE_DIR, "index.html")
    print(f"Homepage requested. Serving: {file_path}")
    print(f"File exists: {os.path.exists(file_path)}")
    return FileResponse(file_path)


async def dont_touch_red(request):
    """Serve the Don't Touch Red game"""
    file_path = os.path.join(BASE_DIR, "games", "dont-touch-red", "index.html")
    return FileResponse(file_path)


async def the_last_step(request):
    """Serve The Last Step game"""
    file_path = os.path.join(BASE_DIR, "games", "the-last-step", "index.html")
    return FileResponse(file_path)


async def steady_hand(request):
    """Serve Steady Hand game"""
    file_path = os.path.join(BASE_DIR, "games", "steady-hand", "index.html")
    return FileResponse(file_path)


async def pie_guard(request):
    """Serve Pie Guard game"""
    file_path = os.path.join(BASE_DIR, "games", "pie-guard", "index.html")
    print(f"Pie Guard requested. Serving: {file_path}")
    print(f"File exists: {os.path.exists(file_path)}")
    return FileResponse(file_path)


async def cat_chase(request):
    """Serve Cat Chase game"""
    file_path = os.path.join(BASE_DIR, "games", "cat-chase", "index.html")
    return FileResponse(file_path)


async def ring_rhino(request):
    """Serve Ring the Rhino game"""
    file_path = os.path.join(BASE_DIR, "games", "ring-rhino", "index.html")
    return FileResponse(file_path)


async def bottle_aim(request):
    """Serve Bottle Aim game"""
    file_path = os.path.join(BASE_DIR, "games", "bottle-aim", "index.html")
    return FileResponse(file_path)


async def bird_hunt(request):
    """Serve Bird Hunt game"""
    file_path = os.path.join(BASE_DIR, "games", "bird-hunt", "index.html")
    return FileResponse(file_path)


async def chaos_bird(request):
    """Serve Chaos Bird game"""
    file_path = os.path.join(BASE_DIR, "games", "chaos-bird", "index.html")
    return FileResponse(file_path)


async def stop_the_dot(request):
    """Serve Stop The Dot game"""
    file_path = os.path.join(BASE_DIR, "games", "stop-the-dot", "index.html")
    return FileResponse(file_path)


async def match_throw(request):
    """Serve Match Throw game"""
    file_path = os.path.join(BASE_DIR, "games", "basketball-chaos", "index.html")
    return FileResponse(file_path)


# Define routes
routes = [
    Route("/", homepage),
    Route("/games/dont-touch-red", dont_touch_red),
    Route("/games/dont-touch-red/", dont_touch_red),
    Route("/games/the-last-step", the_last_step),
    Route("/games/the-last-step/", the_last_step),
    Route("/games/steady-hand", steady_hand),
    Route("/games/steady-hand/", steady_hand),
    Route("/games/pie-guard", pie_guard),
    Route("/games/pie-guard/", pie_guard),
    Route("/games/cat-chase", cat_chase),
    Route("/games/cat-chase/", cat_chase),
    Route("/games/ring-rhino", ring_rhino),
    Route("/games/ring-rhino/", ring_rhino),
    Route("/games/bottle-aim", bottle_aim),
    Route("/games/bottle-aim/", bottle_aim),
    Route("/games/bird-hunt", bird_hunt),
    Route("/games/bird-hunt/", bird_hunt),
    Route("/games/chaos-bird", chaos_bird),
    Route("/games/chaos-bird/", chaos_bird),
    Route("/games/stop-the-dot", stop_the_dot),
    Route("/games/stop-the-dot/", stop_the_dot),
    Route("/games/match-throw", match_throw),
    Route("/games/match-throw/", match_throw),
    Mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static"),
]

# Create the Starlette application
app = Starlette(debug=True, routes=routes)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
