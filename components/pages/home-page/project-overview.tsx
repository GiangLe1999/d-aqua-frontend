import OutlineButton from "@/components/ui/outline-button";
import Link from "next/link";

const projectDetails = [
  {
    name: "Vị trí dự án",
    value: "301 Đường Bình Đông, Phường 14, Quận 8",
    isBig: false,
  },
  {
    name: "Diện tích khu đất",
    value: "8.025,7 m²",
    isBig: false,
  },
  {
    name: "Tổng quy mô",
    value: "2 block - gồm 25 tầng nổi và 2 tầng hầm",
    isBig: false,
  },
  {
    name: "Diện tích xây dựng",
    value: "60.129,1 m²",
    isBig: true,
  },
  {
    name: "Mật độ xây dựng",
    value: "47%",
    isBig: true,
  },
  {
    name: "Tổng số căn hộ",
    value: "650 căn",
    isBig: true,
  },
];

const ProjectOverview = () => {
  return (
    <div
      className="relative h-full bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage:
          "url('/images/home-page/kiet-tac-thap-doi-du-an-bat-dong-san-d-aqua.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4">
            <div className="w-[75%] mx-auto relative text-center text-white">
              <Link href="/gioi-thieu" className="block relative z-1">
                <h2 className="text-3xl md:text-5xl md:leading-16 font-bold mb-4">
                  KIỆT TÁC THÁP ĐÔI TÂM ĐIỂM QUẬN 8
                </h2>
              </Link>

              <div className="mb-6 relative z-1">
                <p className="text-sm leading-relaxed font-medium">
                  Khởi xây từ khao khát nâng tầm trải nghiệm sống trong khu vực
                  bằng chuỗi tiện ích khai phóng và độc nhất, D-Aqua không chỉ
                  đơn thuần mang đến không gian sống chất mà còn là những khoảnh
                  khắc tận hưởng trọn vẹn bên gia đình thân yêu.
                </p>
              </div>

              <div className="mt-8 relative project-overview-smoke">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-1">
                  {projectDetails.map((detail, index) => (
                    <div key={index} className="text-center">
                      <h4 className="text-sm font-medium mb-2 opacity-90">
                        {detail.name}
                      </h4>
                      <p
                        className={`font-bold ${
                          detail.isBig ? "text-3xl" : "text-base"
                        }`}
                      >
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 relative z-1">
                  <Link href="/gioi-thieu">
                    <OutlineButton text="Xem thêm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
