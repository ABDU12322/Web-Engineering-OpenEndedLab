# 🎯 Conflicting Requirements Task Manager

**A creative web application that reconciles two opposing design philosophies through an innovative dual-theme system.**

![React](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6+-646CFF.svg)
![CSS](https://img.shields.io/badge/CSS-Pure-1572B6.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌟 Overview

This project addresses a unique challenge: **How do you satisfy two completely conflicting sets of design requirements in a single application?**

Instead of compromising, this task manager offers **two complete, high-quality experiences** that users can toggle between instantly.

### 🌞 Minimalist Mode
Clean, simple, and focused - perfect for distraction-free productivity.

### 🔥 Dark Souls Mode  
Rich, immersive, and gamified - inspired by the Dark Souls aesthetic with souls, levels, and achievements.

## 🚀 Quick Start

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Open http://localhost:5174 in your browser
```

**👉 The app is currently running at: http://localhost:5174**

## ✨ Features

### Universal Features (Both Themes)
- ✅ Add, complete, and delete tasks
- ✅ Real-time progress tracking
- ✅ Keyboard shortcuts (Enter to add)
- ✅ Fully responsive design
- ✅ Smooth theme transitions
- ✅ Mobile-optimized interface

### 🌞 Minimalist Mode Exclusive
- Clean light color scheme (blues & whites)
- Subtle animations and transitions
- Minimal visual distractions
- Simple, intuitive controls
- Fast, lightweight interface

### 🔥 Dark Souls Mode Exclusive
- **Souls Currency**: Earn 50-100 souls per completed task
- **Level System**: Progress through levels (500 souls per level)
- **Achievements**: Unlock random achievements with toast notifications
- **Bonfire Checkpoint**: Interactive bonfire with flame animations
- **Stats Dashboard**: Real-time display of Souls, Level, and Task progress
- **Visual Effects**: Glowing text, animated shadows, ambient effects
- **Dark Souls Quote**: "Don't you dare go Hollow"
- **Skull Icons**: Appear on completed quests
- **Achievement Badges**: Display recent achievements
- **Rich Animations**: 15+ custom CSS animations

## 🎮 How to Use

1. **Toggle Themes**: Click the theme button in the top-right corner (☀️ or 🔥)
2. **Add Tasks**: Type in the input field and press Enter or click the Add button
3. **Complete Tasks**: Click the checkbox next to any task
4. **Delete Tasks**: Click the delete button (× or ⚔️)
5. **Track Progress**: Watch the progress bar fill as you complete tasks

### Dark Souls Mode Tips:
- Complete tasks to earn souls and level up
- Click the bonfire for a satisfying checkpoint animation
- Collect random achievements as you work
- Watch your stats grow in the header dashboard

## 🎨 Design Philosophy

### The Challenge
The lab presented two conflicting requirement sets:

**Set 1**: Minimalist, clean, light, fast, simple  
**Set 2**: Rich, engaging, dark, gamified, interactive

### The Solution
Rather than finding a middle ground that satisfies neither, this project provides:

✨ **Two Complete Experiences**: Each theme fully realizes its design philosophy  
🔄 **Instant Switching**: Users choose their preferred mode  
🎯 **Context-Appropriate**: Different needs at different times  
💡 **No Compromises**: Every requirement met without sacrifice

## 📁 Project Structure

```
WebLab12OpenEnded/
├── src/
│   ├── App.jsx          # Main component with theme logic & task management
│   ├── App.css          # Complete styling for both themes (~900 lines)
│   ├── index.css        # Global base styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── README.md            # This file
├── QUICK_START.md       # Quick reference guide
├── DESIGN_DOCUMENTATION.md  # Complete design rationale
└── PROJECT_SUMMARY.md   # Project completion summary
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Pure CSS (no libraries needed)
- **State Management**: React Hooks (useState, useEffect)
- **Animations**: CSS Keyframes

## 📱 Responsive Design

Fully responsive with breakpoints at:
- **Desktop**: Full features (> 768px)
- **Tablet**: Adapted layouts (≤ 768px)
- **Mobile**: Vertical stacking (≤ 480px)

All interactive elements are touch-friendly with minimum 44px tap targets.

## 🎨 Color Palettes

### Light Theme
- Primary: `#3498db` (Blue)
- Background: Gradient `#f5f7fa` → `#c3cfe2`
- Text: `#2c3e50` (Dark Gray)

### Dark Theme  
- Primary: `#d4af37` (Gold)
- Background: `#0a0a0a` → `#1a1a2e` (Very Dark)
- Text: `#d4af37` (Gold)
- Accent: `#8b4513` (Saddle Brown)

## 🏆 Gamification System (Dark Mode)

### Souls Economy
- Base reward: 50-100 souls per completed task (random)
- Level progression: Every 500 souls = 1 level up
- Visual feedback: Glowing soul counter with pulse animation

### Achievement System
- 20% chance to unlock achievement per task completion
- Achievements include:
  - 🏆 **Bonfire Keeper**: Complete a task at the bonfire
  - ⚔️ **Undead Warrior**: Another task vanquished
  - ☀️ **Praise the Sun**: Productivity intensifies
  - 🎖️ **Level X Reached**: Achieve new power level

### Visual Rewards
- Achievement toast notifications with slide-in animation
- Recent achievement badges display
- Level-up celebrations
- Bonfire flame burst effects

## 🔮 Future Enhancements

Planned features for future updates:
- [ ] 🔊 Task completion sound effects (Dark Souls inspired)
- [ ] 💾 localStorage for data persistence
- [ ] 🏆 Extended achievement system (20+ unique achievements)
- [ ] 👹 Boss Battles (special challenging tasks)
- [ ] 🌳 Skill Tree (unlock UI customizations)
- [ ] 💼 Multiple bonfires (separate task lists)
- [ ] 🎨 Additional theme variants (Cyberpunk, Fantasy, etc.)
- [ ] 📤 Export/Import functionality

## 📚 Documentation

For detailed information, see:
- **[QUICK_START.md](QUICK_START.md)**: Quick reference and usage guide
- **[DESIGN_DOCUMENTATION.md](DESIGN_DOCUMENTATION.md)**: Complete design rationale and technical details
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)**: Project completion summary

## 🎓 Learning Outcomes

This project demonstrates:

1. ✅ **Creative Problem Solving**: Innovative solution to conflicting requirements
2. ✅ **Advanced CSS**: Complex animations, gradients, shadows, and responsive design
3. ✅ **React Best Practices**: Hooks, state management, component architecture
4. ✅ **Theme Architecture**: Building scalable, maintainable theme systems
5. ✅ **Gamification Principles**: Applying game mechanics to productivity apps
6. ✅ **User Experience Design**: Context-appropriate experiences
7. ✅ **Performance Optimization**: GPU-accelerated animations

## 🎯 Requirements Met

### ✅ Set 1: Minimalist Design
- [x] Clean and simple interface
- [x] Light color scheme
- [x] Minimal text and interactions
- [x] Mobile responsive
- [x] Fast loading times

### ✅ Set 2: Engaging Design
- [x] Visually rich and engaging
- [x] Dark and vibrant colors
- [x] Interactive animations
- [x] Multiple buttons and controls
- [x] Gamification elements
- [x] Fun and addictive

## 💻 Development Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 📝 Notes

### React Compiler Warnings
You may see warnings about `Math.random()` and `Date.now()` from the React Compiler. These are **not errors** - the app works perfectly. The usage in event handlers is intentional for the gamification randomness.

### Sound Effects
Task completion sounds for Dark Souls mode will be added in a future update as mentioned in the requirements.

## 🤝 Contributing

This is an educational project for Web Engineering Lab 12. Feedback and suggestions are welcome!

## 📄 License

MIT License - Feel free to use this project for learning purposes.

## 🙏 Credits

**Design Inspiration:**
- Minimalist design: Apple's design philosophy, Google Material Design
- Dark Souls theme: FromSoftware's Dark Souls series
- Gamification: Habitica, Duolingo

**Created by**: Muhammad (Web Engineering Lab 12 - Open Ended)

---

**⚔️ Remember: Stay productive in Light Mode, and don't go Hollow in Dark Mode! 🔥**
