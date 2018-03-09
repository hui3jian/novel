import List from './list.vue'
import ListItem from './list-item.vue'

const _List = {};

_List.install = function (Vue, obj = {}) {
  Vue.component(List.name, List);
  Vue.component(ListItem.name, ListItem);
}

export default _List;
