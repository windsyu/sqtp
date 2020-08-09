<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>我想成为</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="query"
                    label="一个什么样的人"
                    
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="clickHandler" >查询</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import Bmob from "hydrogen-js-sdk";
var intro;
var duty;
var updatedate;
var name;
var id;
var salary;
var skill;
var summary;
var obj1={};
  export default {
    props: {
      source: String,
    },
    data(){
      intro:''
      return{
        query:'',
      }
    },
    methods:{
      clickHandler(){
        console.log('clk');//测试语句
        console.log(this.query);
        if(this.query==''){
          console.log('null');
        }
        else{
          const query = Bmob.Query('Article');
          query.equalTo("name","==",this.query);
         query.find().then(res => {
            this.$store.commit("setName",res[0].text);
            intro=JSON.stringify(res[0]);
            duty=res[0].duty
            updatedate=res[0].updatedAt
            name=this.query
            id=res[0].objectId
            salary=res[0].salary
            skill=res[0].skill
            summary=res[0].summary
            var jsonObj = JSON.stringify(res[0]);
            document.write(jsonObj)
              console.log(res[0].name)  
            }).catch(err => {
                console.log(err)
            });
            console.log(query);
            //document.write(duty)
            

          this.$router.push("/query/"+this.query);
        }
      }
    }
  }
</script>