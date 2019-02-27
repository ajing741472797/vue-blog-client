import auth from '@/api/auth'


const state = {
    user: null,
    isLogin: false
}
const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}
const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }

}
const actions = {
    login({ commit }, { username, password }) {
        return auth.login({ username, password })
            .then(res => {
                commit('setUser', { user: res.data })
                commit('setLogin', { isLogin: true })
            })
    },//上面和下面 加then 不加then 两种写法。下面的写法返回的是一个promise对象，调用函数时可以加then，如 'this.checkLogin().then()'
    async register({ commit }, { username, password }) {
        let res = await auth.register({ username, password })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
        return res.data
    },
    async logout({ commit }) {
        await auth.logout()
        commit('setUser', { user: null })
        commit('setLogin', { isLogin: false })
    },
    async checkLogin({ commit, state }) {
        if (state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin', { isLogin: res.isLogin })
        if (!res.isLogin) return false
        commit('setUser', { user: res.data })
        return true
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}