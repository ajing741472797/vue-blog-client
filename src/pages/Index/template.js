import blog from '@/api/blog.js'


export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },

  // created() {
  //   this.page = parseInt(this.$route.query.page) || 1
  //   blog.getIndexBlogs({ page: this.page }).then(res => {
  //     console.log(res)
  //     this.blogs = res.data
  //     this.total = res.total
  //     this.page = res.page
  //   })

  // },
  created(){
    this.page =parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page:this.page}).then(res=>{
      console.log(res)

      this.blogs = res.data
      this.pages = res.page
      this.total =res.total

    })
  },

  methods: {
 
    handleCurrentChange(newPage){
      console.log(newPage)
      blog.getIndexBlogs({page:newPage}).then(res=>{
  
        this.blogs = res.data
        this.pages = res.page
        this.total =res.total
        this.$router.push({path:'/',query:{page:newPage}})
  
      })

    }
  }
}