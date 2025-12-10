import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [souls, setSouls] = useState(0)
  const [level, setLevel] = useState(1)
  const [achievements, setAchievements] = useState([])
  const [showAchievement, setShowAchievement] = useState(null)
  const [bonfireLit, setBonfireLit] = useState(false)

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'
  }, [isDarkMode])

  const playSuccessSound = () => {
    const audio = new Audio('/success.mp3')
    audio.volume = 0.5
    audio.play().catch(err => console.log('Audio play failed:', err))
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
      
      if (isDarkMode) {
        setBonfireLit(true)
        setTimeout(() => setBonfireLit(false), 500)
      }
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
    
    const task = tasks.find(t => t.id === id)
    if (!task.completed && isDarkMode) {
      playSuccessSound() // Play success sound
      // eslint-disable-next-line react-hooks/purity
      const soulsEarned = Math.floor(Math.random() * 50) + 50
      setSouls(prev => prev + soulsEarned)
      
      const newSouls = souls + soulsEarned
      const newLevel = Math.floor(newSouls / 500) + 1
      if (newLevel > level) {
        setLevel(newLevel)
        unlockAchievement(`Level ${newLevel} Reached`, `You've ascended to level ${newLevel}`)
      }
      
            // eslint-disable-next-line react-hooks/purity
      if (Math?.random() < 0.2) {
        const achievements = [
          { title: "Bonfire Keeper", desc: "Complete a task at the bonfire" },
          { title: "Undead Warrior", desc: "Another task vanquished" },
          { title: "Praise the Sun", desc: "Productivity intensifies" }
        ]
              // eslint-disable-next-line react-hooks/purity
        const random = achievements[Math.floor(Math.random() * achievements.length)]
        unlockAchievement(random.title, random.desc)
      }
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const unlockAchievement = (title, description) => {
          // eslint-disable-next-line react-hooks/purity
    const newAch = { title, description, id: Date.now() }
    setAchievements(prev => [...prev, newAch])
    setShowAchievement(newAch)
    setTimeout(() => setShowAchievement(null), 3000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  const restAtBonfire = () => {
    setBonfireLit(!bonfireLit)
  }

  return (
    <div className="outer-container">
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Theme Toggle */}
      <div className="theme-toggle-container">
        <span className="toggle-label">
          {isDarkMode ? 'Dark Souls Mode' : 'Minimalist Mode'}
        </span>
        <button 
          className={`theme-toggle ${isDarkMode ? 'dark-toggle' : 'light-toggle'}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle theme"
        >
          <span className="toggle-icon">{isDarkMode ? '🔥' : '☀️'}</span>
        </button>
      </div>

      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">
          {isDarkMode ? (
            <>
              <span className="title-accent">⚔️</span> Task Souls
            </>
          ) : (
            'Tasks'
          )}
        </h1>
        {isDarkMode && (
          <div className="stats-bar">
            <div className="stat souls-stat">
              <span className="stat-label">Souls</span>
              <span className="stat-value souls-count">{souls}</span>
            </div>
            <div className="stat level-stat">
              <span className="stat-label">Level</span>
              <span className="stat-value">{level}</span>
            </div>
            <div className="stat tasks-stat">
              <span className="stat-label">Tasks</span>
              <span className="stat-value">{tasks.filter(t => t.completed).length}/{tasks.length}</span>
            </div>
          </div>
        )}
      </header>


      {/* Task Input */}
      <div className="task-input-container">
        <input
          type="text"
          className="task-input"
          placeholder={isDarkMode ? "Enter your quest..." : "Add a task..."}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          className="add-button"
          onClick={addTask}
        >
          <span className="button-text">{isDarkMode ? '⚔️ Add' : 'Add'}</span>
          <span className="button-icon">{isDarkMode ? '⚔️' : '+'}</span>
        </button>
      </div>

      {/* Task List */}
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">{isDarkMode ? '⚔️' : '📝'}</div>
            <p className="empty-text">
              {isDarkMode 
                ? "No quests yet. Begin your journey..." 
                : "No tasks yet. Add one to get started."}
            </p>
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li 
                key={task.id} 
                className={`task-item ${task.completed ? 'completed' : ''} ${isDarkMode ? 'dark-task' : 'light-task'}`}
              >
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  id={`task-${task.id}`}
                />
                <label 
                  htmlFor={`task-${task.id}`}
                  className="task-text"
                >
                  {isDarkMode && task.completed && <span className="completed-icon">💀</span>}
                  {task.text}
                </label>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete task"
                >
                  {isDarkMode ? '⚔️' : '×'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Progress Indicator */}
      {tasks.length > 0 && (
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` 
              }}
            />
          </div>
          <p className="progress-text">
            {isDarkMode ? (
              <>Conquered: {tasks.filter(t => t.completed).length} / {tasks.length}</>
            ) : (
              <>{tasks.filter(t => t.completed).length} of {tasks.length} complete</>
            )}
          </p>
        </div>
      )}

            {/* Bonfire (Dark Mode Only) */}
      {isDarkMode && (
        <div className="bonfire-container">
          <button 
            className={`bonfire ${bonfireLit ? 'lit' : ''}`}
            onClick={restAtBonfire}
            title="Rest at Bonfire"
          >
            <div className="flame">🔥</div>
            <div className="bonfire-base">⚱️</div>
          </button>
          {bonfireLit && <p className="bonfire-text">Bonfire Lit</p>}
        </div>
      )}


      {/* Achievement Toast (Dark Mode Only) */}
      {showAchievement && isDarkMode && (
        <div className="achievement-toast">
          <div className="achievement-icon">🏆</div>
          <div className="achievement-content">
            <div className="achievement-title">{showAchievement.title}</div>
            <div className="achievement-desc">{showAchievement.description}</div>
          </div>
        </div>
      )}

      {/* Achievements Panel (Dark Mode Only) */}
      {isDarkMode && achievements.length > 0 && (
        <div className="achievements-panel">
          <h3 className="achievements-title">🏆 Achievements</h3>
          <div className="achievements-list">
            {achievements.slice(-3).reverse().map(ach => (
              <div key={ach.id} className="achievement-badge">
                <span className="badge-title">{ach.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <footer className="app-footer">
        {isDarkMode ? (
          <p className="footer-text">
            "Don't you dare go Hollow" - Complete your quests
          </p>
        ) : (
          <p className="footer-text">
            Simple. Clean. Productive.
          </p>
        )}
      </footer>
    </div>
    </div>
  )
}

export default App