<template>
<div class="job-list">
    <header>
        <div class="order">
            <button @click="handleClick('title')">Order by title</button>
            <button @click="handleClick('salary')">Order by salary</button>
            <button @click="handleClick('location')">Order by location</button>
        </div>
    </header>
    
    <!-- truyen item vao -->
    <!-- <ul>
        <JobDetail v-for="job in jobs" :key="job.id" :job="job"/>
    </ul> -->

    <JobDetail :jobs="jobs" :order="order" />


</div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import JobDetail from './JobDetail.vue'
//import cach nay neu sai huong doi tuong
// import  {FlashDomain} from '@/types/Job'

// them 1 cách nếu không muốn new đối tượng mới thì sài import type
import type {FlashDomain, IJob} from '@/types/Job'
import type OrderItem from "@/types/OrderTerm";


export default defineComponent({
    name: 'JobList',
    components: {
        JobDetail
    },
    setup() {
        const array = [
            {title: 'farm worker', location: 'loi loi b', salary: '30000', id: '1'},
            { title: 'quarryman', location: 'death mountain', salary: '4000', id: '2'},
            { title: 'flute palyer', location: 'death mountain', salary: '35000', id: '3'},
            { title: 'fisherman', location: 'death mountain', salary: '21000', id: '4'},
            { title: 'prison guard', location: 'death mountain', salary: '5000', id: '5'},
        ]

        //  const jobs = ref<Array<FlashDomain>>([
        //     new FlashDomain({title: 'farm worker', location: 'loi loi b', salary: '30000', id: '1'}),
        //     new FlashDomain({ title: 'quarryman', location: 'death mountain', salary: '4000', id: '2'}),
        //     new FlashDomain({ title: 'flute palyer', location: 'death mountain', salary: '35000', id: '3'}),
        //     new FlashDomain({ title: 'fisherman', location: 'death mountain', salary: '21000', id: '4'}),
        //     new FlashDomain({ title: 'prison guard', location: 'death mountain', salary: '5000', id: '5'})
        // ])
        // Có thể rút gọn như cách bên dưới
        
        // const jobs = ref<Array<FlashDomain>>(array.map((item) => new FlashDomain(item)));

        // Sử dụng cách này khi thêm import type
        const jobs = ref<Array<IJob>>(array.map((item) => item));
        console.log("job", jobs.value); //Proxy{}



        const order = ref<OrderItem>('title');
        const handleClick = (tern: OrderItem) => {
            order.value = tern
        }

        return {
            jobs, handleClick, order
        };
    }
})
</script>


<style scoped>
.job-list{
    max-width: 960px;
    margin: 40px auto;
}
header{
    margin: 0 auto;
    max-width: 600px;
}
.order{
    margin: 0 auto;
}
.order button{
    background-color: aquamarine;
    padding: 10px 15px;
    margin: 10px 5px;
    color: darkcyan;
    font-weight: 600;
}

</style>