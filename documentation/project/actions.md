<!-- prettier-ignore -->
### Actions

---

Summary of the actions that each function executes within the code

```javascript
export const startLogin = (email, password) => {

}
```

| Actions                                                    |
| ---------------------------------------------------------- |
| Send email and password                                    |
| Connect with fetchWithOutToken throught GET method and url |
| Save token in localStorage                                 |
| Save date when token is saved                              |
| Dispatch login or error                                    |

---

```javascript
export const startRegister = (name, email, password) => {
	
}
```

| Actions |
| ------- |
| Send name, email and password        |
| Connect with fetchWithOutToken throught POST method and url        |
| Save token in localStorage        |
| Save date when token is saved        |
| Dispatch login or error        |

---

```javascript
export const startChecking = () => {
	
}
```

| Actions |
| ------- |
| Send token to fetchWithToken for renew it        |
| Save token in localStorage        |
| Save date when token is saved        |
| Dispatch login or checkingFinish        |

---

```javascript
export const startLogout = () => {
	
}
```

| Actions |
| ------- |
| Clear localStorage        |
| Clear active event        |
| Logout        |

### [Back](../README.md) :leftwards_arrow_with_hook:
