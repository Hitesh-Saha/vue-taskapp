const authMutations = {
    setToken(state,payload) {
        state.username = payload.username
        state.token = payload.token
        state.isLoggedIn = true
    },
    logout(state) {
        state.isLoggedIn = false
    }
}
export default authMutations