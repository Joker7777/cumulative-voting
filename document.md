#
## 仕様まとめ
1. 表示
* 最小時間: 10min
* 表の大きさは完全に横幅に依存、%表記
* 必ず他の予定とかぶらないようにする
* 入力フォームを横に用意する

## 環境構築
1. MySQL
インストーラを使った
1. PHP v7.2.3
たぶん公式インストーラ
1. Node.js v8.12.0
公式インストーラ
1. Composer v1.7.2
公式インストーラ
環境変数とかの設定なしで使えました
1. Laravel Installer 1.5.0
```
composer global require "laravel/installer=~1.1"
```
環境変数などの登録をしなくても使えた。コマンドはGitHubディレクトリにて
1. Laravelプロジェクト作成
```
laravel new プロジェクト名
cd プロジェクト名
composer install            # この前に、php.iniを変更した(extension=fileinfoのコメントを外した)
php artisan -v              # Laravel Framwork 5.7.11, 正常にインストールされたか確認のため
php artisan key:generate    # 初期起動前にはkeyの生成が必要
php artisan serve           # ようやく起動、started:<url>のurlにアクセスしてLaravelと出ればok
```
1. Vue.js, ES2015=>ES5, Sass=>CSS
よくわからんがインストールがいるらしい, package.jsonの下部分？
```
npm install
```
* resources/views/welcome.blade.php を編集、Vue.jsが使えているか確認
2018/10/31 1:03 できない　->　2018/10/31/11:15 app.jsが読みこめてなかったらしい
http://blog.asial.co.jp/1496


### サーバ起動
```
php artisan serve   # server
npm run watch       # compiler
```

### 参考
1. LaravelインストールからVueまで, mix()の件
https://qiita.com/fruitriin/items/e0f2c9aa035c3ff2c874
1. Composer インストール後から？とても丁寧な気がしたがわからん
http://blog.asial.co.jp/1496
1. Laravel + Vue.js (Mac)
https://qiita.com/A_zara/items/b552b4135006dc1e69f3
1. Laravel + vue.js? (windows)
https://qiita.com/somebody_gp/items/2d31471bebf9164425fe
1. Laravel プロジェクト作成
https://qiita.com/33yuki/items/5ee27163b603d7f68250https://qiita.com/A_zara/items/b552b4135006dc1e69f3
1. autoload.php
https://qiita.com/pugiemonn/items/3d000ac0486987dd92df
1. fileinfo
https://qiita.com/ms2sato/items/79a2bcfd90385a8484ac
1. artisan key:generate
https://qiita.com/pugiemonn/items/641718fd241320384972
1. npm install
https://qiita.com/somebody_gp/items/2d31471bebf9164425fe
1. npm install の失敗について
https://qiita.com/quotto/items/1357bfb91346535f40bf


## 開発メモ
### Routing
* app/Http/Controllers/Controller.php
関数に対してview(name.blade.php)を指定する。'name'で呼び出せる。
* routes/web.php
Route::get('/page', 'Controller@function')で、リクエストurlに対してコントローラの関数を呼び出す。

### scss
* プロパティ記述順序
https://qiita.com/mgn/items/6154ccd2e23b2e65c769

### Vuex
* 導入参考
https://qiita.com/_P0cChi_/items/ebf8fbf035b36218a37e

### コンパイル
>>> 特定の環境のWebpackでは、ファイル変更時に更新されないことがあります。自分のシステムでこれが起きた場合は、watch-pollコマンドを使用してください。
``` npm run watch ```の代わりに、``` npm run watch-poll ```
https://readouble.com/laravel/5.4/ja/mix.html

### 進捗
* 20181031 21:57
環境はよくわからないがVueは動いたので良しとする。
データ構造とそれを表示する仕組みを考える。

表示するのは週ごと、GoogleCalendar参照(予定がdivでした)
ページアクセス->その週に該当する予定のみ取ってくる->週ごとの配列に突っ込む->週ごとにforeach

* 20181105 