<template>
    <div class="body">
      <header>
        <div class="headerdv">
          <img class="logo" src="../assets/1.png" alt="">
          <h1 class="TG2">КибеРУ</h1>
          <h5 class="OTG">российская электронная школа</h5>
        </div>
      </header>
      <div class="news">
        <img src="../assets/ege.jpeg" alt="" class="imgnews">
        <h1 class="egelit">ЕГЭ по литературе: <br> все, что надо знать о едином <br> госэкзамене в 2023 году</h1>
        <div class="menu">
          <button type="button" class="menu_button" @click="OpenMenu">
            <span>Читать больше</span>
            <span>Закрыть</span>
          </button>
          <ul hidden class="list">
            <li><a href=".news1" title="Новое в заданиях" @click="Anchor">Новое в заданиях</a></li>
            <li><a href=".news2" title="Какие задания будут на экзамене" @click="Anchor">Какие задания будут на экзамене</a></li>
            <li><a href=".news3" title="Темы сочинения ЕГЭ по литературе" @click="Anchor">Темы сочинения ЕГЭ по литературе</a></li>
            <li><a href="#news4" title="Объем сочинения ЕГЭ по литературе" @click="Anchor">Объем сочинения ЕГЭ по литературе</a></li>
            <li><a href=".news5" title="Продолжительность экзамена" @click="Anchor">Продолжительность экзамена</a></li>
            <li><a href=".news6" title="Чем можно пользоваться на ЕГЭ по литературе"  @click="Anchor">Чем можно пользоваться на ЕГЭ по литературе</a></li>
            <li><a href=".news7" title="Средний балл"  @click="Anchor">Средний балл</a></li>
            <li><a href=".news8" title="Первичные и тестовые баллы ЕГЭ по литературе"  @click="Anchor">Первичные и тестовые баллы ЕГЭ по литературе</a></li>
            <li><a href=".news9" title="Минимальный балл для вуза"  @click="Anchor">Минимальный балл для вуза</a></li>
            <li><a href=".news10" title="Речевые ошибки, за которые могут снизить баллы"  @click="Anchor">Речевые ошибки, за которые могут снизить баллы</a></li>
            <div class="news1" id="block">
              <h1>Новое в заданиях</h1>
              <p>- В задании 9 не указывается точное количество правильных ответов. Раньше надо было найти 3 правильных из 5. Теперь правильных ответов может быть и 2, и 4. Например, дается сонет Шекспира в переводе Маршака, и вам надо выбрать из предложенного перечня (анафора, метафора, гротеск, инверсия, эпитет) все (!) названия художественных средств, использованных в тексте.
                <br><br>
              - Уточнен критерий соответствия теме сочинения. "Это критерий глубины. Надо раскрывать тему глубоко и многосторонне, - пояснил руководитель комиссии по разработке КИМ ЕГЭ по литературе Сергей Зинин. - Нельзя написать "Чацкий любит Софью, но долго путешествовал, где-то ездил, она от него отвыкла и забыла. К тому же он шутит все время…" Придерживайтесь авторской позиции, а не только своих впечатлений". По словам Сергея Зинина, в сочинении можно написать "мне кажется…", но при этом надо знать, что и автор думает по этому поводу.</p>
            </div>
            <div class="news2" id="block">
              <h1>Какие задания будут на экзамене</h1>
              <p>- В ЕГЭ по литературе две части. Первая - 11 вопросов, вторая - развернутое сочинение не менее 200 слов, на выбор предлагается пять тем. В ЕГЭ будут задания трех уровней - базового, повышенного и высокого. Первая часть - задания базового и повышенного уровней. Сочинение считается заданием высокого уровня сложности. Примерное время выполнения сочинения - два часа.
                <br><br>
                  "В первой части экзамена надо детально разобраться с двумя текстами, ответить на вопросы. Первый текст представляет собой фрагмент из эпического, лиро-эпического, драматического произведения. Второй текст - законченный полностью текст лирического произведения. Тут нужен целостный анализ, - пояснил Сергей Зинин. - Вторая часть - полноценное сочинение".</p>
            </div>
            <div class="news3" id="block">
              <h1>Темы сочинения ЕГЭ по литературе</h1>
              <p>- Какую роль сыграл Порфирий Петрович в судьбе Раскольникова?
                <br><br>
                - Какие советы Вы были дали художнику, иллюстрирующему рассказ А.И.Солженицына "Один день Ивана Денисовича"?
                <br><br>
                - Роль ремарок в пьесе А.П.Чехова "Вишневый сад"
                <br><br>
                - Ваши рекомендации художнику-иллюстратору романа Л.Н.Толстого "Война и мир" (С опорой на текст произведения)
                <br><br>
                - Какие рекомендации Вы дадите исполнителю роли Базарова в экранизации романа И.С. Тургенева "Отцы и дети (с опорой на текст произведения)
                <br><br>
                - Как в творчестве А.А. Ахматовой раскрывается тема личности и истории?
                <br><br>
                - Какие эпизоды Вы бы выбрали для иллюстрации сказок М.Е. Салтыкова-Щедрина (с опорой на текст произведения)
                <br><br>
                - Своеобразие любовной темы в лирике Б.Ш.Окуджавы (С опорой на текст произведения. Не менее трех стихотворений).</p>
            </div>
            <div class="news4" id="news4">
              <h1>Объем сочинения ЕГЭ по литературе</h1>
              <p>Рекомендуемый объем сочинения - 250-350 слов, сочинение меньше 200 слов не оценивается.</p>
            </div>
            <div class="news5" id="block">
              <h1>Объем сочинения ЕГЭ по литературе</h1>
              <p>Рекомендуемый объем сочинения - 250-350 слов, сочинение меньше 200 слов не оценивается.</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    OpenMenu(){
      const menuBody = document.querySelector('.menu');
      document.addEventListener("click", menu)
      function menu(event){
        if (event.target.closest('.menu_button')){
        menuBody.classList.toggle('_active')
        }
        if (!event.target.closest('.menu_button')){
        menuBody.classList.remove('_active')
        } 
      }
    },
    Anchor(){
      const anchors = document.querySelectorAll('a[href*="#"]')
      for(let anchor of anchors){
        anchor.addEventListener('click', function(event){
          event.preventDefault()
          const blockID = anchor.getAttribute('href').substr(1)
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap');
*{
  padding: 0;
  margin: 0;
}
body{
  background-image: url('../assets/back.jpg');
  -ms-user-select: none; 
  -moz-user-select: none; 
  -webkit-user-select: none; 
  user-select: none;
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
    .news{
      margin-top: 30px;
      text-align: center;
      height: 800px;
      width: 600px;
        .imgnews{
          height: 400px;
          width: 550px;
          border-radius: 20px;
          margin-left: 200px;
        };
        .egelit{
          position: relative;
          bottom: 400px;
          left: 745px;
          color: #4d1a57;
        };
        .menu{
          display: inline-block;

        };
        .menu._active .list{
          display: block;
        };
        .menu._active .menu_button span:first-child{
          display: none;
        }
        .menu._active .menu_button span:last-child{
          display: block;
        }
        .menu_button span:first-child{
          display: block;
        }
        .menu_button span:last-child{
          display: none;
        }
    };
    a{
      text-decoration: none;
      color: #4d1a57;   
    };
    p, h1, h5, a, li, button{
      font-family: 'Comfortaa', cursive;
    };
    .menu_button, li{
      margin-left: 930px;
      bottom: 370px;
      position: relative;
    };
    .menu_button {
      background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;            
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;
      width: 230px;
      height: 60px;
      border-radius: 5px;
      border: none;
      font-size: 20px;
      };
      .menu_button:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
      };
    ul{
      padding-top: 25px;
    }
}
</style>
         