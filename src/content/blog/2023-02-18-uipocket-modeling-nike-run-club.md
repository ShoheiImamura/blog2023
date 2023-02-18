---
title: モデリング練習 - Nike Run Club
description: PIPocket 掲載アプリのモデリング - Nike Run Club
author: IMAMURA Shohei
publishDate: 2023-02-18
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
**Nike Run Club**

走行距離の記録とフィットネスガイド

#### 参考URL
https://ui-pocket.com/apps/nike-run-club/


---

## モデリング

### 用語集／用語関連図（ドメインモデル図）

```plantuml
@startuml

' === ドキュメント設定 ===
right footer s.imamura
' mainframe mainframe
title 用語集／用語関連図
left to right direction
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
    title {
        FontSize 14
        ' FontColor blue
        BorderThickness 10
        BorderColor transparent
    }

    ' === 要素別設定 ===
    rectangle {
        BackgroundColor business
        BorderColor #000
        RoundCorner 25
        BorderThickness 0.6
        fontColor black
        fontSize 14
    }
    actor {
        fontColor black
        fontSize 12
    }
    card {
        BorderColor #999999
        BorderThickness 0.6
        fontColor black
        fontSize 12
    }
    component {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
    rectangle {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
}

rectangle アカウント関連 {
  card ランナー
  card アカウント
  card 身長
  card 体重

  ランナー -- 身長
  ランナー -- 体重
}

rectangle ラン関連 {
  card 全てのラン
  card 保存済みのラン

  card ラン
  card 概要
  card ランの詳細
  card ランの時間
  card おすすめの音楽

  card 音声ガイドラン
  card ラン区分
  note right
  - ショートラン
  - イージーラン
  - スピードラン
  end note

  ラン -- 概要
  ラン -- ランの詳細
  ラン -- ラン区分
  ラン -- ランの時間
  ラン -- おすすめの音楽
}


rectangle ワークアウト関連 {
  card "ラン（ワークアウト）"as ワークアウト
  card 目標距離
  card ワークアウト日時
  card ワークアウトタイトル
  card ワークアウト走行距離
  card タイム
  card BPM
  card 平均心拍数
  card 最大心拍数
  card ペース
  card ペース表
  card 平均ペース
  card 目標ペース
  card 消費カロリー
  card "高低差（上り）" as 高低差上り
  card "高低差（下り）" as 高低差下り
  card ランコース
  note right
  - 道路
  - トラック
  - トレイル
  end note
  card メモ
  card ランの難易度
  card インドア


  ' 内部関連
  ワークアウト -- 目標距離
  ワークアウト -- タイム
  ワークアウト -- BPM
  ワークアウト -- ペース
  ワークアウト -- 平均ペース
  ワークアウト -- 消費カロリー
  ワークアウト -- 高低差上り
  ワークアウト -- 高低差下り
  ワークアウト -- ランコース
  ワークアウト -- メモ
  ワークアウト -- ランの難易度

  ' 外部関連
  ラン --- ワークアウト
}
rectangle スプリット関連 {
  card スプリット
  card スプリットの距離
  card スプリットの平均ペース
  card スプリットの高低差
  ' 内部関連
  スプリット -- スプリットの距離
  スプリット -- スプリットの平均ペース
  スプリット -- スプリットの高低差

  ' 外部関連
  ワークアウト --- スプリット
}

card 音楽サービス
card 音楽ソース

rectangle マイシューズ関連 {
  card マイシューズ
  card 停止したシューズ

  card シューズ
  card ブランド
  card ニックネーム
  card カラー
  card 履いて走る目標距離

  マイシューズ -- シューズ

  シューズ -- ブランド
  シューズ -- ニックネーム
  シューズ -- カラー
  シューズ -- 履いて走る目標距離
}

card プログラム
rectangle メッセージ関連  {
  card 受信トレイ
  card メッセージ
  card メッセージの画像
  card メッセージのタイトル
  card メッセージの本文
  card メッセージの日時

  ' 内部関連
  メッセージ -- メッセージの画像
  メッセージ -- メッセージのタイトル
  メッセージ -- メッセージの本文
  メッセージ -- メッセージの日時
}

rectangle プラン関連 {
  card プラン
  card レベル
  card コース
  card プランの概要
  card プラン頻度
  card ベース
  card おすすめ
  card ランナー歴
  card プランの概要
  card コーチ
  card コーチのプロフィール
  card メニュー
  card 今週のメニュー
  card 今週のヒント
  card 完了したワークアウト
  card 残り期間
  card トレーニングプランに関するFAQ
  card プログラムを終了する理由

  プラン -- プランの概要
  プラン -- メニュー
  メニュー -- 今週のメニュー
  プラン -- 完了したワークアウト

  ' 外部関連
  メニュー -- ワークアウト
}

rectangle クラブ関連 {
  card クラブ
  card チャレンジ [
    チャレンジ
    ---
    名前
    距離
    作成者
    背景画像
  ]
  card 順位
  card ランキング
  card 友達
  card 友達リクエスト
  card 招待する友達
  card 合計走行距離
  card 開催期間 [
    開催期間
    --
    開始日
    終了日
    残り期間
  ]
  card 参加者
  card マイチャレンジ

}

rectangle アクティビティ関連 {
  card アクティビティ
  card 最近のアクティビティ

  card トロフィー
  card すべてのトロフィー
  card 最近獲得したトロフィー

  トロフィー -- すべてのトロフィー
  トロフィー -- 最近獲得したトロフィー

  card ランレベル
  card 個人記録
  card 今月の走行距離
  card 連続記録
}

card シェア
card コミュニティアクティビティ

card プロフィール
card 投稿
card 友達
card イベント
card ショッピング

card NIKEタイムライン

card ナイキメンバー
card ナイキメンバーの特典

card Nikeアプリ設定関連 {

  card Nikeアプリ
  card プライバシー設定
  card プロフィール表示設定
}

@enduml

```

### 関係者／関係システム（システムコンテキスト図）

```plantuml
@startuml

' === ドキュメント設定 ===
right footer s.imamura
' mainframe mainframe
title 関係者／関係システム
left to right direction
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
    title {
        FontSize 14
        ' FontColor blue
        BorderThickness 10
        BorderColor transparent
    }

    ' === 要素別設定 ===
    rectangle {
        BackgroundColor business
        BorderColor #000
        RoundCorner 25
        BorderThickness 0.6
        fontColor black
        fontSize 14
    }
    actor {
        fontColor black
        fontSize 12
    }
    card {
        BorderColor #999999
        BorderThickness 0.6
        fontColor black
        fontSize 12
    }
    component {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
    rectangle {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
}

' 登場人物
actor ランナー

' システム
rectangle NikeRunClub {
  component NikeRunClubアプリ
}

' 外部システム
component AppleWatch
component Nikeアプリ
component Nikeメンバーショップ
component AppleMusic
component Spotify

' 関係
ランナー -- NikeRunClubアプリ

NikeRunClubアプリ -- AppleWatch
NikeRunClubアプリ -- Nikeアプリ
NikeRunClubアプリ -- Nikeメンバーショップ
NikeRunClubアプリ -- AppleMusic
NikeRunClubアプリ -- Spotify

@enduml

```



---

