<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";

import type {IJob} from '@/types/Job';

export default defineComponent({
  name: 'App',
  setup(){
   
  }


    // cách 2
    // const state = reactive({
    //   name: 'Link',
    //   age: 25 as string | number
    // })
    // return { ...toRefs(state)}

    // cach 3
    // const name = ref('Link')
    // const age = ref<number | string>(25)

    // return {age, name}


  // },
  // cách 1
  // data(){
  //   return {
  //     name: 'Link',
  //     age: 25 as number | string
  //   }
  // },
  
  // methods: {
  //   changeName(name: string){
  //     this.name = name;
  //     return name;
  //   },
  //   changeAge(age: string | number){
  //     this.age = age;
  //     return age;
  //   }
  // }
})
</script>
  
