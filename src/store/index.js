import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapList : [
      { router: "recommend", text: '推荐' },
      { router: 'news_hot', text: '热点' },
      { router: 'news_society', text: '社会' },
      { router: 'news_entertainment', text: '娱乐' },
      { router: 'news_military', text: '军事' },
      { router: 'news_tech', text: '科技' },
      { router: 'dcdapp', text: '汽车' },
      { router: 'news_sports', text: '体育' },
      { router: 'news_finance', text: '财经' },
      { router: 'news_fashion', text: '时尚' },
      { router: 'news_world', text: '国际' },
      { router: 'news_game', text: '游戏' },
      { router: 'news_travel', text: '旅行' },
      { router: 'news_history', text: '历史' },
      { router: 'news_discovery', text: '探索' },
      { router: 'news_food', text: '美食' },
      { router: 'news_baby', text: '育儿' },
      { router: 'news_regimen', text: '养生' },
      { router: 'news_story', text: '故事' },
      { router: 'news_essay', text: '美文' }
    ],
    initList : [
      { router: "recommend", text: '推荐' },
      { router: 'news_hot', text: '热点' },
      { router: 'news_society', text: '社会' },
      { router: 'news_entertainment', text: '娱乐' },
      { router: 'news_military', text: '军事' },
      { router: 'news_tech', text: '科技' },
      { router: 'dcdapp', text: '汽车' },
      { router: 'news_sports', text: '体育' },
      { router: 'news_finance', text: '财经' },
      { router: 'news_fashion', text: '时尚' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    //备选项
    alternativeList :state => state.mapList.filter(el=>!initList.includes(el))
  }
})
