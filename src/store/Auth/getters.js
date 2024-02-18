const authGetters = {
    isAuth(state) {
        return state.isLoggedIn
    },
    getName(state) {
        if(state.username != '') {
            return state.username
        }
        else {
            return 'Hitesh'
        }
    }
}
export default authGetters