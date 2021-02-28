app.component('serch',{
    props:{
        focus:Array,
        gallery:Array
    },
    template:
    /*้html*/
    
    `<div class="flex flex-wrap justify-center">
            <input type="text" placeholder="input something" v-model="task" @keyup="checkTask" class="font-sans md:font-serif tracking-wide  font-bold text-3xl pt-7 m-3 h-16"><button class="font-sans md:font-serif tracking-wide text-center text-white bg-red-600 font-bold text-3xl pt-7 m-3 h-16" v-on:click="allShow">cancel</button>
        </div>
    ` ,
    data(){
        return{
            task:''
        }
    },
    methods:{
        checkTask()
        {
            for(i=0;i<this.gallery.length;i++)
            {
                if(this.gallery[i].name.toUpperCase().search(this.task.toUpperCase())<0) this.gallery[i].show = false; 
                else this.gallery[i].show = true;
            }
        },
            allShow(){
                this.focus.show=false;
                this.task='';
                for(i=0;i<this.gallery.length;i++)
                {
                     this.gallery[i].show = true; 
                }
            }
    }
})
