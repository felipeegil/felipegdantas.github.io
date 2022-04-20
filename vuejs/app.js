const app = Vue.createApp({
    data(){
        return {
            showInfo: true,
            title: 'Learning VueJS',
            author: 'Felipe Dantas',
            age: 28,
            enteringCount: 0,
            leavingCount: 0,
            doubleClickCount: 0,
            x: 0,
            y:0
        }
    },
    methods:{
        toggleShowInfo(){
            this.showInfo = !this.showInfo
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMoveEvent(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')
