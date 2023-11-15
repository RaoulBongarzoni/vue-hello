const { createApp } = Vue;

createApp({
    data(){
        return {
            message: "hello world!!",
            imgOrigin:{
                src: "https://picsum.photos/200/300"
            }
        }
    }

}).mount("#my_app")