import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const menuData = {
  dessert: [
    {
      name: "いちごショートケーキ",
      price: 550,
      img: "https://images.unsplash.com/photo-1606890737304-57a1c7d3d6f6"
    },
    {
      name: "ガトーショコラ",
      price: 600,
      img: "https://images.unsplash.com/photo-1601972599720-36938d4f3f5b"
    },
    {
      name: "ベイクドチーズケーキ",
      price: 580,
      img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40"
    },
    {
      name: "ティラミス",
      price: 620,
      img: "https://images.unsplash.com/photo-1612198791461-6c8f3a3b6a3e"
    },
    {
      name: "フレンチトースト",
      price: 700,
      img: "https://images.unsplash.com/photo-1587731556938-38755b4803a6"
    },
    {
      name: "パンケーキ（メープル）",
      price: 680,
      img: "https://images.unsplash.com/photo-1587731556938-38755b4803a6"
    }
  ],
  drink: [
    {
      name: "カフェラテ",
      price: 450,
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
    },
    {
      name: "カプチーノ",
      price: 480,
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      name: "アイスコーヒー",
      price: 350,
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
    }
  ]
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">カフェメニュー</h1>

      {/* デザート */}
      <h2 className="text-xl font-semibold mt-6 mb-2">デザート</h2>
      <div className="space-y-4">
        {menuData.dessert.map((item, i) => (
          <Card key={i} className="overflow-hidden">
            <Image src={item.img} alt={item.name} width={600} height={400} className="w-full h-40 object-cover" />
            <CardContent className="p-4">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-gray-700 mb-2">¥{item.price}</p>
              <Button className="w-full bg-amber-300 hover:bg-amber-400 text-amber-900">
                注文リストへ追加
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ドリンク */}
      <h2 className="text-xl font-semibold mt-6 mb-2">ドリンク</h2>
      <div className="space-y-4 mb-10">
        {menuData.drink.map((item, i) => (
          <Card key={i} className="overflow-hidden">
            <Image src={item.img} alt={item.name} width={600} height={400} className="w-full h-40 object-cover" />
            <CardContent className="p-4">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-gray-700 mb-2">¥{item.price}</p>
              <Button className="w-full bg-amber-300 hover:bg-amber-400 text-amber-900">
                注文リストへ追加
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
