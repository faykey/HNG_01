// Create a new Date object
const currentDate = new Date();

// An array of day names
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
const dayIndex = currentDate.getDay();

// Get the day name based on the day index
const currentDayOfWeek = daysOfWeek[dayIndex];

// Find the first div with the class "details" by its data-testid attribute
const currentDayDiv = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

// Inject the current day of the week into the div's content
currentDayDiv.textContent = `${currentDayOfWeek}`;

function updateUTCTime() {
  // Get the current UTC time in milliseconds
  const currentUTCTime = new Date().getTime();

  // Find the second div with the class "details" by its data-testid attribute
  const currentUTCTimeDiv = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  // Inject the current UTC time into the div's content
  currentUTCTimeDiv.textContent = currentUTCTime;

  // Update the time every second (1000 milliseconds)
  setTimeout(updateUTCTime, 1000);
}

// Call the function to start updating the time
updateUTCTime();
