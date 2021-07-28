

public
 ┣ .DS_Store
 ┣ favicon.ico
 ┣ index.html
 ┣ logo192.png
 ┣ logo512.png
 ┣ manifest.json
 ┗ robots.txt
src
 ┣ actions
 ┃ ┣ auth.js
 ┃ ┣ events.js
 ┃ ┗ ui.js
 ┣ auth
 ┃ ┗ LoginScreen.js
 ┣ calendar
 ┃ ┣ CalendarEvent.js
 ┃ ┣ CalendarModal.js
 ┃ ┗ CalendarScreen.js
 ┣ helpers
 ┃ ┣ calendar-messages.js
 ┃ ┣ fetchWithToken.js
 ┃ ┣ fetchWithoutToken.js
 ┃ ┣ hello.js
 ┃ ┗ prepareEvents.js
 ┣ hooks
 ┃ ┗ useForm.js
 ┣ reducers
 ┃ ┣ authReducer.js
 ┃ ┣ calendarReducer.js
 ┃ ┣ rootReducer.js
 ┃ ┗ uiReducer.js
 ┣ router
 ┃ ┣ AppRouter.js
 ┃ ┣ PrivateRoute.js
 ┃ ┗ PublicRoute.js
 ┣ store
 ┃ ┗ store.js
 ┣ styles
 ┃ ┣ base
 ┃ ┃ ┣ _base.scss
 ┃ ┃ ┗ _settings.scss
 ┃ ┣ components
 ┃ ┃ ┣ _auth.scss
 ┃ ┃ ┣ _calendar.scss
 ┃ ┃ ┗ _ui.scss
 ┃ ┗ styles.scss
 ┣ types
 ┃ ┗ types.js
 ┣ ui
 ┃ ┣ AddNewFab.js
 ┃ ┣ DeleteEventFab.js
 ┃ ┗ Navbar.js
 ┣ CalendarApp.js
 ┣ index.js
 ┗ setupTest.js
 ┣ .env.development
 ┣ .env.production
 ┣ .gitignore
 ┣ .prettierrc
 ┣ README.md
 ┣ package-lock.json
 ┗ package.json