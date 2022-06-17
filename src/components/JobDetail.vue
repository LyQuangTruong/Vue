<template>
    <!-- cách truyền từng tiem con vào  -->

    <!-- <li>
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
            <p>{{ job.salary }} repuss</p>
        </div>
        <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti nesciunt atque ratione quam quaerat quae ex, itaque est tempore doloremque saepe nostrum aspernatur ad doloribus illo laudantium impedit, repudiandae eligendi?</p>

        </div>
    </li> -->

    <!-- cách truyền mảng vào -->

    <p>Ordered by {{order}}</p>
    <transition-group name="list" tag="ul">
    <!-- <ul> -->
        <li v-for="job in orderedJobs" :key="job.id">
            <h2>{{ job.title}} in {{ job.location }}</h2>
            <div class="salary">
                <p>{{ job.salary }} repuss</p>
            </div>
            <div class="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti nesciunt atque ratione quam quaerat quae ex, itaque est tempore doloremque saepe nostrum aspernatur ad doloribus illo laudantium impedit, repudiandae eligendi?</p>

            </div>
        </li>
    <!-- </ul> -->
    </transition-group>
  
   
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
// cách truyền từng tiem con vào
// import  { FlashDomain} from '@/types/Job'


// cách truyền mảng vào
import type { FlashDomain, IJob} from '@/types/Job'
import type OrderItem from '@/types/OrderTerm'
import { computed } from '@vue/reactivity'



export default defineComponent({
    name: 'JobDetail',
    // cách truyền từng tiem con vào
    // props: {
    //     job: {
    //         type: FlashDomain,    
    //         required: true
    //     }
    // },
    // cach truye mang
     props: {
        jobs: {
            // type: Array<IJob>, // FlashDomain cung dc
            type: Array as PropType<IJob[]>, // cach tren cung dc
            required: true
        },
        order: {
            type: String as PropType<OrderItem>,
            required: true
        }
    },
    setup(props){
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: IJob, b: IJob) => {
                console.log("a", a);
                return a[props.order] > b[props.order] ? 1: -1
            })
            }
        )
        return {orderedJobs}
    }
})
</script>
<style scoped>
.job-list ul{
    padding: 0;
}
.job-list li {
    list-style-type: none;
    background:beige;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}
.job-list h2{
    margin: 0 0 10px;
    text-transform: capitalize;
}
.salary{
    display: flex;
}
.salary img{
    width: 30px;
}
.salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
}
.list-move{
    transition: all 1s;
}
</style>
