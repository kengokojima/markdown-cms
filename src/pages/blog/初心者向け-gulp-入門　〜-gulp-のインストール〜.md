---
templateKey: blog-post
title: 初心者向け Gulp 入門　〜 Gulp のインストール〜
date: 2018-05-13T08:56:17.030Z
description: >-
  Gulp 使ってますか？タスクランナーと言われる作業を効率化してくれる頼もしいツールです。今回はこの Gulp
  のインストール方法をメモしていきたいと思います。Gulp のインストールには node.js が必要なのでまずはこちらからインストールしていきましょう！
featuredpost: true
featuredimage: /img/background.png
tags:
  - Gulp
  - Improvement
  - Node.js
---
こんにちは！本日は今更感はありますが、改めて「Gulp.js」のインストール手順、およびセッティングの方法をメモしていきたいと思います。  
もし、Gulp初心者の方が見てくれた時に分かりやすいように、記事を何回かに分けて必要な物を分けて書きたいと思います！それではどうぞ！

今回はnode.jsとGulpのインストールなので、終わっている方は次の記事にお進みください。
       https://devnote.work/web-creation/javascript/115/


## Gulp.jsとは？

まずは知らない方のために、簡単な説明を。

Gulp.jsとはあらゆるタスク（処理）を自動化するツール、「タスクランナー」と呼ばれています。

似たようなものに「Grunt」と言うものがありますが、2018年現在はGulpが人気なようです。

僕も現在バリバリ使っていますが、結構便利ですね。

導入はとても簡単なのでぜひ以下を参考に導入して見てください！

## STEP.1 Node.jsのインストール

まずこれがないと始まりません。インストール済みの方は次に進んでください。

[Node.js 公式サイト](https://nodejs.org/ja/)よりNode.jsをダウンロードしてください。  
「推奨版」と「最新版」がありますが、基本は最新版で良いと思います。

ダウンロードが終了したら手順通りにインストールしていきます。

![node install window](https://devnote.work/wp-content/uploads/2018/05/img-node.png)

完了したら確認のため、コマンドラインを起動して確認して見ましょう。

MacOSの場合は「アプリケーション」→「ユーティリティ」にあるターミナルを起動します。  
Windowsの場合は「Windowsキー」を押すと検索画面が出て来るかと思います。そこに「cmd」と入力しコマンドプロンプトを起動します。

![terminal場所](https://devnote.work/wp-content/uploads/2018/05/tarminal_position.png)

コマンドラインを起動しましたら「node -v」と入力し、実行します。

<pre>
v9.2.0
</pre>

上記のようなバージョンが表示されればインストール完了です。  
もし表示されなければ一回再起動して見てください。

## STEP.2 package.jsonファイルの作成

では続いて、Gulpを使用するフォルダにプラグイン情報などが書きこまれる「package.json」を作成していきます。

先程コマンドラインを開いたと思いますので、そのままコマンドラインで操作していきましょう！  
以下は「sample_project」というフォルダを使用する体で進めていきます

Windowsでフォルダ移動（Cドライブのドキュメントフォルダに作成する場合）

<pre>
cd C:\Users\●●\Documents\sample_project
</pre>

MacOSでフォルダ移動

<pre>
cd /Users/●●/Documents/sample_project
</pre>

上記を入力したら、実行してください。   
移動できましたか？個人的にコマンドを使っている人はなんかできるひとのような感じがします（笑）

●●の部分はOSのユーザー名を入力してください。

ちなみにWindowsとMacはコマンドラインのシステムが違うのでコマンドが少し違います。  
それについてはまた記事にしたいと思います。

次に、「package.json」の作成コマンドを入力します。

<pre>
npm init -y
</pre>

上記を実行してください。「-y」はなくても大丈夫ですが、色々聞かれて面倒なので個人で使うだけなのであればつけたほうが楽かなと思います。

成功していたらフォルダの中に「package.json」ができていると思います！  
内容はこんな感じ

![json-file](https://devnote.work/wp-content/uploads/2018/05/img-package.png)

## STEP.3 Gulpのインストール

さて、いよいよGulpのインストールです。

ネット上の記事には色々な方法が書かれていますが、現在はローカル（現在のプロジェクトフォルダ）にだけインストールすれば良いようです。

<pre>
npm i -D gulp
</pre>

上記を実行してください。

※上記の「i」は「install」の略で同じ意味を持ちます。  
※上記の「-D」は「--save-dev」の略で同じ意味を持ちます。簡略化された方で入力した方分かりやすいので、上記のように記しています。

実行するとなにやら色々と英語がコマンドラインを駆け巡っていきます。

終了しましたら、確認の為にコマンドラインに

<pre>
gulp -v
</pre>

と入力して、バージョンが表示されたらインストール完了です！お疲れ様でした。

## まとめ

今回は、Gulpのインストールのみを記事にしました。

次回からはさらにGulpの力を発揮するために色々なプラグインを導入したいと思います！

おそらく今回の方法は割と最新のインストール方法ではないかなと思います。

なにか間違いを発見された方はご指摘をお願いいたします。

それではまた次回！
