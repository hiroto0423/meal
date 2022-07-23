<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="/css/style.css" >
    </head>
    <body>
    　<div class="header">
    　　<div class="header-logo">男の自炊アプリ</div>
    　　<div class="header-list">
　　      <button><a href="/register">レシピ登録</a></button>
　　      <button><a href="/meals">料理一覧</a></button>
　　      <button><a href="/categoly">カテゴリー</a></button>
    　　</div>
    　</div>
    　<div class="main">
    　  <div class="meals-list">
    　     <div class="meals-restriction">
        　  <select class="select-categoly">
        　　  <option>選択してください</option>
        　  </select>
            <div class="select-diffyculty">
        　　  <p>難易度</p>
        　　  <select class="select-diffyculty">
                <option>選択してください</option>
              </select>
            </div>
            <div class="select-satiety">
              <p>満腹度</p>
              <select class="select-satiety">
                <option>選択してください</option>
              </select>
            </div>　         
    　   <h1>レシピ一覧</h1>
    　  </div>
      </div>
      <div class="footer">
          
      </div>
    </body>
</html>