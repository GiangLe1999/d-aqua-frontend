import OutlineButton from "@/components/ui/outline-button";
import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "125M MẶT TIỀN SÔNG",
    content:
      "Dự án duy nhất trong khu vực sở hữu 125m mặt tiền bờ sông, dồi dào vượng khí.",
    icon: "/images/home-page/reason-icon-1.png",
  },
  {
    title: "TUYỂN BUS SÔNG SỐ 2",
    content: "Một bước chân đến Trạm bus sông số 2 ngay trước mặt dự án.",
    icon: "/images/home-page/reason-icon-2.png",
  },
  {
    title: "VỊ TRÍ ĐẮC ĐỊA",
    content:
      "Từ D-AQUA, cư dân di chuyển thuận tiện đến Q.1, Q.3, Q.5, Q.10 chỉ trong 15 phút và là dự án hiếm hoi có 4 mặt view sông.",
    icon: "/images/home-page/reason-icon-3.png",
  },
  {
    title: "THIẾT KẾ THÁP ĐÔI",
    content:
      "Thiết kế tháp đôi lệch tầng độc đáo, biểu tượng sống thịnh vượng đáng mơ ước trong khu vực",
    icon: "/images/home-page/reason-icon-4.png",
  },
  {
    title: "TIỆN ÍCH NỘI KHU",
    content:
      "Hệ thống tiện ích độc nhất, nâng tầm giá trị căn hộ và mang đến chuẩn sống đẳng cấp.",
    icon: "/images/home-page/reason-icon-5.png",
  },
  {
    title: "GIÁ TRỊ GIA TĂNG",
    content:
      "Sinh lời nhanh sau khi mua, giá chuyển nhượng tăng trưởng nhờ thiết kế độc đáo cùng vị trí tọa lạc đắc địa.",
    icon: "/images/home-page/reason-icon-6.png",
  },
];

const Reasons = () => {
  return (
    <div
      className="relative h-full bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: "url('/images/home-page/ly-do-dau-tu-vao-d-aqua.png')",
      }}
    >
      <div className="container h-screen mx-auto">
        <div className="flex flex-wrap gap-10">
          <div className="md:w-1/3 mt-[6%]">
            <div className="relative text-center text-white">
              <div>
                <h2 className="text-[52px] leading-none pb-4 pl-[5px] pr-[5px] font-mono bg-linear-to-r from-[#05c5b4] to-[#b7e65a] bg-clip-text text-transparent inline-block">
                  6 lý do
                </h2>
                <h3 className="font-bold text-4xl scale-y-110">
                  ĐẦU TƯ VÀO D-AQUA
                </h3>
              </div>
            </div>
          </div>

          <div className="flex-1 h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 relative z-1 text-white">
              {reasons.map((detail, index) => (
                <div key={index} className="flex gap-4 max-w-[80%]">
                  <div className="shrink-0 relative w-[100px] h-[100px]">
                    <Image
                      src={detail.icon}
                      alt={detail.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 opacity-90">
                      {detail.title}
                    </h4>
                    <p className="text-[15px] font-medium">{detail.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
