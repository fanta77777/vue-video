
<template>
    <div id="video">
        <transition :name="transitionName">
            <keep-alive include="home">
                <router-view class="child-view"> </router-view>
            </keep-alive>
        </transition>
        <vfooter v-if="isShow" />
    </div>
</template>

<script>
//App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。
//其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件。

import vfooter from './components/common/vfooter.vue'

export default {
    name: 'app',
    components:{
        vfooter
    },
    data () {
        return{
            transitionName: 'slide-left',
            isShow: true
        }
    },
    watch: {
        $route(to, from) {
            console.log(this.$route.name)
            if(this.$route.name == 'video'){
                this.isShow = false
            }else{
                this.isShow = true
            }
            // console.log(to.meta.index,from.meta.index)
            if (to.meta.index > from.meta.index) {
                this.transitionName = "slide-left";
            } else {
                this.transitionName = "slide-right";
            }
        }
    },
}
</script>

<style lang="scss" >
@import './src/style/reset.scss';
.child-view {
    position: absolute;
    width:100%;
    transition: all .4s ;
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
