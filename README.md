# 🎮 Game Arcade

A web-based game arcade built with Python (Starlette/Uvicorn) and JavaScript. Play multiple games in your browser!

## 📁 Project Structure

```
Flappy Bird/
├── app.py                      # Main Python server (Starlette + Uvicorn)
├── index.html                  # Homepage with game menu
├── static/                     # Shared static assets
│   ├── css/
│   │   └── main.css           # Global styles
│   └── js/                    # Shared JavaScript (if needed)
├── games/                      # All games folder
│   └── flappy-bird/           # Flappy Bird game
│       ├── index.html         # Game page
│       └── assets/            # Game-specific assets
└── .venv/                     # Virtual environment (not in git)
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- pip

### Installation

1. **Navigate to project directory:**
   ```bash
   cd "C:\Users\DimitrisValeris\Desktop\Games\Flappy Bird"
   ```

2. **Virtual environment is already set up at `.venv/`**

3. **Install dependencies (if needed):**
   ```bash
   .\.venv\Scripts\python.exe -m pip install uvicorn starlette aiofiles
   ```

### Running the Server

**Start the server:**
```bash
.\.venv\Scripts\python.exe -m uvicorn app:app --host 127.0.0.1 --port 8000 --reload
```

**Access the game arcade:**
```
http://127.0.0.1:8000
```

## 🎮 Available Games

### ✅ Flappy Bird
- **URL:** http://127.0.0.1:8080/games/flappy-bird
- **Controls:**
  - **SPACE** or **CLICK** - Jump
  - **R** - Restart (when game over)
- **Description:** Guide the bird through pipes without crashing!

### ✅ Bounce
- **URL:** http://127.0.0.1:8080/games/bounce
- **Controls:**
  - **← →** Arrow Keys - Move left/right
  - **SPACE** - Start/Next level
  - **R** - Restart (when game over)
- **Description:** Classic Nokia game! Control the bouncing red ball through platforms, collect hearts, and reach the top!

### ⚠️ Don't Touch Red
- **URL:** http://127.0.0.1:8080/games/dont-touch-red
- **Controls:**
  - **Mouse** - Move your cursor to control the green circle
  - **Click** - Start game
  - **R** - Restart
- **Description:** The most infuriating game ever created! Just survive 60 seconds without touching red. Sounds easy? IT'S NOT. 😈
- **Warning:** May cause rage, frustration, and broken peripherals. Good luck!

### 🚪 The Last Step
- **URL:** http://127.0.0.1:8080/games/the-last-step
- **Controls:**
  - **← →** Arrow Keys - Move left/right
  - **SPACE** - Jump (double jump available!)
  - **R** - Restart
- **Description:** A platformer where you can ALWAYS see the golden door at 100%... but getting there is TORTURE. The first 90% is easy, building false hope. Then it gets progressively harder. The final 1% (99-100%) is ABSOLUTE HELL with tiny platforms, random wind, and spike walls. One mistake = fall all the way down. So close, yet so far...
- **Warning:** The progress bar showing "99.9%" will haunt your dreams!

### 🎯 Steady Hand
- **URL:** http://127.0.0.1:8080/games/steady-hand
- **Controls:**
  - **Mouse** - Navigate through the narrow path
  - **Click** - Start/Next level/Retry
  - **R** - Restart
- **Description:** The ultimate test of patience and precision! Navigate your cursor through increasingly narrow, winding paths without touching the edges. Features 5 levels of escalating difficulty with countdown timers that add maximum stress. Path width decreases each level. Later levels add moving obstacles. Requires surgical precision and nerves of steel. One pixel off = instant failure!
- **Warning:** Your hands WILL shake. The countdown WILL stress you out. Level 5 is nearly impossible!

### 🔜 Coming Soon
More games will be added to the arcade!

## 🛠️ Adding New Games

To add a new game to the arcade:

1. **Create game folder:**
   ```bash
   mkdir games\your-game-name
   mkdir games\your-game-name\assets
   ```

2. **Create `games/your-game-name/index.html`:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <title>Your Game - Game Arcade</title>
       <link rel="stylesheet" href="/static/css/main.css">
   </head>
   <body>
       <!-- Back Button -->
       <a href="/" class="back-button">Home</a>
       
       <!-- Your game content here -->
       
       <script>
           // Your game logic here
       </script>
   </body>
   </html>
   ```

3. **Add route in `app.py`:**
   ```python
   async def your_game(request):
       file_path = os.path.join(BASE_DIR, "games", "your-game-name", "index.html")
       return FileResponse(file_path)
   
   # Add to routes list:
   Route("/games/your-game-name", your_game),
   ```

4. **Add game card to `index.html`:**
   ```html
   <a href="/games/your-game-name" class="game-card">
       <div class="game-thumbnail">
           🎯
       </div>
       <div class="game-info">
           <h3>Your Game Name</h3>
           <p>Game description here.</p>
           <span class="game-status">✓ Available</span>
       </div>
   </a>
   ```

5. **Restart the server** - The `--reload` flag should auto-reload!

## 📝 Features

- ✅ Clean, modern UI with glassmorphism design
- ✅ Responsive layout (mobile-friendly)
- ✅ Easy navigation between games
- ✅ Modular structure for easy game additions
- ✅ Hot reload in development mode
- ✅ Static file serving for shared assets

## 🔧 Technology Stack

- **Backend:** Python, Starlette (ASGI), Uvicorn
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Canvas:** HTML5 Canvas API for game rendering

## 📄 License

This project is for personal use and learning purposes.

## 🎨 Credits

- Game design inspired by classic arcade games
- Built with ❤️ and JavaScript
