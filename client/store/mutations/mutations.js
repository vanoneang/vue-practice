export default {
  updateCount (state, num) {
    state.count = num
  },
  fillTodos (state, todos) {
    state.todos = todos
  },
  doLogin (state, userInfo) {
    state.userInfo = userInfo
  }
}
