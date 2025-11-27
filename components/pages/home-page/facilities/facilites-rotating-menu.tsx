import OutlineButton from "@/components/ui/outline-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    id: 0,
    icon: "/images/home-page/rap-chieu-phim-d-aqua-icon.png",
    activeIcon: "/images/home-page/rap-chieu-phim-d-aqua-active-icon.png",
    name: "RẠP PHIM NGOÀI TRỜI",
    description:
      "Rạp chiếu phim ngoài trời giúp kết nối tình thân, mang đến không gian giải trí độc đáo.",
  },
  {
    id: 1,
    icon: "/images/home-page/ho-boi-d-aqua-icon.png",
    activeIcon: "/images/home-page/ho-boi-d-aqua-active-icon.png",
    name: "HỒ BƠI SỢI QUANG HỌC",
    description:
      "Áp dụng công nghệ sợi quang học đem đến hiệu ứng thị giác đặc sắc, trải nghiệm thư giãn đẳng cấp.",
  },
  {
    id: 2,
    icon: "/images/home-page/san-tap-yoga-d-aqua-icon.png",
    activeIcon: "/images/home-page/san-tap-yoga-d-aqua-active-icon.png",
    name: "VƯỜN THIỀN & YOGA",
    description:
      "Liệu pháp sống cân bằng, tĩnh tại, loại bỏ căng thẳng và tăng cường sức khỏe.",
  },
  {
    id: 3,
    icon: "/images/home-page/aqua-gym-icon.png",
    activeIcon: "/images/home-page/aqua-gym-active-icon.png",
    name: "AQUA GYM",
    description:
      "Hình thức tập thể dục dưới nước đầy mới lạ. Bổ sung sức đề kháng và sức nổi cho cơ thể.",
  },
  {
    id: 4,
    icon: "/images/home-page/bbq-ngoai-troi-d-aqua-icon.png",
    activeIcon: "/images/home-page/bbq-ngoai-troi-d-aqua-active-icon.png",
    name: "KHU BBQ NGOÀI TRỜI",
    description:
      "Tận hưởng khoảng thời gian tuyệt vời cùng gia đình, bạn bè quanh không gian ẩm thực nướng ngoài trời độc đáo.",
  },
  {
    id: 5,
    icon: "/images/home-page/khu-leo-nui-d-aqua-icon.png",
    activeIcon: "/images/home-page/khu-leo-nui-d-aqua-active-icon.png",
    name: "KHU LEO NÚI NHÂN TẠO",
    description:
      "Rèn luyện thể lực cho những nhà vô địch nhí, đáp ứng nhu cầu vận động của các bé.",
  },
  {
    id: 6,
    icon: "/images/home-page/khu-ngam-hoang-hon-d-aqua-icon.png",
    activeIcon: "/images/home-page/khu-ngam-hoang-hon-d-aqua-active-icon.png",
    name: "KHU NGẮM HOÀNG HÔN",
    description:
      "Trọn vẹn từng khoảnh khắc lúc chiều buông cùng người thân và bạn bè.",
  },
  {
    id: 7,
    icon: "/images/home-page/khu-cho-thuong-mai-d-aqua-icon.png",
    activeIcon: "/images/home-page/khu-cho-thuong-mai-d-aqua-active-icon.png",
    name: "PHỐ CHỢ THƯƠNG MẠI",
    description:
      "Tuyến phố thương mại mở ngoài trời sầm uất, nhộn nhịp, được bố trí dọc theo bờ suối cảnh quan.",
  },
  {
    id: 8,
    icon: "/images/home-page/khu-suoi-canh-quan-d-aqua-icon.png",
    activeIcon: "/images/home-page/khu-suoi-canh-quan-d-aqua-active-icon.png",
    name: "SUỐI CẢNH QUAN",
    description:
      "Đây được xem là điểm nhấn ấn tượng trong thiết kế của D-Aqua. Dòng suối không chỉ có chức năng nối kết 2 tòa tháp, mà còn tạo nên vùng lõi thiên nhiên mát lành.",
  },
];

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const FacilitiesRotatingMenu = ({ activeIndex, setActiveIndex }: Props) => {
  const numItems = menuItems.length;
  const angleStep = 360 / numItems;
  const radius = 320;

  const rotationAngle = 90 - activeIndex * angleStep;
  const activeItem = menuItems[activeIndex];

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 z-10"
      style={{ left: -100 }} // Dịch sang trái để ẩn nửa bên trái
    >
      {/* Container chung */}
      <div
        className="relative"
        style={{
          width: radius * 2,
          height: radius * 2 + 100,
        }}
      >
        {/* VÒNG TRÒN XOAY */}
        <div
          className="absolute border-2 border-[#2a98a4] top-1/2 left-1/2 flex items-center justify-center rounded-full transition-transform duration-700 ease-in-out before:content-[''] before:block before:w-full before:h-full before:top-0 before:left-0 before:rounded-[50%] before:absolute before:bg-black before:opacity-70 before:z-[-1] before:blur-[60px]"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
          }}
        >
          {menuItems.map((item, index) => {
            const itemAngle = index * angleStep;
            const x = radius * Math.cos((90 - itemAngle) * (Math.PI / 180));
            const y = radius * Math.sin((90 - itemAngle) * (Math.PI / 180));
            const isActive = index === activeIndex;

            const iconSrc = isActive ? item.activeIcon : item.icon;
            const iconTransform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;

            return (
              <button
                key={item.id}
                className="absolute w-[93px] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% - ${y}px)`,
                  transform: iconTransform,
                }}
                onClick={() => setActiveIndex(index)}
                title={item.name}
              >
                <Image
                  src={iconSrc}
                  alt={item.name}
                  className="object-cover p-1"
                  fill
                />
              </button>
            );
          })}
        </div>

        {/* KHỐI NỘI DUNG TRUNG TÂM */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80%]"
          style={{ zIndex: 10 }}
        >
          <h2 className="text-[52px] leading-none pb-2.5 pl-[5px] pr-[5px] font-mono bg-linear-to-r from-[#00ffe8] to-[#c4fe6b] bg-clip-text text-transparent inline-block">
            Nội khu
          </h2>
          <h3 className="text-3xl md:text-[45px] md:leading-15 font-bold mb-4 text-white">
            {activeItem.name}
          </h3>
          <p className="text-sm leading-relaxed font-medium text-white mb-6">
            {activeItem.description}
          </p>
          <Link href="/tien-ich">
            <OutlineButton text="Xem thêm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesRotatingMenu;
