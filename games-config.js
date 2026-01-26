// Games configuration and order
// Edit this file to change the order of games on the homepage

const GAMES_ORDER = [
    "dont-touch-red",
    "the-last-step",
    "bottle-aim",
    "demon-cards",
    "match-throw",
    "bird-hunt",
    "paint-comet",
    "pie-guard",
    "chaos-bird",
    "stop-the-dot",
    "the-collection",
    "color-cascade",
    "cat-chase",
    "ring-rhino",
    "steady-hand",
    "the-perfect-stack"
];

const GAMES_DATA = {
    "dont-touch-red": {
        url: "/games/dont-touch-red",
        emoji: "🔴",
        title: "Don't Touch Red",
        description: "Simple rule: Don't touch red. Reality: Everything is red, everything moves, and you WILL touch red. Your controller might not survive. 🎮💥",
        status: "⚠️ CONTROLLER DESTROYER",
        gradient: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
        statusBg: "rgba(255, 68, 68, 0.3)"
    },
    "the-last-step": {
        url: "/games/the-last-step",
        emoji: "🚪",
        title: "The Last Step",
        description: "Just walk to the door. 99%... 99.5%... 99.9%... That door is a LIE. Each step is smaller than the last. Your sanity called - it's not coming back. 🚪💀",
        status: "😭 THERAPY REQUIRED",
        gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        statusBg: "rgba(255, 215, 0, 0.3)"
    },
    "bottle-aim": {
        url: "/games/bottle-aim",
        emoji: "🍾",
        title: "Bottle Aim",
        description: "Pee into a tiny bottle while wind constantly messes with your aim. Constant stream means constant danger. Hit both feet and you lose. Dignity not included. 🚽👀",
        status: "💦 BLADDER CHALLENGE",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        statusBg: "rgba(168, 237, 234, 0.3)"
    },
    "demon-cards": {
        url: "/games/demon-cards",
        emoji: "👹",
        title: "Demon Cards",
        description: "Face the Shadow Demon in a card battle! Cards fall from above - click to reveal their power. Red attacks, blue defends, purple curses, green heals, gold specials. Limited cards, strategic choices, luck and skill combined. Defeat the boss before it defeats you! 👹🃏⚔️",
        status: "🔥 DEMONIC CARD BATTLE",
        gradient: "linear-gradient(135deg, #1a0000 0%, #8B0000 50%, #000000 100%)",
        statusBg: "rgba(139, 0, 0, 0.4)"
    },
    "match-throw": {
        url: "/games/match-throw",
        emoji: "🔥",
        title: "Match Throw",
        description: "Pop 10 balloons with flaming matches! Click lights the match and throws it with Chaos Bird physics. But water bubbles extinguish your match, balloons move, and wind messes with your aim. Stay lit! 🔥💧🎈",
        status: "🔥 STAY LIT OR GET WET",
        gradient: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
        statusBg: "rgba(255, 107, 53, 0.3)"
    },
    "paint-comet": {
        url: "/games/paint-comet",
        emoji: "🎨",
        title: "Paint Comet",
        description: "Control a glowing comet that paints beautiful trails as it moves! Click anywhere to guide it with Chaos Bird physics - click far for more force, close for gentle movement. The comet leaves a colorful, fading trail wherever it goes. Paint over all the glowing target stars to win! Create beautiful, flowing patterns while collecting targets. The faster you move, the brighter your trail! 🎨✨",
        status: "🎨 ARTISTIC PHYSICS",
        gradient: "linear-gradient(135deg, #1a0033 0%, #330066 50%, #1a0033 100%)",
        statusBg: "rgba(51, 0, 102, 0.4)"
    },
    "pie-guard": {
        url: "/games/pie-guard",
        emoji: "🥧",
        title: "Pie Guard",
        description: "Protect grandma's pie from endless swarms of flies. Click to swat them before they land. They're fast, numerous, and relentless. Your mouse finger won't forgive you. 🥧🪰",
        status: "💪 CLICK TILL YOU DROP",
        gradient: "linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%, #2BFF88 100%)",
        statusBg: "rgba(250, 139, 255, 0.3)"
    },
    "chaos-bird": {
        url: "/games/chaos-bird",
        emoji: "🐦🔥",
        title: "Chaos Bird 💀",
        description: "Click anywhere → bird flies there! Moving red death zones, physics momentum. Collect 20 eggs. DIE = LOSE HALF YOUR EGGS. Distance = force. Chaos increases! 🐦💀🔥",
        status: "☠️ MOST ANNOYING GAME EVER",
        gradient: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
        statusBg: "rgba(255, 0, 0, 0.4)"
    },
    "stop-the-dot": {
        url: "/games/stop-the-dot",
        emoji: "⭕",
        title: "Stop The Dot",
        description: "Click when the dot hits the green zone. Sounds easy? Zone shrinks, dot speeds up, changes direction randomly, decoys appear. 20 perfect stops. One miss = restart. 😈",
        status: "⚡ REFLEX DESTROYER",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        statusBg: "rgba(255, 215, 0, 0.3)"
    },
    "the-collection": {
        url: "/games/the-collection",
        emoji: "💎",
        title: "The Collection",
        description: "Click to collect rare gems! Progress bar fills, streaks build, near-misses tease you. Variable rewards, fake progress, anticipation loops. Just one more click... you're SO CLOSE! It's not gambling, it's collecting! 💎🎰",
        status: "🧠 PSYCHOLOGICAL TRAP",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        statusBg: "rgba(102, 126, 234, 0.3)"
    },
    "bird-hunt": {
        url: "/games/bird-hunt",
        emoji: "🐦",
        title: "Bird Hunt",
        description: "Find 5 birds hiding in 50 trees within 30 seconds. Throw paper airplanes to catch them. Birds fly away constantly. Your airplane is painfully slow. They're mocking you. 🐦✈️",
        status: "😤 BIRD TROLLING SIMULATOR",
        gradient: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)",
        statusBg: "rgba(168, 230, 207, 0.3)"
    },
    "color-cascade": {
        url: "/games/color-cascade",
        emoji: "🌈",
        title: "Color Cascade",
        description: "Match 20 colorful gems cascading down! Click when colors align perfectly. Vibrant visuals, particle explosions, streaks, and glowing effects. You control the timing - your skill matters! But you're ALWAYS so close to that big win... 🌈✨",
        status: "💎 VISUAL FEAST",
        gradient: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFD700 100%)",
        statusBg: "rgba(255, 107, 107, 0.3)"
    },
    "cat-chase": {
        url: "/games/cat-chase",
        emoji: "🐭",
        title: "Cat Chase",
        description: "You're a mouse evading hungry cats for 30 seconds. Cheese is DEADLY (ironic, right?). Kill cats by touching their tails. Tom & Jerry lied to you. 🐭😱",
        status: "🧀 TRUST NO CHEESE",
        gradient: "linear-gradient(135deg, #2d5016 0%, #5a9216 100%)",
        statusBg: "rgba(90, 146, 22, 0.3)"
    },
    "ring-rhino": {
        url: "/games/ring-rhino",
        emoji: "🦏",
        title: "Ring the Rhino",
        description: "Land 10 rings on a sleeping rhino's horn. His head moves randomly, 25 flies buzz around, and chaotic wind destroys your aim. Don't wake him up. 🦏💍😤",
        status: "🌪️ WIND SAYS NO",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        statusBg: "rgba(118, 75, 162, 0.3)"
    },
    "steady-hand": {
        url: "/games/steady-hand",
        emoji: "🎯",
        title: "Steady Hand",
        description: "Guide a tiny ball through ultra-narrow paths. But wait: there's lag, random turbulence, fast obstacles, and tight time limits. Surgeon hands required. 🔬💀",
        status: "😈 IMPOSSIBLE MODE",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        statusBg: "rgba(255, 68, 68, 0.3)"
    },
    "the-perfect-stack": {
        url: "/games/the-perfect-stack",
        emoji: "📦",
        title: "The Perfect Stack",
        description: "Stack 10 blocks perfectly! You control the timing - click when the block is centered. But blocks wobble, physics are tricky, and you're ALWAYS so close! 9 blocks? Just one more! Loss chasing at its finest. Your skill matters... right? 📦😈",
        status: "🎯 ILLUSION OF CONTROL",
        gradient: "linear-gradient(135deg, #8B7355 0%, #654321 100%)",
        statusBg: "rgba(139, 115, 85, 0.3)"
    }
};
