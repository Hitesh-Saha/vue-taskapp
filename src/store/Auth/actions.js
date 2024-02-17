import { logIn, signUp } from "@/services/firebase"

const authActions = {
    login(context,payload) {
        // const token = payload.username + parseInt(Math.random(1,5) * 100) *20
        // localStorage.setItem('x-auth-token', JSON.stringify(token))
        logIn(payload).then((user) => {
            if(user.accessToken != null) {
                localStorage.setItem('x-auth-token', JSON.stringify(user.accessToken))
                context.commit('setToken',{token: user.accessToken, username: user.displayName})
                return true;
            }
        }).catch((error) => {
            console.log(error.errorMessage)
        })
    },

    signup(context, payload) {
        // const token = payload.username + parseInt(Math.random(1,5) * 100) *20
        // localStorage.setItem('x-auth-token', JSON.stringify(token))
        signUp(payload).then((user) => {
            if(user.accessToken != null) {
                localStorage.setItem('x-auth-token', JSON.stringify(user.accessToken))
                context.commit('setToken',{token: user.accessToken, username: user.displayName})
                return true;
            }
        })
        .catch((error) => {
            console.log(error.errorMessage)
        })
    }

}

export default authActions