---
title: モデリング練習 - お薬手帳
description: PIPocket 掲載アプリのモデリング - お薬手帳
author: IMAMURA Shohei
publishDate: 2023-02-19
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
**お薬手帳**

ポイントが貯まる！ワクチン接種記録や血圧手帳など機能多数

#### 参考URL
https://ui-pocket.com/apps/okusuritecho/


---

## モデリング

### 用語集／用語関連図（ドメインモデル図）

```plantuml
@startuml

' === ドキュメント設定 ===
right footer s.imamura
' mainframe mainframe
title 用語集／用語関連図
' left to right direction
' scale max 2048 width

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

rectangle デバイス設定関連 {
  card デバイス設定 [
    デバイス設定
    --
    通知許可設定
    写真・動画アクセス設定
  ]
}

rectangle アカウント関連 {
  card EPARKアカウント [
    EPARKアカウント
    --
    ID
    メールアドレス
    --
    パスワード
    姓
    名
    せい
    めい
    生年月日
    性別
    電話番号
    携帯電話番号
    郵便番号
    住所
    メールマガジン受信設定
  ]

  card 会員情報 [
    会員情報
    --
    呼び出し名
    ニックネーム
    プロフィール画像
    血液型
    身長
    体重
    既往歴
    妊娠・授乳
  ]

  card アレルギーや副作用 [
    アレルギーや副作用
    --
    アレルギー
    副作用
    お薬名や食品名など
    状態やメモ
    服用日
    画像
  ]
  card 保険証受給証 [
    保険証受給証
    --
    記号
    番号
    保険者・受給証番号など
  ]
  card 家族情報
  card 招待コード

  ' 内部関連
  EPARKアカウント -- 会員情報
  会員情報 -- アレルギーや副作用
  会員情報 -- 保険証受給証

  会員情報 -- 家族情報
  家族情報 -- 招待コード

  ' 外部関連
  デバイス設定 --- EPARKアカウント
}

rectangle EPARKポイント関連 {
  card ポイントアクション [
    ポイントアクション
    --
    タイトル
    獲得ポイント数
    獲得条件
    獲得上限回数
    ポイント付与制約
  ]
  collections ポイントアクション一覧 [
    今月のポイントアクション
  ]
  card 達成済みアクション

  card 現在の所有ポイント [
    現在の所有ポイント
    所持ポイント
  ]

  ' コレクション
  ポイントアクション一覧 - ポイントアクション
  ' 内部関連
  ポイントアクション -- 達成済みアクション

  ' 外部関連
  現在の所有ポイント -- EPARKアカウント
  達成済みアクション --- EPARKアカウント
}

rectangle 病院関連 {
  collections 病院一覧 [
    病院一覧
    --
    フリーワード検索結果
    地図検索結果
    絞り込み条件による検索結果
  ]
  card 病院一覧件数
  card 病院 [
    病院
    --
    名前
    住所
    電話番号
    オンライン診療予約可能
    ネット予約可能
    営業時間
  ]
  card 診療科目

  ' コレクション
  病院一覧 - 病院

  ' 内部関連
  診療科目 -- 病院
  病院一覧 -- 病院一覧件数

}

rectangle 薬局関連 {
  collections 薬局一覧 [
    薬局一覧
    --
    かかりつけの薬局一覧
    フリーワード検索結果
    地図検索結果
    絞り込み条件による検索結果
  ]
  card 薬局一覧件数
  card 薬局 [
    薬局
    --
    薬局名
    画像
    店舗情報QRコード
    営業時間
    臨時営業時間
    調剤窓口営業時間
    予約受付時間
    住所
    電話番号
    FAX番号
    駐車場有無
    URL
  ]
  card 提供しているサービス
  card 使用可能なカードの種類

  ' コレクション
  薬局一覧 - 薬局
  ' 内部関連
  薬局一覧 -- 薬局一覧件数
  薬局 -- 提供しているサービス
  薬局 -- 使用可能なカードの種類
  ' 外部関連
}

rectangle 共有関連 {
  card 共有
  collections 共有一覧 [
    共有一覧
    病院・クリニック共有一覧
    薬局共有一覧
    自動連係中の医療機関
    通院中の医療機関
  ]
  card お気に入りの病院
  card かかりつけの薬局

  card 共有情報 [
    共有情報
    --
    カテゴリ
    --
    基本情報
    お薬情報
    バイタル情報
    予定や予約履歴
    その他アプリ登録した情報
  ]

  ' コレクション
  共有一覧 - 共有
  ' 内部関連

  お気に入りの病院 -- 共有情報
  かかりつけの薬局 -- 共有情報
  ' 外部関連
  病院 --- お気に入りの病院
  薬局 --- かかりつけの薬局
  お気に入りの病院 --- EPARKアカウント
  かかりつけの薬局 --- EPARKアカウント
}

rectangle 電子お薬手帳相互閲覧サービス関連 {
  card ワンタイムコード [
    ワンタイムコード
    --
    有効期限
  ]

  ' 外部関連
  会員情報 --- ワンタイムコード
}

rectangle 出力データ関連 {
    card 医療費の出力データ [
    医療費の出力データ
    --
    出力する年
    対象ユーザー
  ]
  card お薬手帳の出力データ [
    お薬手帳の出力データ
    --
    出力する期間
    対象ユーザー
  ]

  card ウェブ医療費控除申請eTax用フォーマット

  ' 内部関連
  医療費の出力データ -- ウェブ医療費控除申請eTax用フォーマット

  ' 外部関連
  会員情報 --- 医療費の出力データ
  会員情報 --- お薬手帳の出力データ
}

rectangle 血圧手帳関連 {
  card 血圧手帳 [
    血圧手帳
    --
    血圧手帳（表）
  ]
  card 期間平均 [
    期間平均
    --
    開始日
    終了日
  ]
  card 目標血圧
  card 家庭血圧 [
    家庭血圧
    --
    最高（収縮期）
    最低（拡張期）
  ]
  card 診療室血圧 [
    診療室血圧
    --
    最高（収縮期）
    最低（拡張期）
  ]
  card 最後に測った日 [
    最後に測った日
    --
    日付
    曜日
  ]
  card 日々の記録
  card 血圧測定結果 [
    血圧測定結果
    --
    日時
    時間帯
    朝の測定メモ
    測定場所
    体重
    体脂肪率
    体温
    服薬状況
    受診
    食事内容
    気分や体調
    画像メモ
  ]
  card 回数
  card 平均
  card 血圧 [
    血圧
    --
    最高血圧
    最低血圧
  ]
  card 脈拍

  card 血圧手帳データ出力結果 [
    血圧手帳データ出力結果
    --
    表示形式
    表示方法
    期間
  ]

  ' 内部関連
  血圧手帳 -- 日々の記録
  日々の記録 -- 血圧測定結果
  日々の記録 -- 最後に測った日
  日々の記録 -- 回数
  日々の記録 -- 平均
  血圧測定結果 -- 血圧
  血圧測定結果 -- 脈拍
  血圧手帳 -- 目標血圧
  血圧手帳 -- 血圧手帳データ出力結果
  目標血圧 <|-- 家庭血圧
  目標血圧 <|-- 診療室血圧

  ' 外部関連
  会員情報 --- 血圧手帳
}

rectangle 予防接種関連 {
  card インフルエンザ感染予報 [
    インフルエンザ感染予報
    --
    日付
  ]
  card レベル [
    レベル
    --
    説明
  ]
  card 満足度調査
  card 予防接種で防げる病気 [
    予防接種で防げる病気
    --
    どんな病気
  ]
  card ワクチン [
    ワクチン
    --
    予防接種予算
    効果のある疾患
    接種時期と接種回数
    おすすめの受け方
  ]
  collections ワクチン一覧 [
    登録可能なワクチン一覧
  ]

  card 予防接種 [
    予防接種
    --
    予防接種日
    予防接種を受ける場所
  ]

  ' コレクション
  ワクチン一覧 - ワクチン
  ' 内部関連
  インフルエンザ感染予報 -- レベル
  インフルエンザ感染予報 -- 満足度調査
  予防接種で防げる病気 -- ワクチン
  ワクチン -- 予防接種

  ' 外部関連
  会員情報 --- 予防接種

}

rectangle ヘルプ関連 {
  card ヘルプ [
    ヘルプ
    --
    質問
    回答
  ]
  collections ヘルプ一覧 [
    ヘルプ一覧
    --
    注目の質問
    よくあるご質問
    ヘルプ検索結果
  ]

  card タグ
  card 大分類
  card 中分類
  card ヘルプページへの評価 [
    ヘルプページへの評価
    --
    ご意見・ご要望
  ]

  ' コレクション
  ヘルプ一覧 - ヘルプ
  ' 内部関連
  大分類 -- 中分類
  中分類 -- ヘルプ
  タグ -- ヘルプ
  ヘルプ -- ヘルプページへの評価
}

rectangle お問い合わせ関連 {
  card お問い合わせ [
    お問い合わせ
    --
    お名前
    電話番号
    Email
    都道府県
    お問い合わせの種類
    お問い合わせ内容
  ]
}

rectangle お知らせ関連 {
  card お知らせ [
    お知らせ
    --
    日時
    タイトル
    本文
  ]
  collections お知らせ一覧 [
    医療機関のお知らせ一覧
    運営のお知らせ一覧
  ]
  card カテゴリ
  card 既読

  ' コレクション
  お知らせ一覧 - お知らせ
  ' 内部関連
  カテゴリ -- お知らせ
  お知らせ -- 既読

  ' 外部関連
  薬局 --- お知らせ
  既読 --- EPARKアカウント
}

@enduml

```

---

### 他サービス

- 電子お薬手帳相互閲覧サービス
- マイナポータル
  - 予防接種情報


---

### 気になったこと

- 「現在の所有ポイント」と「所持ポイント」は同義か？
- 「ポイント」は全て「EPARKポイント」と同義か？
- 「お薬手帳ポイント一覧」の"一覧"とは何の一覧か？
- 「今月のポイントアクション」と「今月獲得できるポイント」は同義か？
- ポイントの単位は「pt」と「ポイント」で同義か？
- 「登録済みの病院」と「お気に入りの病院」は同義か？
- 「使用可能なカードの種類」が「0」表記となるケースがあるが、想定通りか？
- 「提供しているサービス」という見出しが重複しているが、想定通りか？
- 「施設」と「医療機関」は同義か？
- 「出力する期間」と「出力する年」は同義か？
