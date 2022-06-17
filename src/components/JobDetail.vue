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

    <ul>
        <li v-for="job in jobs" :key="job.id">
            <h2>{{ job.title}} in {{ job.location }}</h2>
            <div class="salary">
                <p>{{ job.salary }} repuss</p>
            </div>
            <div class="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti nesciunt atque ratione quam quaerat quae ex, itaque est tempore doloremque saepe nostrum aspernatur ad doloribus illo laudantium impedit, repudiandae eligendi?</p>

            </div>
        </li>
    </ul>
   
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
// cách truyền từng tiem con vào
// import  { FlashDomain} from '@/types/Job'


// cách truyền mảng vào
import type { FlashDomain, IJob} from '@/types/Job'



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
        }
    },
})
</script>