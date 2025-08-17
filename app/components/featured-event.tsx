import { Button } from "../components/ui/button"
import man from "../../public/podcast-man-white-shirt.png"
export function FeaturedEvent() {
  return (
    <div className="relative mb-8 rounded-lg overflow-hidden bg-black justify-center flex-col items-center">
      <img src={"/podcast-man-white-shirt.png"} alt="Peter Attia speaking" className="w-full h-110 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="absolute top-24 left-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          5 Practical Ways to Slow Aging
          <br />
          in 2025
        </h1>
        <h2 className="text-xl font-semibold mb-1">Peter Attia</h2>
        <p className="text-gray-300 mb-1">Aging Research Institute</p>
        <p className="text-sm text-gray-400 mb-4">15th August 2 PM EST</p>

        <div className="flex space-x-3">
          <Button className="bg-[#00AAFF] rounded-[10px] hover:bg-blue-600 text-white px-6">Reserve your Spot !</Button>
          <Button variant="outline" className="border-[#00AAFF] text-[#00AAFF] bg-transparent">
            Visit Profile
          </Button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">Live</span>
      </div>
    </div>
  )
}
