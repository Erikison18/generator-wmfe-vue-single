/*
* @Author: zhanghongqia
* @email: 991034150@qq.com
* @Date: 2018-06-08 21:31:55
* @Description: 首页入口组件
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-10-31 18:35:06
*/

 <template>
  <div class="aitectcare_home">
    <Header />
    <div class="body">
      <div class="title">改善环境质量 营造健康生活</div>
      <div class="sub_title">环境与健康解决方案供应商</div>
      <div class="anim">
        <div class="diqiu"></div>
        <div class="s1 ico play"></div>
        <div class="s2 ico"></div>
        <div class="s3 ico"></div>
      </div>
    </div>
  </div>
</template>

<script>

import "./index.scss";
import { Header } from '@/components/common/'
export default {
  data() {
    return {
      timer:null,
    }
  },
  components: {
    Header
  },
  mounted(){
  	this.play();
  },
  destroyed(){
    clearInterval(this.timer);
  },
  methods:{
  	play(){
  		let item=1;
	  	let ico=document.querySelectorAll('.ico');
	  	this.timer=setInterval(()=>{
	  		item>ico.length ? item=1 : '';
	  		for(let i=0 ; i<ico.length ; i++){
	  			ico[i].classList.remove("play");
	  		}
	  		document.querySelector('.s'+item).classList.add('play');
	  		item++;
	  	},1000*3)
  	}
  },
  watch: {
  }
}
</script>
 



