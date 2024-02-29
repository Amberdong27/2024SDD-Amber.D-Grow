# Maintenance 
This application is run on a PWA system, where the SQL database is used for the study tips function. 

## Main Variables 
### Study Timer

### Study Planner

### Study Tips


## List of Functions 
### Study Timer 
- 'startTimer()' - Calculates study time from getting current time + user input time 
- 'Timer()' - Is the countdown, for every second calculates and display remaing hours, minutes and seconds. 
- 'stopTimer()' - Pause timer, enable unpause button, sets a interval time 
- 'breakTime()' - Calculate break timer from getting current time + 5 minutes for display 
- 'resumeTimer()' - Get remaining time, and unpause timer, enable pause button 
- 'timeLeft()' - Calculate new study time end from getting current time + remaining time
- 'endTimer()' - Clears and stops all SetIntervals, switches to end UI  
- 'success()' - When timer ends naturally displays successful end UI 
- 'finishUI()' - Button modification for end UIs 
- 'checknotify()' - Checks user's notification settings 

Other Notes: 
- Clock and Current Timer is set using LocaleTime function 
- User can only input Hours and Minutes 
- Break Time goes for an additional 30 seconds as a leeway 
- Changes between images/graphics
    - Pot -> Setting Time
    - Growing Plant/Sprout -> Timer counting down 
    - Watering Plant -> Pausing Timer (Break Time)
    - Dead/Wilted Plant -> User ends timer early 
    - Grown Plant -> Timer ends naturally 



### Study Planner
- 'addTask()' - Adds Task to taskArray and Due Date to deadlineArray
- 'displayTask()' - Gets items from local storage arrays and displays them as a task card
- 'removeTask()' - Gets the item by index and removes from corresponding array and re-store them into local storage
- 'loadTask()' - When planner first loads checks if there are any items in array and displays them 

Other Notes: 
- Displayed stored task in a task card including: Task Details, Due Date & Delete Task

### Study Tips
- 'appendData()' - Pulls tips data from SQL database and creates displays for each of them 
- 'selection()' - Shows specific data depending on user selection using dropdown 

Other Notes 
- Data is organised by tipID, name, details 
    - ID is organised from 1 -> last tip number 

## Errors and Issues with Applications
- Lag of displaying locale time clock in the Study Timer and Date for the Study Tips 
