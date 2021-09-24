# Frontend Challenge

## Application Design

The application main global state revolves around the selecting and storing favorites of zip codes. The application structure
itself utilizes react, selectors, and RTK query heavily to allow for more stateless components and avoiding pushing props 
all over the place.
```
           Weather     
   //         ||           \
Favorites  Forecast   (ZipFormDialog)
```

## Libraries Chosen

### Redux Toolkit

Given the requirement of storage of information between app loads, I thought Redux + Redux Persist would be a good fit.
I ended up following the directory structure recommended by Redux Toolkit, where the app is broken up into feature sets.

### React Native Paper

Just wanted a semi sane starting point for some UI, still doesn't look great, but whatever.

### Formik

Forms are notoriously a challenge to handle correctly with any UI application. Formik proved to ease that burden a bit by 
providing many sensible defaults for validation, and controlling form state easily through the use of hooks.

### dotenv

I didn't want to share my API Key, but wanted to push the code to github, so I ended up using dotenv and extra constants 
in order to maintain it locally, but make sure I didn't push to source control.

Yes, I'm aware that this is not a secure practice in a production application as someone with enough need could extract that file
from the application binary. Ideally, if the app needed to authenticate, the user would authenticate with a backend service via
something like OAuth.

## Challenges

* Fighting formik, got stuck on some weird onPress issues with Formik and React Native
* Setting up the boilerplate ate up quite a bit of time
* Sometimes googling things for help led me to React Native (ejected) project solutions, when there was a much better option
using Expo. This was especially true with the dotenv

## Stuff I'd to do given more time

* I definitely did not get as many unit tests written as I wanted to. This partially due to trying to use new libraries to save some time
and running into issues with React Native specifically.
* The extra stuff