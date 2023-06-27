<script>
// 提醒使用者，密碼不相同
  export default {
    data(){
      return {
        nickname: "",
        email: "",
        password: "",
        password_confirm: ""
      };
    },
    computed: {
      password_is_the_same(){
        return (this.password == this.password_confirm ? true : false);
      }
    },
    methods: {
      register_user(){ // 函式放這
        if(this.password == "" || !this.password_is_the_same){
          alert("密碼未設定或密碼不相同");
          return;
        }

        fetch("http://localhost:8080/graphql", {
          method: 'POST',
          body: JSON.stringify({
            query: `mutation {
              insertUser(nickname: "${this.nickname}", email: "${this.email}", password: "${this.password}"){
                id
                role_id
                nickname
                email
              }
            }`
          })
        }).then(res => res.json()).then(data => {
          //console.log(data);
          alert("註冊成功");
          this.$router.push("/"); // 導向至首頁
        });
      }
    }
  }
</script>

<template lang="pug">
header.header
  div.inner_header
    div.left
      h1 註冊流程
      div.img_block
        img(src="../assets/images/others/register_path.png")
        p.para.para1 填寫註冊表單
        //- p.para.para2 Email 驗證
        p.para.para3 開始登入
    div.right
      form(action="#" method="#" class="register_form")
        div.input_group(v-if="!password_is_the_same")
          label
          p.alert 密碼不相同
        div.input_group
          label 暱稱
          input(type="text" id="nickname" v-model="nickname")
        div.input_group
          label Email 帳號
          input(type="email" id="email" v-model="email")
        div.input_group
          label 密碼
          input(type="password" id="pwd" v-model="password")
        div.input_group
          label 密碼確認
          input(type="password" id="pwd_confirm" v-model="password_confirm")
        div.input_group
          label
          button(type="button" @click="register_user") 註冊
          router-link(:to="{name: 'Home'}" class="back_home") 回首頁
  div.waves_block
    svg(class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto")
      defs
        path(id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z")
      g(class="parallax")
        use(xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)")
        use(xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)")
        use(xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)")
        use(xlink:href="#gentle-wave" x="48" y="7" fill="#fff")
footer.footer
  p Copyright © 2023
</template>

<style lang="sass" scoped>
  header.header
    position: relative
    background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%)
    color: white
    min-height: 80vh
    display: flex
    flex-direction: column

  .inner_header
    width: 100%
    margin: 0
    padding: 0
    flex-grow: 1
    display: flex
    @media (max-width: 767.98px)
      flex-direction: column
    div.left
      // border: 1px solid red
      flex-grow: 1
      flex-basis: 50%
      display: flex
      flex-direction: column
      justify-content: center
      text-align: center

      h1
        font-weight: 100
        letter-spacing: 2px
        font-size: 3.2rem
        color: white
        margin: 0
        font-weight: bold
        background: radial-gradient(circle, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 8%, rgba(237,232,232,1) 16%, rgba(195,195,195,1) 59%)
        background-size: cover
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
        // border: 1px solid blue
      div.img_block
        // border: 1px solid red
        align-self: center
        position: relative
        margin-top: 30px
        p.para
          position: absolute
          color: white
          font-size: 1.6rem
          white-space: nowrap
          margin: 0
          &.para1
            right: 0
            top: 40px
            transform: translateX(100%)
          &.para2
            left: 0
            top: 120px
            transform: translateX(calc(-100% - 10px))
          &.para3
            bottom: -5px
            right: 0
            transform: translateX(calc(100% + 5px))

    div.right
      // border: 1px solid blue
      flex-shrink: 0
      flex-basis: 50%
      display: flex
      flex-direction: column
      justify-content: center
      @media (max-width: 767.98px)
        margin-top: 30px
      form.register_form
        // border: 1px solid red
        width: 80%
        margin: 0 auto
        padding: 0 20px
        @media (max-width: 767.98px)
          width: 100%
        a.back_home
          color: white
          font-size: 1.4rem
          text-decoration: none
          display: inline-block
          margin-left: 20px
          &:hover
            text-decoration: underline
        div.input_group
          p.alert
            background-color: #ff0000
            color: white
            margin: 0
            font-size: 1.6rem
            flex-grow: 1
            padding: 5px
            border-radius: 5px
          // border: 1px solid blue
          padding: 20px 0
          display: flex
          &:first-child
            padding-top: 0
          &:last-child
            padding-bottom: 0
            align-items: center
          label, button
            font-size: 1.8rem
          label
            width: 90px
            // border: 1px solid yellow
            display: inline-block
            text-align: right
            margin-right: 10px
            flex-shrink: 0
            height: 32px
          input
            border: 0
            border-bottom: 1px solid white
            border-radius: 0
            background: none
            outline: none
            color: white
            flex-grow: 1
            padding: 0 10px 4px
            font-size: 1.6rem
            display: inline-block
            letter-spacing: 3px
            &:focus
              border-bottom: 1px solid yellow
          button
            align-items: center
            appearance: none
            background-image: radial-gradient(100% 100% at 100% 0, rgba(0,172,193,1) 0, #4e5aba 100%)
            border: 0
            border-radius: 6px
            box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset
            box-sizing: border-box
            color: #fff
            cursor: pointer
            display: inline-flex
            font-family: "JetBrains Mono",monospace
            height: 48px
            justify-content: center
            line-height: 1
            list-style: none
            overflow: hidden
            padding-left: 16px
            padding-right: 16px
            position: relative
            text-align: left
            text-decoration: none
            transition: box-shadow .15s,transform .15s
            user-select: none
            -webkit-user-select: none
            touch-action: manipulation
            white-space: nowrap
            will-change: box-shadow,transform
            min-width: 100px
            &:focus
              box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset
            &:hover
              box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset
              transform: translateY(-2px)
            &:active
              box-shadow: #3c4fe0 0 3px 7px inset
              transform: translateY(2px)


  .waves_block
    font-size: 0
  .waves
    position: relative
    width: 100%
    height: 15vh
    min-height: 100px
    max-height: 150px

  footer.footer
    position: relative
    height: 20vh
    text-align: center
    background-color: white
    display: flex
    justify-content: center
    align-items: center
    font-size: 1.6rem
    color: gray

  /* Animation */
  .parallax > use
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite
  .parallax > use:nth-child(1)
    animation-delay: -2s
    animation-duration: 7s
  .parallax > use:nth-child(2)
    animation-delay: -3s
    animation-duration: 10s
  .parallax > use:nth-child(3)
    animation-delay: -4s
    animation-duration: 13s
  .parallax > use:nth-child(4)
    animation-delay: -5s
    animation-duration: 20s
  @keyframes move-forever
    0%
     transform: translate3d(-90px,0,0)
    100%
      transform: translate3d(85px,0,0)
</style>