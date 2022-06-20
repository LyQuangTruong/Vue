<template>

<SelectInput 
    class="select-input-test"
    :value="valueSelect"
    :options="optionListSelect"
    @input="handeChange"
    placeholder="place holder"

>

</SelectInput>
  
</template>

<script lang="ts">
import SelectInput from '@/share/selectInput/SelectInput.vue';
import { defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'testCommon',
    components: {
        SelectInput
    },
    setup() {
        const valueSelect = ref<string>('');
        const optionListSelect = ref<any>([
        {
            id: '1',
            name: 'test 1',
            value: 'test 1',
        },
        {
            id: '2',
            name: 'test 2',
            value: 'test 2',
        },
         {
            id: '3',
            name: 'test 3',
            value: 'test 3',
        }
        ]);
        function handeChange(value: string) {
            valueSelect.value = value;
        } 
        return {
            valueSelect,
            optionListSelect,
            handeChange,
        }
      

    }
})
 
</script>