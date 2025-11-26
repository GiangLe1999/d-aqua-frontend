import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    imageUrl: "/images/home-page/du-an-bds-d-aqua-banner-1.jpg",
  },
  {
    id: 2,
    imageUrl: "/images/home-page/du-an-bds-d-aqua-banner-2.png",
  },
];

export default function HeroBanner() {
  return (
    <Carousel>
      <CarouselContent className="h-screen">
        {CAROUSEL_ITEMS.map((item) => (
          <CarouselItem key={item.id} className="h-full">
            <div
              className="relative h-full bg-cover bg-center flex items-end justify-start"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            >
              <div className="absolute bottom-[66px] left-[66px] space-y-3 text-white z-10 bg-[#006b82b8]/95 w-[32vw] max-w-[600px] p-10 rounded-lg">
                <h1 className="font-bold text-4xl scale-y-110">D-AQUA</h1>
                <p>
                  D-Aqua là dự án bất động sản được phát triển theo mô hình hiện
                  đại, trẻ trung, hướng đến cung cấp không gian sống chất lượng
                  cho người trẻ thành thị. Dự án gồm hai tòa tháp sở hữu kiến
                  trúc lệch tầng độc đáo.
                </p>
                <Link
                  href="/gioi-thieu"
                  className="text-sm font-bold underline"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
