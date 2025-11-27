import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const backgroundImageUrls = [
  "images/home-page/rap-chieu-phim-d-aqua.jpg",
  "images/home-page/ho-boi-d-aqua.jpg",
  "images/home-page/san-tap-yoga-d-aqua.jpg",
  "images/home-page/aqua-gym.jpg",
  "images/home-page/bbq-ngoai-troi-d-aqua.jpg",
  "images/home-page/khu-leo-nui-d-aqua.png",
  "images/home-page/khu-ngam-hoang-hon-d-aqua.jpg",
  "images/home-page/khu-cho-thuong-mai-d-aqua.jpg",
  "images/home-page/khu-suoi-canh-quan-d-aqua.jpg",
];

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function FacilitiesBackgrounds({
  activeIndex,
  setActiveIndex,
}: Props) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Scroll đến slide tương ứng với activeIndex
    api.scrollTo(activeIndex);

    // Lắng nghe sự kiện khi carousel được kéo/thay đổi
    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setActiveIndex(selectedIndex);
    };

    api.on("select", handleSelect);

    // Cleanup listener khi component unmount
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, activeIndex, setActiveIndex]);

  return (
    <Carousel setApi={setApi} className="h-screen">
      <CarouselContent className="h-screen">
        {backgroundImageUrls.map((url, index) => (
          <CarouselItem key={index} className="h-full">
            <div
              className="relative h-full bg-cover bg-center flex items-end justify-start"
              style={{
                backgroundImage: `url(${url})`,
              }}
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
