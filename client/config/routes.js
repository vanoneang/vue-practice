const Todo = () => import('../views/todo/todo.vue')
const Login = () => import('../views/login/login.vue')

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // props: true, /app/:id可以直接把id通过props传递过去，(route) => ({id:roure.query.id})
    component: Todo,
    name: 'app',
    meta: {
      keepAlive: true, // 需要被缓存
      title: 'this is todolist',
      description: '长尾关键词'
    },
    beforeEnter (to, from, next) {
      console.log('will go to app path')
      next()
    }
  },
  {
    path: '/login',
    component: Login
  }
]
