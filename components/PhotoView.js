app.component('focus-photo',{
    props:{
        focus:Array,
        gallery:Array
    },
    template:
    /*้html*/
    `
    <div v-show="focus.show" class="bg-black w-full ">
         <div class="flex flex-col">
            <div>
                <span class="material-icons text text-white flex justify-end cursor-pointer" v-on:click="quit">disabled_by_default</span>
            </div> 
            <div class="flex justify-center">
            <img :src="gallery[focus.index].images" class="object-cover object-center w-2/6 h-64 rounded-lg lg:h-auto group-hover:opacity-70 "> 
        </div> 
    </div>
    </div>
    ` ,
    data(){
        return{
            
        }
    },
    methods:{
        quit(){
            this.focus.show=false;
        }
    }
})
