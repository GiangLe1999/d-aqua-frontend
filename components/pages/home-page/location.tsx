import OutlineButton from "@/components/ui/outline-button";
import Image from "next/image";
import Link from "next/link";

export default function Location() {
  return (
    <div className="bg-[#146C79] h-screen flex items-center justify-start relative location-left-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 relative z-1">
          <div className="w-full md:w-[390px] px-4">
            <h2 className="text-[52px] leading-none pb-2.5 pl-[5px] pr-[5px] font-mono bg-linear-to-r from-[#00ffe8] to-[#c4fe6b] bg-clip-text text-transparent inline-block">
              Địa thế vàng
            </h2>
            <h3 className="text-3xl md:text-[45px] md:leading-15 font-bold mb-4 text-white">
              TẠI LÕI TRUNG TÂM QUẬN 8
            </h3>
            <p className="text-sm leading-relaxed font-medium text-white mb-6">
              Tọa lạc trên mặt tiền Bến Bình Đông với 125m bờ sông vượng khí, dự
              án D-Aqua sở hữu địa thế hiếm có. Từ dự án, cư dân có thể dễ dàng
              di chuyển đến các khu vực trọng điểm nội đô cũng như tiếp cận với
              nhiều tiện ích ngoại khu đa dạng, vượt trội trong cự ly gần.
            </p>
            <Link href="/gioi-thieu">
              <OutlineButton text="Xem thêm" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-[75%] h-full top-0 right-0 z-0">
        <Image
          src="/images/home-page/vi-tri-vang-cua-du-an-d-aqua.png"
          alt="location"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
