import axios from "axios";
import { environment } from "environments/environment";

export interface LoginReqBody {
  email: string;
  password: string;
  rememberMe?: string;
}
const apiUrl = `${environment}/auth`;
let authenticated = false;
let accessToken = sessionStorage.getItem('accessToken') ?? localStorage.getItem('accessToken') ?? '';
let loggedEmail = sessionStorage.getItem('loggedEmail') ?? localStorage.getItem('loggedEmail') ?? '';

function setAccessToken(stringData: string) {
  const {token, rememberMe} = JSON.parse(stringData);
  rememberMe
    ? localStorage.setItem('accessToken', token)
    : sessionStorage.setItem('accessToken', token);
}

function setLoggedEmail(stringData: string) {
  const {email, rememberMe} = JSON.parse(stringData);
  rememberMe
    ? localStorage.setItem('accessToken', email)
    : sessionStorage.setItem('accessToken', email);
}

export class AuthService {
  /**
   * Sign in
   */
  signIn(loginReqBody: LoginReqBody) {
    // Throw error, if the user is already logged in
    if (authenticated) {
      return console.log('User is already logged in.');
    }
    const shouldRememberSession = loginReqBody.rememberMe;
    return axios
      .post(`${apiUrl}/login`, loginReqBody)
      .then((response) => {
        const {data} = response;
        if (data.accessToken) {
          // Store the access token in the local storage
          accessToken = JSON.stringify({token: data.accessToken, rememberMe: shouldRememberSession});
          setAccessToken(accessToken);
          loggedEmail = JSON.stringify({email: loginReqBody.email, rememberMe: shouldRememberSession});
          setLoggedEmail(loggedEmail);
          // Set the authenticated flag to true
          authenticated = true;
        }
      })
  }

  /**
   * Sign out
   */

  signOut() {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('loggedEmail');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('loggedEmail');
    // Set the authenticated flag to false
    authenticated = false;
  }
}

