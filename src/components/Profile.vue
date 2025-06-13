<script setup lang="ts">
import {ElMessage, ElButton, ElCard} from "element-plus";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import { Document, Link } from '@element-plus/icons-vue'

const route = useRoute()

let user = ref({
  username: 'JurFal',
  first_name: '',
  last_name: '',
  email: 'zyc12241252@163.com',
  avatar: 'https://avatars.githubusercontent.com/u/112413958?s=400&u=24970d0e0773bb7d637374458fca9e8f12a06591&v=4', // 假设的头像URL
  github: 'https://github.com/JurFal',
  resumePath: '/index/resume.pdf'
})

const openResume = () => {
  window.open(user.value.resumePath, '_blank')
}

const openGithub = () => {
  window.open(user.value.github, '_blank')
}

</script>

<template>
  <div class="user-profile">
    <el-card class="profile-card">
      <img :src="user.avatar" alt="User Avatar" class="avatar"/>
      <h2>{{ user.username }}</h2>
      <p><strong>Email:</strong> {{ user.email }}</p>
      
      <div class="actions">
        <el-button 
          type="primary" 
          :icon="Document" 
          @click="openResume"
          class="action-btn"
        >
          查看简历
        </el-button>
        
        <el-button 
          type="success" 
          :icon="Link" 
          @click="openGithub"
          class="action-btn"
        >
          GitHub主页
        </el-button>
      </div>
      
      <!-- PDF 嵌入显示 -->
       <div class="pdf-container">
         <h3>简历预览</h3>
         <iframe 
           :src="user.resumePath" 
           class="pdf-viewer"
           frameborder="0"
         >
         </iframe>
         <p class="pdf-fallback">
           如果PDF无法显示，请 <a :href="user.resumePath" target="_blank">点击这里下载</a>
         </p>
       </div>
    </el-card>
  </div>
</template>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.profile-card {
  text-align: center;
  padding: 30px;
}

.user-profile .avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.actions {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.action-btn {
  min-width: 120px;
  height: 40px;
  font-size: 14px;
}

.pdf-container {
  margin-top: 40px;
  text-align: left;
}

.pdf-container h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #409eff;
}

.pdf-viewer {
   width: 100%;
   height: 600px;
   border: 1px solid #dcdfe6;
   border-radius: 4px;
   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 }
 
 .pdf-fallback {
   text-align: center;
   margin-top: 10px;
   color: #666;
   font-size: 14px;
 }

@media (max-width: 768px) {
  .user-profile {
    max-width: 95%;
    margin: 10px auto;
    padding: 10px;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .action-btn {
    width: 200px;
  }
  
  .pdf-viewer {
    height: 400px;
  }
}
</style>