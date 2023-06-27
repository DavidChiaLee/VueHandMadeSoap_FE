<script>
</script>

<template lang="pug">
div.parent_block
  aside.aside
    div.logo_block
      router-link(:to="{name: 'Home'}") Handmade Soap
    div.website_block
      h1.title1 網站
      select
        optgroup(label="您的網站清單")
          option 手工皂網站
        optgroup(label="操作")
          option 建立新網站
    div.page_block
      h1.title1 網頁
      div.list_block
        ul.list
          li 頁面1
          li 頁面2
          li 頁面3
    div.setting_block
      h1.title1 設定
      div.input_group
        label 網頁標題
        input(type="text")
  main.main
    p 頁面
    article#web_page
</template>

<style lang="sass" scoped>
  div.parent_block
    // border: 1px solid red
    display: flex
    font-size: 1.6rem
    min-height: 100vh
    align-items: flex-start
    aside.aside
      // border: 1px solid black
      border-right: 1px solid #aaa
      flex-basis: 300px
      flex-shrink: 0
      background-color: lightblue
      background: rgba(236, 236, 236, 0.47)
      box-shadow: 0 0 1px gray inset
      position: sticky
      top: 0
      height: 100vh
      div.logo_block
        text-align: center
        // border-top: 1px solid #ccc
        padding: 20px 0
        a
          color: black
          display: inline-block
          text-decoration: none
          font-size: 2rem

      div.website_block, div.page_block, div.setting_block
        text-align: center
        padding: 20px 0
        border-top: 1px solid #ccc
        position: relative
        min-height: 100px
        h1
          margin: 0
          font-size: 1.6rem
          position: absolute
          // border: 1px solid red
          color: #ccc
          top: 0
          left: 50%
          transform: translate(-50%, -50%)
          background-color: #f6f6f6
          padding: 0 20px
          font-weight: normal
      div.page_block
        div.list_block
          ul.list
            margin: 0
            padding: 0
            list-style: none
            > li
              text-align: left
              padding: 0 10px

      div.website_block
        min-height: auto
        select
          font-size: 1.8rem
      div.setting_block
        div.input_group
          // border: 1px solid red
          text-align: left
          padding: 0 10px
          display: flex
          align-items: center
          label
            display: inline-block
            // border: 1px solid red
            line-height: 1
            text-align: right
            margin-right: 10px
            flex-shrink: 0
          input
            height: 34px
            line-height: 34px
            flex-grow: 1
            font-size: 1.6rem
            padding: 5px 10px
            outline: none
            width: 100%
            border: 1px solid #ccc
            border-radius: 5px
    main.main
      // border: 1px solid blue
      flex-grow: 1
      border: 1px solid red
      height: 2000px
</style>