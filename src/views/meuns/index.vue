<!-- 菜单 -->
<template>
  <section class="app_wapper app_index_wapper app_meuns_wapper">
    <div v-for="item in meunsLists" :key="item.name">
      <p class="app_muens_title">{{item.name}}</p>
      <ul>
        <li v-for="(item2,index) in item.children" :key="index" @click="jumpTo(item2)">
          <span class="app_title_span">{{item2.name}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      meunsLists: [{
          name: '注册页面',
          children: [{
            name: '注册页面',
            link: ""
          }]
        },
        {
          name: '登陆页面',
          children: [{
              name: '合作方-登陆页面',
              link: ""
            },
            {
              name: '国合/分公司-登陆页面',
              link: ""
            }
          ]
        }, {
          name: '合作方',
          children: [{
              name: '首页',
              link: ''
            },
            {
              name: '预约拜访表单',
              link: ''
            }, {
              name: '预约管理',
              link: ''
            }, {
              name: '预约详情',
              link: ''
            }, {
              name: '个人中心',
              link: ''
            }
          ]
        }, {
          name: '国合方',
          children: [{
              name: '拜访管理',
              link: ''
            },
            {
              name: '个人中心',
              link: ''
            },
          ]
        },
        {
          name: '分公司',
          children: [{
              name: '拜访管理',
              link: ''
            },
            {
              name: '个人中心',
              link: ''
            }
          ]
        }
      ]
    }
  },
  mounted() {


  },
  methods: {
    jumpTo(data) {
      console.log(data)
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
@import '@/styles/indexAndSign.scss';

.app_meuns_wapper {
  box-sizing: border-box;
  padding: .50rem;


  .app_muens_title {
    color: #fff;
    font-weight: bold;
    background-color: #4CA2E2;
    position: relative;
    left: -.50rem;
    width: 3rem;
    padding-left: 0.30rem;

    // margin-bottom:.3rem;

  }

  ul {
    margin-bottom: .30rem;

    li {
      margin: 0.3rem 0;
      color: #fff;
      font-size: 0.24rem;
      border-bottom: 1px solid #fff;
      padding-bottom: 0.1rem;
    }
  }
}

</style>
