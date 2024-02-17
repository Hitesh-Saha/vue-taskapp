const authGetters = {
    isAuth(state) {
        return state.isLoggedIn
    },
    getName(state) {
        return state.username
    }
}
export default authGetters