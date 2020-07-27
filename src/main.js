import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './icons' // icon
import {
  Button,
  Col,
  Row,
  Form,
  Field,
  Search,
  Icon,
  Tag,
  Collapse,
  CollapseItem,
  Image as VanImage,
  Divider

} from 'vant'
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(Form)
Vue.use(Field)
Vue.use(Search)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(VanImage)
Vue.use(Divider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
