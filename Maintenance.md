# Maintenance 
This application is run on a PWA system, where the SQL database is used for the study tips function. 
Most time related functions are run on the LocaleTime/Date function. Local Storage is also used to store task data.

## Installation 
The application is run on a Express Web Server and is built of node.js, therefore it is a requirement for developers if they wish to run their own servers. The servers and application is run through the Tempe High School GitHub. The application is also split between public and private files where the public files should be pushed forwards for user use such as the htmls, css and js files. While the private files such as the database are for the developer use. 

#### Extra Notes: 
- Each HTML that has a js attached have the same name for ease of understanding (expect the clock.js and date.js made specifically for those functions)
- All styling for every html is done in the globalStyle.css
- Images can be found in the images folder in the public files

## Main Variables 
### Study Timer
- `startTime` - gets locale time asstart time
- `endTime`- gets locale time and additional time for when timer ends 
- `plantGraphic` - Changes between images/graphics
    - Pot -> Setting Time
    - Growing Plant/Sprout -> Timer counting down 
    - Watering Plant -> Pausing Timer (Break Time)
    - Dead/Wilted Plant -> User ends timer early 
    - Grown Plant -> Timer ends naturally 
- `pauseduration` - gets locale time and adds additional time for break
- `difference` - calculate the difference between endDate and startDate
- `timerHours` - gets the first two substring of user input
- `timerMinutes` - gets the 3rd and 4th substring of user input 

### Study Planner
- `taskArray` - stores entered task until page reloads 
- `deadlineArray` - stores entered due dates until page reloads 
- `arrayIndex` - gets the item of that index and increment to get next time 
- `storedTasks` - local storage for tasks until deleted 
- `storedDates` - local storage for due dates until deleted
- `date.js` - gets the users current local time 

### Study Tips
- `tipID` - ID of the tip, ID is organised from 1 -> last tip number, from SQL database
- `name` - name of the tip from SQL database
- `details` - details/information of the tip from SQL database

## List of Functions 
### Study Timer 
- `startTimer()` - Calculates study time from getting current time + user input time 
- `Timer()` - Is the countdown, for every second calculates and display remaing hours, minutes and seconds. 
- `stopTimer()` - Pause timer, enable unpause button, sets a interval time 
- `breakTime()` - Calculate break timer from getting current time + 5 minutes for display 
- `resumeTimer()` - Get remaining time, and unpause timer, enable pause button 
- `timeLeft()` - Calculate new study time end from getting current time + remaining time
- `endTimer()` - Clears and stops all SetIntervals, switches to end UI  
- `success()` - When timer ends naturally displays successful end UI 
- `finishUI()` - Button modification for end UIs 
- `checknotify()` - Checks user's notification settings 
- `clock.js` - For accurate time, clock function is placed in a seperate js 

#### Other Notes: 
- User can only input Hours and Minutes 
- Break Time goes for an additional 30 seconds as a leeway 
- Cannot detect the difference between letters and integers (will error if letter is entered)

### Study Planner
- `addTask()` - Adds Task to taskArray and Due Date to deadlineArray
- `displayTask()` - Gets items from local storage arrays and displays them as a task card
- `removeTask()` - Gets the item by index and removes from corresponding array and re-store them into local storage
- `loadTask()` - When planner first loads checks if there are any items in array and displays them 
- `date.js` - For accurate date, date function is placed in a seperate js 

#### Other Notes: 
- Displayed stored task in a task card including: Task Details, Due Date & Delete Task

### Study Tips
- `appendData()` - Pulls tips data from SQL database and creates displays for each of them 
- `selection()` - Shows specific data depending on user selection using dropdown 


## List Errors and Issues with Applications
- Lag of displaying locale time clock in the Study Timer and Date for the Study Tips 
- Errors if you switch between pause and unpause to quickly due to calculation lag 
- Timer input box cannot detect the difference between letters and integers (will error if letter is entered)
