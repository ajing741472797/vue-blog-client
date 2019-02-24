import request from '../../helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'
window.request = request
window.auth = auth
window.blog = blog


export default{
    data(){
        return {

        }
    },
    methods:{
        openBox(){
            this.$message({
                showClose: true,
                message: '这是一条消息提示'
              });
        },
        open6(){
            this.$message({
                showClose: true,
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });
        }
    }
}