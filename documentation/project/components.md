# Components :electron:

---
<br/>

## Login Screen  

```javascript
< LoginScreen />
```

Main component of the Calendar App. It shows a form that offers the user login or registration.

:file_folder: src / auth / LoginScreen

---

#### How it works :bulb:  

* Don´t receive arguments
* Use useDispatch to collect information from two forms
* Contains the login function, which sends email and password to the backend
* Contains the register function, which sends name, email and password to the backend. Check the passwords are same and the required length

---
#### Where it´s rendered :question:  


```javascript
< AppRouter />
   <PublicRoute >
      {LoginScreen}
   </PublicRoute>
```
* It´s inside a PublicRoute component
* If the user has not been authenticated, he can only see the public path, that is, the login or registration.
* If the token has expired it will be expelled to this component
* The token expires every two hours

---
:file_folder: src / router / AppRouter

---
<br />

## Calendar Event  

```javascript
< CalendarEvent />
```

Shows the event after being created by the user in the corresponding cell in the calendar.

:file_folder: src / calendar / CalendarEvent

---

#### How it works :bulb:  

* Receive the event as an object 
* Return the event with a title and the name of his creator

---
#### Where it´s rendered :question:  


```javascript
< CalendarScreen />
   <Calendar >
      components={{
		event: CalendarEvent,
		}}
   </Calendar>
```
* It`s passed to the calendar as a prop

---
:file_folder: src / calendar / CalendarScreen

---
<br />

## Calendar Modal  

```javascript
< CalendarModal />
```

It's the component that renders a popup to create or edit an event. It's probably the most important of all components because it has the highest communication with the backend, and performs the greatest number of checks.

Furthermore, it contains several functions that interact between the user and the calendar.

:file_folder: src / calendar / CalendarModal

---

#### How it works :bulb:  

* Don´t receive arguments
* Launches a popup where the user can create an event.
* The user must select a start date, an end date, a title, and a description.
* Before saving the event, security checks are carried out, this way no garbage is stored in the database
* If it passes all the tests it saves the event in the database

---
#### Where it´s rendered :question:  


```javascript
< CalendarScreen />
   <div >
      <CalendarModal />
   </div>
```
* It's rendered in the return of CalendarScreen component

---
:file_folder: src / calendar / CalendarScreen

---
<br />

## Calendar Screen  

```javascript
< CalendarScreen />
```

It's the component that shows the entire calendar on the screen.

:file_folder: src / calendar / CalendarScreen

---

#### How it works :bulb:  

* Don´t receive arguments
* Shoot the actions that allow the user to interact with the calendar events
* Render calendar with all it's props
* Shows button to add or delete events
* Launches the modal component to create or edit events

---
#### Where it´s rendered :question:  


```javascript
< AppRouter />
   <PrivateRoute >
      {CalendarScreen}
   </PrivateRoute>
```
* It´s inside a PrivateRoute component
* If the user is authenticated, he is redirected to the calendar
* Contains the main calendar styles
* If the user has not been authenticated, he can only see the public path, that is, the login or registration.
* If the token has expired the user will be expelled to login component
* The token expires every two hours

---
:file_folder: src / router / AppRouter

---
<br />

## App Router

```javascript
< AppRouter />
```

Component rendered and optimized using Redux. This allows you to establish a tree of public and private routes, which in turn call the application components.

:file_folder: src / router / AppRouter

---

#### How it works :bulb:  

* Don´t receive arguments
* Directs the user to a public or private route, depending on the state of their authentication. It also has a default public path in case of writing a wrong URL within the application.

---
#### Where it´s rendered :question:  


```javascript
< CalendarApp />
   <Provider store={store}>
      <AppRouter />
   </Provider>
```
* It's rendered in the main component of the application, the highest level.
* It is inside the Provider component that belongs to Redux. The store is an immutable object tree in Redux. A store is a state container which holds the application's state.

---
:file_folder: src / CalendarApp

---
<br />

## Private Route  

```javascript
< PrivateRoute />
```

Check through a boolean value if the user is authenticated.

:file_folder: src / router / PrivateRoute

---

#### How it works :bulb:  

* Receives a boolean value and returns the information to the parent component
* Keeps the requested path and saves it in the localStorage. After, the user is redirected to the path when has authenticated

---
#### Where it´s rendered :question:  


```javascript
< Router >
   </PrivateRoute>
< Router />
```
* Redirect user to CalendarScreen

---
:file_folder: src / router / PrivateRoute

---
<br />

## Public Route  

```javascript
< PublicRoute />
```

Check through a boolean value if the user is authenticated.

:file_folder: src / router / PublicRoute

---

#### How it works :bulb:  

* Receives a boolean value and returns the information to the parent component

---
#### Where it´s rendered :question:  


```javascript
< Router >
   </PublicRoute>
< Router />
```
* Redirect user to LoginScreen

---
:file_folder: src / router / PublicRoute

---
<br />

## Calendar App  

```javascript
< CalendarApp />
```

Component rendered in the root of the project

:file_folder: src / CalendarApp

---

#### How it works :bulb:  

* Return AppRouter component, this is inside the Provider component that belongs to Redux. The store is an immutable object tree in Redux. A store is a state container which holds the application's state.

---
#### Where it´s rendered :question:  


```javascript
src
   <CalendarApp /> 
```

---

### [Back](../README.md) :leftwards_arrow_with_hook: