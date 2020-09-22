<template>
  <div class="search">
    <div class="search-table">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">名称</th>
              <th class="text-left">技能</th>
              <th class="text-left">薪酬</th>
              <th class="text-left">职务</th>
              <th class="text-left">概述</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.skill }}</td>
              <td>{{ item.salary }}</td>
              <td>{{ item.duty }}</td>
              <td>{{ item.summary }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div style="margin:0 auto;" class="grey--text">Presented by 李智,刘泽铖,徐正浩,李蕴祺,陶嘉辰,俞晓锋,于嘉伟,宋逸群,李俊松</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desserts: [],
    }
  },
  mounted () {
    console.log(this.$store.state.searchDataList);
    this.desserts = this.$store.state.searchDataList;
  },
  methods: {
    clickHandler () {
      this.$router.push({ name: 'Central' })
    }
  }
}
</script>

<style  scoped>
.search {
  width: calc(100vw);
  background-image: url("./../assets/bg.jpeg");
  background-size: cover;
  min-height: calc(100vh);
  padding-top: 50px;
  position: relative;
}
.search-table {
  width: 1300px;
  margin: 0 auto;
}
.grey--text {
  position: absolute;
  bottom: 30px;
  color: #fff;
  left: 30%;
}
</style>