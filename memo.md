# 📝 2022/03/26

ミニマムなものを作っていく


## 実行順序

- `Grapher()` 生成
  - カンバスサイズ、比率決定(`iAdjustCanvas`)
  - 画角情報捕捉(`iDraw`)
  - アニメーション確認(`togglePlay`)
- アドレスに式があるか確認(`parseUrlFormulas`)
  - アドレス付随してる式か、事前式準備か判断
    - 式をhtml(見た目)上で取得表示(`newFormula`)
      - `input` だから、`value` で突っ込む
- `iCompile` 突っ込んだ`value` 取得
- 

`iCompile` 色々やっててデカいな、、、




## js 処理系メモ

### `||`

``` .js
const devicePixelRatio = window.devicePixelRatio || 1;
```

縦線(パイプ) => 論理和


左が`true` なら左、`false` なら右


### `with`

[with - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/with)






# 📝 2022/03/14

## Pythonista で`eruda.js` 呼べない問題


webview のキャッシュクリアとリロードをごちゃごちゃしたら直ったぽい？


eruda.js をpika から持ってきて`module` で呼び出してる

↓ ちがいますた


初期起動時に、出ない


前解決したような気がしたけど、できてないぽい


この子が悪さしてるぽい

``` .py
from editor import present_themed
```


