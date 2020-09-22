<template>
  <div class="search">
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>我想成为</v-toolbar-title>
                  <!-- <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip> -->
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="query" label="一个什么样的人" type="text"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="clickHandler">查询</v-btn>
                  <!-- <v-text-field v-module="answer" tyep="text"> </v-text-field> -->
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
    <div style="margin:0 auto;" class="grey--text">Presented by 李智,刘泽铖,徐正浩,李蕴祺,陶嘉辰,俞晓锋,于嘉伟,宋逸群,李俊松</div>
  </div>
</template>

<script>

import Bmob from "hydrogen-js-sdk";
// var intro;
// var duty;
// var updatedate;
// var name;
// var id;
// var salary;
// var skill;
// var summary;
export default {
  // props: {
  //   source: String,
  // },
  data () {
    /*返回一个query是一个BombPromise对象的指针*/
    return {
      // answer: '',
      query: '',
    }
  },
  methods: {
    clickHandler () {
      console.log('clk');//测试语句
      console.log(this.query);
      if (this.query) {
        const quest = Bmob.Query('Article');
        quest.equalTo("name", "==", this.query);
        /*res参数作为一个对象，需要的信息都存储在res[0]对象之中，作用域只在then（）函数内部*/
        quest.find().then(res => {
          console.log(res);
          if (res && Array.isArray(res) && res.length) {
            this.$store.commit('setSearchData', res);
            this.$router.push({ name: 'SearchResult' })
          }
          // this.$store.commit("setName", res[0].text);
          // const intro = res[0].introduction;
          // duty = res[0].duty;
          // updatedate = res[0].updatedAt;
          // name = this.query;
          // id = res[0].objectId;
          // salary = res[0].salary;
          // skill = res[0].skill;
          // summary = res[0].summary;
          // //jsonObj = JSON.stringify(res[0]);
          // console.log(res[0]);
          // console.log("type of " + typeof (res[0].introduction));
          // document.write(JSON.stringify(res[0]));
        }).catch(err => {
          console.log(err)
          alert("暂无资料")
        });
        // document.wirte(res[0]);
        // console.log(res[0]);
        console.log("type is " + typeof (quest));
        //document.write(duty)


        // this.$router.push("/query/" + this.query);
      } else {
        alert('请输入内容');
      }
    }
  }
}
</script>

<style >
#inspire,
.search {
  background: skyblue !important;
}
</style>