# 📝 2022/03/29

なるべくネストが深くならないようにリファクタリング


なんとなく形にはなってきてる


小数点表示ガバってる？

↑ canvas のサイズルールですた


## 今後

- タッチ対応
- 式読み込み
- リアルタイムのエディタ
- 




# 📝 2022/03/28

## `iDraw` の処理


最初の`if` 分岐だけだと思ってた、、、（これだからjsは、、、ｹﾞﾌﾝ）


荒さや表記方法は今後


## `with` 構文の贖罪

``` .js
// f1(x, t) * f4(x, t)

function anonymous(x, t) {
  with(Math) {
    function f1(x, t) {
      return (sin(440.0 * (x + t) * PI * 2.0));
    }

    function f2(x, t) {
      return (sin(PI * (x + t) / 2.0));
    }

    function f3(x, t) {
      return (1.0 - pow(abs(f2(x, t)), 0.5));
    }

    function f4(x, t) {
      return (1.0 - pow(max(0.0, abs(f2(x, t)) * 2.0 - 1.0), 3.5));
    }

    function f5(x, t) {
      return (f1(x, t) * f3(x, t));
    }
    return (f1(x, t) * f4(x, t));
  }
}
```


glsl <=> js のparser を書く？

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
- `input` のスタイル
- 式をjs で読める演算子に
- `fx1` から徐々に突っ込んでいく
- `mFunctionFun` にインデックスで格納



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


