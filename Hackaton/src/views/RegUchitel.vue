<template>
    <div class="base">
        <div class="reg">
            <h2>Логин</h2>
        <input v-model="login" class="login" type="login" id="log-in" placeholder="Введите логин"><br>
        <h2>Пароль</h2>
        <input  v-model="password" class="password" type="password" id="pass-word" placeholder="Введите пароль"><br><br>
      
        <button @click="validation25()" class="btn btn-outline-primary">Регистрация</button>
        </div>
    </div>
</template> 

<script>
export default {
    data(){
      return{
      password:'',
      login:'',
      }
    },

    methods:{
        validation25(){
          let login = document.querySelector('#log-in')
          let pattern_login = /^([A-Za-z0-9]{6})$/
           let password = document.querySelector('#pass-word')
           let pattern_password = /^([A-Za-z0-9]{6,10})$/
           if(this.password.match(pattern_password) && this.login.match(pattern_login)){
            window.location.href = '/glavmenu';
           }
           else{
             alert('Неверно')
           }
        }
    }
}
</script>

<style lang="scss">
.reg{
    margin-top: 150px;
    margin-left: 40%;
    width: 270px;
    height: 340px;
    padding: 50px;
    font-size: 20px;
    text-align: center;
}
input{
    border-radius: 20px;
    border: none;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
}
button{
    border: none;
    font-size: 25px;
    padding: 10px;
    border-radius: 20px;
}
</style>