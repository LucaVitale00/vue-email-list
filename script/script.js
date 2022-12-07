const { createApp } = Vue ;

createApp({
    data() {
        return{
            emails: [],
        }
    },    
    methods: 
    {          
        generateEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.emails.push(result.data.response);
            });
        }
    },
    
    mounted() {

        for (let index = 0; index < 10; index++) {
            this.generateEmail();
            
        }

    }
        
}).mount("#app") 

