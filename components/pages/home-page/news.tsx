import Image from "next/image";

interface NewsCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description?: string; // Mô tả chỉ hiển thị cho card lớn
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  date,
  title,
  description,
}) => {
  const isLargeCard = !!description; // Xác định nếu đây là card lớn dựa vào việc có description hay không

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      {/* Image with scale on hover */}
      <div className="w-full h-full relative">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
      </div>

      {/* Overlay with dark background and content */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300">
        {/* Darker overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        <p className="relative z-10 text-sm opacity-80 mb-2">{date}</p>
        <h3 className="relative z-10 text-xl font-bold mb-2">{title}</h3>
        {isLargeCard && description && (
          <p className="relative z-10 text-sm opacity-90 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="h-screen bg-linear-to-b from-[#FBFFFF] to-[#D3F8FF]">
      <div className="container mx-auto h-full flex items-center">
        <div className="mb-12">
          <div>
            <h2 className="text-4xl md:text-[52px] leading-none pb-1 font-mono bg-linear-to-r from-[#05c5b4] to-[#b7e65a] bg-clip-text text-transparent inline-block mb-2">
              Truyền thông
            </h2>
            <h3 className="text-3xl md:text-[45px] font-bold text-[#08708e] mb-8">
              THÔNG TIN MỚI NHẤT
            </h3>
          </div>

          <div className="flex gap-6">
            {/* Large Card */}
            <div className="w-2/3">
              <NewsCard
                imageUrl="/images/home-page/carousel-image-1.jpg"
                date="03.01.2025"
                title="CHẠM ĐẾN HOÀN THIỆN – KIẾN TẠO TỔ ẤM TƯƠNG LAI"
                description="Những ngày đầu năm, D-Aqua tỏa sáng với diện mạo mới, mang dáng hình của một khu căn hộ cao cấp gần hoàn thiện. Trong hành trình kiến tạo tổ ấm mơ ước của D-Aqua, sự đồng hành của Quý Khách hàng là động lực to lớn. Chúng tôi cam kết mang đến không gian sống đẳng cấp, tiện nghi và hiện đại, nơi mọi gia đình có thể tận hưởng cuộc sống trọn vẹn. Hãy cùng chờ đón những cập nhật mới nhất về dự án D-Aqua nhé!"
              />
            </div>

            <div className="flex-1 flex-col gap-6">
              {/* Small Card 1 */}
              <NewsCard
                imageUrl="/images/home-page/carousel-image-1.jpg"
                date="24.12.2026"
                title="MERRY CHRISTMAS"
              />

              {/* Small Card 2 */}
              <NewsCard
                imageUrl="/images/home-page/carousel-image-1.jpg"
                date="24.12.2026"
                title="BDS THƯƠNG MẠI TP HCM: ĐỘNG LỰC TĂNG TRƯỞNG MỚI"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
