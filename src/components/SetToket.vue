<script>


  export default {
    name: "ExitUser",
    data() {
      return {
        productsData: [],  
        
      };
    },
    created(){
       localStorage.getItem('api-token');
        this.$router.push("/")
    },
    methods:{
    checkApi: function()
    {
      return localStorage.getItem('api-token');
    }
  }};
  </script>