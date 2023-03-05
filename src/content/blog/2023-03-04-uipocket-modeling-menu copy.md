---
draft: false
title: モデリング練習 - speak
description: PIPocket 掲載アプリのモデリング - speak
author: IMAMURA Shohei
publishDate: 2023-03-04
coverSVG: ../images/svg/undraw/undraw_process.svg
socialImage: ../images/undraw/undraw_process.png
categories:
  - Modeling
tags:
  - uipocket
  - rdra
  - plantuml
  - diagram
---
# モデリング練習
---
## 概要
#### 対象
**speak**
いつでも練習できるAI英語学習
#### 参考URL
- https://ui-pocket.com/apps/speak/
- https://play.google.com/store/apps/details?id=com.selabs.speak
---
## モデリング
### 用語集／用語関連図（ドメインモデル図）

```plantuml
@startuml
' === ドキュメント設定 ===
right footer s.imamura
title 用語集／用語関連図
' left to right direction
scale max 2048 width
' === スタイル ===
skinparam {
    ' === 共通設定 ===
    shadowing false
    ' linetype ortho
    backgroundColor whitesmoke
    arrow {
        color DarkBlue
        thickness 0.5
        fontSize 10
    }
    ' === 要素別設定 ===
    card {
        BorderColor #999999
        BorderThickness 0.6
        roundCorner 10
        fontColor black
        fontSize 12
    }
    collections {
        BorderColor #aaaaaa
        BorderThickness 0.5
        fontColor black
        fontSize 12
    }
    rectangle {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
}

rectangle 端末関連 {
  card 通知許可
  card 音声の録音許可
  card 付近のデバイスの検出接続相対位置の特定
}

rectangle オンボーディング関連 {
  card オンボーディング [
    オンボーディング
    --
    英語を学ぶ目的
    興味のある内容
    一番大変なこと
    レベル
  ]
}

card コース
card 学習プラン [
  学習プラン
  --
  レベル
  学ぶ内容
  レッスン
  表現
  スキル
]
card プレミアムプラン
card AI講師

card 伸ばしたいスキル


@enduml
```
---
### 他サービス
-
---
### 気になったこと
