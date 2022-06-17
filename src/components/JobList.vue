<template>
<div class="job-list">
    <button>Order by title</button>
    <button>Order by salary</button>
    <button>Order by location</button>

    <ul>
        <!-- <JobDetail v-for="job in jobs" :key="job.id" :job="job"/> -->
        <JobDetail :jobs="jobs" />
    </ul>
</div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import JobDetail from './JobDetail.vue'

import  {FlashDomain} from '@/types/Job'

// them 1 cách nếu không muốn new đối tượng mới thì sài import type
// import type {FlashDomain, IJob} from '@/types/Job'


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
        
        const jobs = ref<Array<FlashDomain>>(array.map((item) => new FlashDomain(item)));

        // Sử dụng cách này khi thêm import type
        // const jobs = ref<Array<IJob>>(array.map((item) => item));
        console.log("job", jobs.value); //Proxy{}
       
        return {
            jobs,
        };
    }
})
</script>

<style scoped>
.job-list{
    max-width: 960px;
    margin: 40px auto;
}
.job-list ul{
    padding: 0;
}
.job-list li {
    list-style-type: none;
    background:cadetblue;
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
</style>
