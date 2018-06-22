import model from '../../model/client-model'
import notify from '../../components/notification/function'

const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: '先登录'
    })
  }
}

export default { // 处理异步修改数据
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num)
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  }
}
