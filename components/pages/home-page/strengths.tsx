import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    imageUrl: "/images/home-page/the-manh-d-aqua-1.jpg",
    title: "THÁP ĐÔI LỆCH TẦNG - KIỆT TÁC THỊNH VƯỢNG",
    content:
      "Trên thế đất cận sông dồi dào vượng khí, D-Aqua hiện diện kiêu hãnh với thiết kế tháp đôi giựt tầng độc đáo. Kiến trúc tháp đôi vững chải trên khung cảnh rực rỡ của Bến Hoa, về đêm còn được thắp sáng bằng hàng ngàn bóng đèn led, tạo nên biểu tượng sống thịnh vượng đáng mơ ước.",
  },
  {
    id: 2,
    imageUrl: "/images/home-page/the-manh-d-aqua-2.jpg",
    title: "THIẾT KẾ NỘI THẤT MAY ĐO & TINH TẾ",
    content:
      "Khác với những căn hộ thông thường khác, D-Aqua đặc biệt dành sự quan tâm và trau chuốt cho không gian sống trong từng căn hộ. Chú trọng đến thị hiếu của các gia đình trẻ, các không gian được thiết kế tối ưu công năng và áp dụng lối bố trí thông minh nhằm đem đến trải nghiệm sống tiện nghi cho cả người lớn lẫn trẻ nhỏ.",
  },
];

export default function Strengths() {
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
              <div className="container mx-auto px-4">
                <div className="flex items-center flex-wrap h-screen">
                  <div className="w-1/2"></div>
                  <div className="flex-1 px-4 relative before:content-[''] before:block before:w-[150%] before:h-[130%] before:top-1/2 before:left-1/2 before:rounded-[60%] before:absolute before:bg-[#063c4c] before:opacity-60 before:z-0 before:blur-[100px] before:translate-x-[-55%] before:translate-y-[-50%]">
                    <div className="text-white relative z-1 max-w-[80%]">
                      <h3 className="text-3xl md:text-[40px] md:leading-13 font-bold mb-4 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed font-medium text-white">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
