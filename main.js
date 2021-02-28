    
    const app = Vue.createApp({
        data() {
            return {
                gallery: [
                { images: 'images/oita.jpg', name: 'Usa Shrine,Oita', done: false ,show:true} ,
                { images: 'images/wakayame.jpg', name: 'Nachi Fall,Wakayama', done: false ,show:true} ,
                { images: 'images/yamakuji.jpg', name: 'Motonosumi-inari Shrine,Yamakuji', done: false ,show:true}
                ]
                ,focus:{show:false,index:0}
                
             }
            },
            methods: {
            
            
            
        },
            computed: {
            countPic() {
                return this.gallery.filter(t => !t.false).length
            }
            
        }

    })
 