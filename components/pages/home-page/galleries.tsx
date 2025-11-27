// components/Galleries.tsx
"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const Galleries = () => {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      id: 1,
      url: "/images/home-page/carousel-image-1.jpg",
      title: "Toàn cảnh dự án",
    },
    {
      id: 2,
      url: "/images/home-page/carousel-image-2.jpg",
      title: "Phố Chợ Thương Mại",
    },
    {
      id: 3,
      url: "/images/home-page/carousel-image-3.jpg",
      title: "Khu vực tiện ích",
    },
    {
      id: 4,
      url: "/images/home-page/carousel-image-4.jpg",
      title: "Hồ bơi cao cấp",
    },
    {
      id: 5,
      url: "/images/home-page/carousel-image-5.jpg",
      title: "Teaser sự kiện D-Aqua",
    },
    {
      id: 6,
      url: "/images/home-page/carousel-image-6.jpg",
      title: "View ban công",
    },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "/images/home-page/carousel-image-1.jpg",
      youtubeId: "wnZQtIdvqRo",
      title: "Giới thiệu dự án",
    },
    {
      id: 2,
      thumbnail: "/images/home-page/carousel-image-6.jpg",
      youtubeId: "ws0WZ8vfqv0",
      title: "Vị trí dự án",
    },
    {
      id: 3,
      thumbnail: "/images/home-page/carousel-image-5.jpg",
      youtubeId: "PmjfrLx35_w",
      title: "Tiện ích dự án",
    },
    {
      id: 4,
      thumbnail: "/images/home-page/carousel-image-7.jpeg",
      youtubeId: "dQw4w9WgXcQ",
      title: "Tearser sự kiện D-Aqua",
    },
  ];

  const currentData = activeTab === "images" ? images : videos;

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Reset carousel khi đổi tab
  React.useEffect(() => {
    if (api) {
      api.scrollTo(0);
      setCurrent(0);
    }
  }, [activeTab, api]);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#D3F8FF] to-[#FBFFFF] py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-[52px] leading-none pb-1.5 font-mono bg-linear-to-r from-[#05c5b4] to-[#b7e65a] bg-clip-text text-transparent inline-block mb-2">
          Thư viện
        </h2>
        <h3 className="text-3xl md:text-[45px] font-bold text-[#08708e] mb-8">
          HÌNH ẢNH DỰ ÁN
        </h3>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-16 py-2.5 rounded-full font-semibold transition-all text-lg border-2  ${
              activeTab === "images"
                ? "bg-[#08708e] text-white border-[#08708e]"
                : "text-[#2bb9cf] border-[#38d8f1]"
            }`}
          >
            HÌNH ẢNH
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-16 py-2.5 rounded-full font-semibold transition-all text-lg border-2  ${
              activeTab === "videos"
                ? "bg-[#08708e] text-white border-[#08708e]"
                : "text-[#2bb9cf] border-[#38d8f1]"
            }`}
          >
            VIDEO
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {currentData.map((item: any, index: number) => (
              <CarouselItem
                key={item.id}
                className="pl-8 basis-full md:basis-[48%] lg:basis-[45%] flex items-center flex-col"
              >
                <div
                  className={`w-full transition-all duration-500 cursor-pointer ${
                    current === index ? "scale-100" : "scale-90 opacity-70"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video transform transition-all duration-500">
                    <Image
                      src={activeTab === "images" ? item.url : item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Play icon for videos */}
                    {activeTab === "videos" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 md:p-4 hover:bg-[#05c5b4] transition-colors">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-[#08708e] hover:text-white fill-current" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Title - chỉ hiện cho slide active */}
                {current === index && (
                  <div className="mt-6 text-center ">
                    <p className="text-[#08708e] font-bold text-xl md:text-2xl">
                      {item.title}
                    </p>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="p-0 max-w-7xl! gap-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-2xl font-bold text-[#08708e]">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="p-6">
            {activeTab === "images" && selectedItem?.url ? (
              <div className="w-full h-[80vh] relative">
                <Image
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ) : activeTab === "videos" && selectedItem?.youtubeId ? (
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1`}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Galleries;
