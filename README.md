# Speak-Notes

A voice note transcription app using the JavaScript Web Speech API; the app transcribes recognised speech into text and shows the result in a preview format and a note format, with real-time edit. The preview shows the transcribed speech simultaneously as speech is being recognised, and the note form displays recognised speech which sound complete, as in a complete sentence. separate sounds are played when the speech recognition service is started and stopped, as a cue to users. The app listens in the language provided by the user agent. It allows to download the transcript, which is split into a new line at every period, as a text file.\
 Using modern Web APIs, the transcript can be copied to the clipboard, shared to system applications, and text files can be imported.

This project was bootstrapped with [Vite](https://vitejs.dev).

## Notes

- MS Edge seems to give faster and more accurate results - the results it gives syncs well with the recognised speech; in fact, the transcript is punctuated.
- Ubuntu's Edge crashes on accessing the API.
- Brave browser supports it, so it seems, but always shows a network error - a Brave bug. [Here's a link that describes the issue](https://community.brave.com/t/years-of-brave-failing-google-voice-search-with-no-internet-connection-error/395749/2)
- Brave on mobile has support for the API, at least on Brave 1.49.129, Chromium 111.0.5563.116 - surprising though.
- Firefox lacks support for the API, currently.
- Some browsers use a server-based recognition engine. The audio is sent to a web service for recognition processing, so it works online only.
- poor results in case of poor network signal, apparently.

## Demo

https://github.com/user-attachments/assets/69f92096-76b3-4e78-9eeb-fcdb3865ad2e

## Start the App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Miscellaneous

Currently, the repo has 3 branches: main, feat, develop.

The main branch contains the MVP.

The feat branch contains a experimental code: getting access to the user's media device, making a live video of it; getting the user's audio device details.

The develop branch contains the latest app features - might seem counter-intuitive a bit, haha.
"# notesApp" 
