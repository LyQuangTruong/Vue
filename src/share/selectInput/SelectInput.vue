<template>
    <div class="select-mini">
        <div 
            class="select-input"
            @click="toggleDropdown"
            :class="dropdownOpen ? 'active-select': ''"
        >
            <div class="select-content">
                <template v-if="selected && selected.name">
                    {{selected && selected.name}}
                </template>
                <template v-else>
                    <div class="placeholder">
                        {{placeholder}}
                    </div>
                </template>
            </div>
            <CaretDownBold class="icon" />
        </div>
        
    <ul class="options" v-if="dropdownOpen">
        <li 
            v-for="(option, key) in props.options" 
            :key="key"
            class="option-item"
            @click="select(option)"
            :class="{selected: selected === option.value}"
        >
            {{option.name}}
        </li>
    </ul>
    </div>
   
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import CaretDownBold from '@/share/assets/icons/CaretDownBold.vue';


interface Props {
    options: Array<any>;
    value: number | string;
    placeholder: string;
    disabled?: boolean;
}
//state
const dropdownOpen = ref<boolean>(false);
//props
const props = withDefaults(defineProps<Props>(), {
    disabled: false,
})

//computed
const selected = computed<any>(() => {
    return props.options.find(item => item.value === props.value)
})

//method
function toggleDropdown (){
    if(!props.disabled){
        dropdownOpen.value = !dropdownOpen.value;
    }
}

//emit type based
const emit = defineEmits<{(e: 'input', value: string): void}>();

function select(option: any){
    emit("input", option.value);
    closeDropdown();
}

function closeDropdown() {
    dropdownOpen.value = false;
}
 


</script>

<style lang="scss" scoped>
@import '@/assets/scss/placeholder.scss';
.select-mini {
    position: relative;
    cursor: pointer;
    .arrow-icon {
        margin-right: 2px;
    }
    width: 411px;
    .select-input{
        display: flex;
        align-items: center;
        border: 1px solid #DCDCDC;
        height: 40px;
         width: 100%;
        .active-select {
            background-color: #f0f4f8;
        }
        svg {
            margin-right: 10px;

        }
    }
    .select-content{
        display: flex;
        flex: 1;
        max-height: 200px;
        height: 30px;
        padding-left: 10px;
        padding-top: 10px;
    }
}
    

.options{
    list-style: none;
    margin: 0 auto;
    position: absolute;
    flex: 1;
    padding-left: 0;
    background-color: bisque;
    border: 1px solid #DCDCDC;
    .option-item {
    padding-left: 10px;
    line-height: 40px;
    width: 400px;
    max-height: 300px;
    overflow-y: auto;
        &:active,
        &:hover {
            background: #627d98;
            color: #ffffff;
        }
}
}

</style>
