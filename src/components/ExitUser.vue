<script>
  export default {
    name: "ExitUser",
    data() {
      return {
        productsData: [],  
        
      };
    },
    created(){
      this.$store.state.apiToken = 0;
       //localStorage.removeItem('api-token');
        this.$router.push("/")
    },
    methods:{
    checkApi: function()
    {
      return localStorage.getItem('api-token');
    }
  }};
  </script>
  