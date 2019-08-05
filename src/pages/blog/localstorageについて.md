---
templateKey: blog-post
title: LocalStorageについて
date: 2019-08-05T01:29:55.289Z
description: >-
  JavaScriptのローカルストレージ。使ったことはあるがしっかりと理解していたわけではありませんでした。しかし今後の業務でガッツリ使うようなので、復習も兼ねて再度調べて理解を深めてみました。
featuredpost: true
featuredimage: /img/noimage.png
tags:
  - LocalStorage
---
JavaScriptのローカルストレージ。
使ったことはあるがしっかりと理解していたわけではありませんでした。
しかし今後の業務でガッツリ使うようなので、復習も兼ねて再度調べて理解を深めてみました。

## 保存方法
LocalStorageにデータを保存するためには、`setItem()`を使用します。
```index.js
localStorage.setItem(key, value);
```
引数にはペアとなる`key`と`value`を指定します。

## データの取得方法
続いて取得。
こちらは`getItem()`を使用します。
```index.js
localStorage.getItem(key)
```
引数には取得したい値の`key`を指定します。

## 複数データの保存方法
上記の場合だと1つしかデータを保存できません。
複数のデータを保存したい場合は、データをオブジェクトにして一つのキーで保存します。

サンプルはこちら
```
var dataList = {
  data1: "hoge",
  data2: "huga"
}

// データの保存
localStorage.setItem("dataList", dataList);
// データの取得
localStorage.getItem("dataList");
```

## 問題点
以上のようにすれば保存処理は実行されるようですが、データが`[Object Object]`になってしまうため**文字列**に変換してあげる必要があるようです。
方法は以下

```
localStorage.setItem("dataList", JSON.stringify(dataList));
```
このように`JSON.stringify()`を使用する必要があるそうです。

逆にデータを取得するときには、文字列から`json`に戻してあげる必要があります。

```
JSON.parse(localStorage.getItem("dataList"))
```
今度は`JSON.parse()`を使用してデータを取得します。

## 削除方法
削除の方法はこちら
```
localStorage.removeItem('key');
```
これでキーに紐付いた値が削除されます。

## 初期化方法
初期化もできるようですね。
```
localStorage.clear();
```
まるっと削除したい場合はこちらが便利そうです。
## まとめ
以上で基本的なローカルストレージについての復習は完了しました。
もっと応用はできるのでここから更に派生できればと思います。
