import Image from "next/image";

const timelineData = [
  {
    time: "03",
    unit: "phút",
    title: "Tuyến bus sông số 2",
    subtitle: "Trường tiểu học Hồng Đức",
    subtitle2: "Trường THPT Võ Văn Kiệt",
    image: "/images/home-page/tuyen-bus-song-so-2.png",
    position: "top",
    imgWidth: 200,
    imgHeight: 190,
  },
  {
    time: "05",
    unit: "phút",
    title: "Coopmart Tuy Lý Vương",
    subtitle: "Trường THCS Lê Lại",
    subtitle2: "Trường mầm non Steame Garten",
    image: "/images/home-page/coop-mart-tuy-ly-vuong.png",
    position: "bottom",
    imgWidth: 200,
    imgHeight: 177,
  },
  {
    time: "10",
    unit: "phút",
    title: "Chợ Bình Tây",
    subtitle: "Bệnh Viện Chợ Rẫy",
    subtitle2: "Hùng Vương Plaza",
    image: "/images/home-page/cho-binh-tay.png",
    position: "top",
    imgWidth: 200,
    imgHeight: 172,
  },
  {
    time: "15",
    unit: "phút",
    title: "Nhà thi đấu Phú Thọ",
    subtitle: "Trường ĐH KHTN",
    subtitle2: "Lotte Mart Lê Đại Hành",
    image: "/images/home-page/nha-thi-dau-phu-tho.png",
    position: "bottom",
    imgWidth: 200,
    imgHeight: 190,
  },
  {
    time: "20",
    unit: "phút",
    title: "Chợ Bến Thành",
    subtitle: "Công viên văn hóa Đầm Sen",
    subtitle2: "Aeon Mall Bình Tân",
    image: "/images/home-page/cho-ben-thanh.png",
    position: "top",
    imgWidth: 200,
    imgHeight: 177,
  },
];

export default function Ultilities() {
  return (
    <div className="h-screen flex items-center bg-linear-to-b from-[#D2F7FE] to-[#FDFFFF]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-[52px] leading-none pb-2.5 pl-[5px] pr-[5px] font-mono bg-linear-to-r from-[#05c5b4] to-[#b7e65a] bg-clip-text text-transparent inline-block">
            Ngoại khu
          </h2>
          <h3 className="text-3xl md:text-[45px] md:leading-15 font-bold mb-4 text-[#08708e]">
            TIỆN ÍCH VƯỢT TRỘI
          </h3>
        </div>

        <div>
          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-[56%] left-0 right-0">
              <div className="relative h-[3px]">
                <Image
                  src="/images/home-page/thanh-ngang.png"
                  alt="Thanh ngang"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-[43px] aspect-square rounded-full border-2 border-[#3ce9ef] absolute -top-5 left-[8.5%] bg-[#EBFBFE] before:content-[''] before:block before:absolute before:-top-[89%] before:left-1/2 before:w-px before:h-[35px] before:bg-linear-to-b before:from-[#08708e] before:to-[#00ffe8]"></div>
              <div className="w-[35px] aspect-square rounded-full border-2 border-[#3ce9ef] absolute -top-4 left-[29%] bg-[#EBFBFE] before:content-[''] before:block before:absolute before:top-full before:left-1/2 before:w-px before:h-[35px] before:bg-linear-to-b before:from-[#08708e] before:to-[#00ffe8]"></div>
              <div className="w-7 aspect-square rounded-full border-2 border-[#3ce9ef] absolute -top-3 left-[49%] bg-[#EBFBFE] before:content-[''] before:block before:absolute before:-top-[146%] before:left-1/2 before:w-px before:h-[35px] before:bg-linear-to-b before:from-[#08708e] before:to-[#00ffe8]"></div>
              <div className="w-[21px] aspect-square rounded-full border-2 border-[#3ce9ef] absolute -top-2.5 left-[69%] bg-[#EBFBFE] before:content-[''] before:block before:absolute before:top-full before:left-1/2 before:w-px before:h-[35px] before:bg-linear-to-b before:from-[#08708e] before:to-[#00ffe8]"></div>
              <div className="w-[19px] aspect-square rounded-full border-2 border-[#3ce9ef] absolute -top-2 left-[89%] bg-[#EBFBFE] before:content-[''] before:block before:absolute before:-top-[240%] before:left-1/2 before:w-px before:h-[35px] before:bg-linear-to-b before:from-[#08708e] before:to-[#00ffe8]"></div>
            </div>

            {/* Timeline Items */}
            <div className="relative flex justify-between items-center">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{ flex: "1" }}
                >
                  {/* Top Item */}
                  {item.position === "top" && (
                    <div className="flex flex-col items-center mb-8">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="object-cover"
                        width={item.imgWidth}
                        height={item.imgHeight}
                      />
                      <div className="text-center mb-2 mt-32">
                        <div className="flex items-end justify-center gap-1 mb-2">
                          <span className="text-6xl font-bold text-[#08708e]">
                            {item.time}
                          </span>
                          <span className="text-3xl text-[#08708e] font-mono mb-1">
                            {item.unit}
                          </span>
                        </div>
                      </div>

                      <div className="text-center max-w-xs space-y-1.5">
                        <p className="font-semibold text-gray-800 text-sm leading-tight">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {item.subtitle2}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Item */}
                  {item.position === "bottom" && (
                    <div className="flex flex-col items-center mt-36">
                      <div className="text-center mb-2">
                        <div className="flex items-end justify-center gap-1 mb-2">
                          <span className="text-6xl font-bold text-[#08708e]">
                            {item.time}
                          </span>
                          <span className="text-3xl text-[#08708e] font-mono mb-1">
                            {item.unit}
                          </span>
                        </div>
                      </div>
                      <div className="text-center max-w-xs space-y-1.5">
                        <p className="font-semibold text-gray-800 text-sm leading-tight">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {item.subtitle2}
                        </p>
                      </div>

                      <Image
                        src={item.image}
                        alt={item.title}
                        className="object-cover mt-28"
                        width={item.imgWidth}
                        height={item.imgHeight}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
