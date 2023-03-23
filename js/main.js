const { createApp } = Vue

  createApp({
    data() {
      return {
        message:[],
      }
    },
    methods:{
        stampaInsieme (){
            for(let i = 0; 1< this.message.length; i++){
                
            }
        }
    },
    mounted() {
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    this.message.push(response.data.response);
                    console.log(response.data.response);
                })
            }console.log(this.message);
    }
  }).mount('#app')