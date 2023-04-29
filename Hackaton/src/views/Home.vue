<template lang="">
    <div>
        <header>
        <div class="headerdv">
          <img class="logo" src="../assets/1.png" alt="">
          <h1 class="TG2">КибеРУ</h1>
          <h5 class="OTG">российская электронная школа</h5>
        </div>
      </header>
        <div class="hed">
            <router-link class="rlT" to="/reg/uchitel" >
            <div class="btn1">
                Учитель
            </div>
            </router-link>
            <router-link class="rlT rl2t" to="/reg/uchenik" >
            <div class="btn2">
                Ученик
            </div>
            </router-link>
        </div>
        <div class="info">
                <h2 class="infoT">КибеРУ - это современный и эффективный инструмент обучения, который позволяет ученикам получать знания и навыки в интерактивном формате.
                    <br>    Наш сайт предоставляет ученикам доступ к разнообразным образовательным материалам, включая видеоуроки, тесты, задания и другие интерактивные элементы.

                Одним из главных преимуществ нас является его доступность. Сайт может быть доступен из любой точки мира, что позволяет ученикам изучать материалы в удобное для них время и темпе. Кроме того, сайт может содержать огромное количество материалов, что позволяет ученикам выбирать те темы, которые им более интересны и актуальны.
                </h2>
        </div>
        <div class="bottbar">

        </div>
    </div>
</template>


<script>
export default {

}
</script>

<style lang="scss">
*{
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    font-family: sans-serif;
}
body{
    background-image: url('../assets/back.jpg');
    header{
    width: 100%;
    height: 120px;
    background-color: #b25cc3;
      .headerdv{
        padding-top: 20px;
        padding-left: 20px;
        -ms-user-select: none; 
        -moz-user-select: none; 
        -webkit-user-select: none; 
        user-select: none;
        margin-left: 240px;
      }; 
      .logo{
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 100%;
      };
      .TG2{
        position: relative;
        top: 15px;
        left: 90px;
        width: 50px;
        color: #f8cfed;
      };
      .OTG{
        position: relative;;
        left: 90px;
        top: 10px;
        width: 400px;
        color: #f8cfed;
      }
    };
}
.info{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #B25CC3;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
    border-radius: 30px;
}
.infoT{
    margin: 50px;
    color: rgb(248, 212, 237);
}
.glavImg{
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
header{
    width: 100%;
    height: 120px;
    background-color: #d260f5;
}
.glavT{
    padding-top: 20px;
    padding-left: 20px;
    -ms-user-select: none; 
	-moz-user-select: none; 
	-webkit-user-select: none; 
	user-select: none; 
}
.TextGlav{
    position: relative;
    top: 20px;
    left: 90px;
    width: 50px;
}
.hed{
    margin-top: 100px;
    width: 100%; 
}
.btn1{
    background-color: #B25CC3;
    margin-left: 40%;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    font-size: 28px;
}
.btn2{
    background-color: #B25CC3;
    margin-right: 40%;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    font-size: 28px;
    margin-top: 20px;
}

.btn1, .btn2{
    
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding: 20px;
    
}

.rlT{
    color: white;
}

</style>