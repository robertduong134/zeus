import axios from "axios";
import jwtdecode from "jwt-decode";

const API_URL = "http://103.74.113.47:1111/identity-service/api/auth/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    this.logout();
                    this.setToken(JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return jwtdecode(this.getToken());
    }

    isLogin() {
        const token = this.getToken();
        console.log(token);
        return token && this.isTokenExpired(token);
    }

    isTokenExpired (token) {
        try {
            const decoded = jwtdecode(token.accessToken);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else{
                return false;
            }
        }
        catch (err) {
            return false;
        }
    }

    getToken () {
        return JSON.parse(localStorage.getItem('token'));
    }

    setToken (token) {
        localStorage.setItem("token", token);
    }
}

export default new AuthService();