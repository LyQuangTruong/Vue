<template>
<div class="job-list">
    <button>Order by title</button>
    <button>Order by salary</button>
    <button>Order by location</button>

    <ul>
        <JobDetail v-for="job in jobs" :key="job.id" :job="job"/>
    </ul>
</div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import JobDetail from './JobDetail.vue'

import {Flash} from '@/types/Job'

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

        //  const jobs = ref<Array<Flash>>([
        //     new Flash({title: 'farm worker', location: 'loi loi b', salary: '30000', id: '1'}),
        //     new Flash({ title: 'quarryman', location: 'death mountain', salary: '4000', id: '2'}),
        //     new Flash({ title: 'flute palyer', location: 'death mountain', salary: '35000', id: '3'}),
        //     new Flash({ title: 'fisherman', location: 'death mountain', salary: '21000', id: '4'}),
        //     new Flash({ title: 'prison guard', location: 'death mountain', salary: '5000', id: '5'})
        // ])
        const jobs = ref<Array<Flash>>(array.map((item) => new Flash(item)));
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
    background: white;
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
