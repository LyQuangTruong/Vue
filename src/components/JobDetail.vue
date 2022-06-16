<template>
    <li>
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
            <p>{{ job.salary }} repuss</p>
        </div>
        <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti nesciunt atque ratione quam quaerat quae ex, itaque est tempore doloremque saepe nostrum aspernatur ad doloribus illo laudantium impedit, repudiandae eligendi?</p>

        </div>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Flash } from '@/types/Job'

export default defineComponent({
    name: 'JobDetail',
    props: {
        job: {
            type: Flash,    
            required: true
        }
    },
    setup(props) {
    }
})
</script>