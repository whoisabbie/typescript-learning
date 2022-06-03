const add = (a : number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void means this function can return null or undefined or nothing
};

const throwError = (message: string): never => {
  throw new Error(message);
  // use never when you expect your function to never return anything
  // i.e. few of the lines won't be executed due to throw, etc.
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015 Destructuring variables in params only

// const logWeather = ({ 
//   date, 
//   weather 
// }: { 
//   date: Date, 
//   weather: string 
// }): void => {
//   console.log(date);
//   console.log(weather);
// };


logWeather(todaysWeather);