app.component('item-photo',{
    props:{
        focus:Array,
        gallery:Array
    },
    template:
    /*้html*/
    `<div class="container px-5 py-2 mx-auto lg:px-32">
    <div class="flex flex-wrap justify-center mx-auto ">
        <div class="group w-full mt-6 lg:w-2/6 lg:pl-10 lg:py-6 lg:mt-0" v-for="(photo,index) in gallery" v-show="photo.show">
            <img :src="photo.images"  v-on:click="click(index)" @dblclick="doubleclick(index)"
                class="object-cover object-center w-full h-64 rounded-lg lg:h-auto group-hover:opacity-70 "
                >
            <div class="flex flex-col items-start mx-auto mt-8 sm:flex-row sm:items-center">
                <h1
                    class="font-sans md:font-serif font-semibold tracking-wide flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    {{photo.name}}
                </h1>
                <span class="inline-flex">
                    <a
                        class="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-r">
                        <i xmlns="http://www.w3.org/2000/svg" v-show="photo.done"
                            class="material-icons text-red-500 icon icon-tabler icon-tabler-chevron-right " width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />favorite
                        </i>
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>
    ` ,
    data(){
        return{
            
        }
    },
    methods:{
        click(index) {
            this.gallery[index].done = !this.gallery[index].done
        },
        doubleclick(index)
            {
                this.focus.index=index;
                this.focus.show=true;
            }
    }
})
