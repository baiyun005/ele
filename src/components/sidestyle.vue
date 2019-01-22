<template>
    <cube-scroll-nav
    :side="true"
    :data="data"
    :current="current"
    @change="changeHandler"
    @sticky-change="stickyChangeHandler">
    <cube-scroll-nav-panel
        v-for="item in data"
        :key="item.name"
        :label="item.name"
        :title="item.name">
        <ul>
        <li v-for="(food,index) in item.foods" :key="index">
            <div>
                <p>{{food.name}}</p>
            </div>
        </li>
        </ul>
    </cube-scroll-nav-panel>
    </cube-scroll-nav>
</template>

<script>
import axios from '../axios'
export default {
    data(){

    },
    methods:{
        changeHandler(){

        },
        stickyChangeHandler(){

        }
    },
    created(){
        this.$store.dispatch('getdata')
    }
}
</script>

<style>

</style>
