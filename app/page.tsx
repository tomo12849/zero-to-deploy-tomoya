"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuData = {
  主菜: [
    {
      id: 1,
      name: "ハンバーグプレート",
      price: 980,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "チキンカレー",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "カルボナーラ",
      price: 920,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  飲み物: [
    {
      id: 4,
      name: "アイスコーヒー",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "カフェラテ",
      price: 480,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "オレンジジュース",
      price: 380,
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  デザート: [
    {
      id: 7,
      name: "ショートケーキ",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "パンケーキ",
      price: 720,
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "バニラアイス",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
    },
  ],
}

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [orderList, setOrderList] = useState<any[]>([])

  const addToOrder = (item: any) => {
    setOrderList((prev) => [...prev, item])
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-amber-50">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 text-center sticky top-0 z-10">
        <h1 className="text-xl font-bold">
          テーブル1番 いらっしゃいませ！
        </h1>
        <p className="text-sm text-gray-600">
          カフェテリアへようこそ！
        </p>
      </header>

      {/* Top Menu */}
      {!showMenu && (
        <div className="w-full max-w-md p-4 space-y-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Button
                onClick={() => setShowMenu(true)}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900"
              >
                ご注文
              </Button>

              <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                テイクアウト注文
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 grid grid-cols-1 gap-4">
              <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                注文履歴
              </Button>

              <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                店員を呼ぶ
              </Button>

              <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                お会計
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Menu List */}
      {showMenu && (
        <div className="w-full max-w-5xl p-4 space-y-10">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => setShowMenu(false)}
            className="mb-2"
          >
            ← トップへ戻る
          </Button>

          {/* Genre Sections */}
          {Object.entries(menuData).map(([genre, items]) => (
            <section key={genre} className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-900">
                {genre}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />

                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-amber-700 font-bold">
                          ¥{item.price}
                        </p>
                      </div>

                      <Button
                        onClick={() => addToOrder(item)}
                        className="w-full bg-amber-300 hover:bg-amber-400 text-amber-900"
                      >
                        注文リストへ追加
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          {/* Order List */}
          <Card className="mt-10">
            <CardContent className="p-4 space-y-3">
              <h2 className="text-xl font-bold">
                注文リスト
              </h2>

              {orderList.length === 0 ? (
                <p className="text-gray-500">
                  まだ商品が追加されていません
                </p>
              ) : (
                <div className="space-y-2">
                  {orderList.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b pb-2"
                    >
                      <span>{item.name}</span>
                      <span>¥{item.price}</span>
                    </div>
                  ))}

                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>合計</span>

                    <span>
                      ¥
                      {orderList.reduce(
                        (sum, item) => sum + item.price,
                        0
                      )}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 p-4">
        © 2026 Cafeteria System
      </footer>
    </main>
  )
}
