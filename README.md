## Mobile Weather App Challenge

Welcome, entrepid developer! Your mission, should you choose to take it, a weather app that displays the weather for a zip code using the [Weather API](https://www.weatherapi.com/docs/) and the tooling of your choice!

Please take a look below at some project guidelines:

### Project Conditions

3 hour time limit (if you get it done quicker, that's great! but please do not spend more than 3 hours)

Once completed, zip up the project and with and special instructions if needed. Please email it back to the person who contacted you. Along with the completed source code, please include an explanation of technologies used, reasoning behind architecture decisions, and any other pertinent information you feel important to convey as you worked through the project.

We've provided a boilerplate expo typescript project in this repo to get you up and running, but feel free to disregard if you have your preference of libraries / tools!

### Requirements

Create a weather app that given a zip code, it displays the daily forecast. You will use the API linked above but you will have to create your own account. It includes plenty of usage for the scope of this project as part of their free tier. The UI is entirely up to you but feel free to include

The zip code should persist through app restarts.

Expand the scope of the app to include 3 day and 7 day forecasts.

Introduce the ability to "favorite" zip codes that will be displayed at the top of the screen when the app is opened. Each zip code will be "expandable" to display daily forecast, 3 day, and 7 day

Ensure any components, state, or controllers are covered by unit tests.

Be sure to write cogent tests that are self documenting and test both happy + failure paths!

### Stretch goals
- Use user's current location as default
- Setup app to receive weather alert push notifications based on their zip code the last time they entered the app. In-app notifications can be used to simulate remote push notifications.
- Mimic Apple weather app UI with swipe gestures to navigate between favorited zip codes
- Make the app social! Monitor the weather your friends are experiencing by adding friends in your app then subscribing to updates.

### Libraries to consider

There are some key libraries you may want to consider in your project (but not required!):

| Type      | Example |
| ----------- | ----------- |
| HTTP Client      | Fetch, Axios |
| State Management   | Context/Hooks, Redux, MobX        |
| Unit Testing   | Jest        |
