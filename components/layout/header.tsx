"use client";

import React, { useState, useEffect } from "react";
import { Menu, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Trạng thái header bị ẩn (trượt lên)
  const [isHidden, setIsHidden] = useState(false);
  // Biến dùng để lưu vị trí cuộn trang trước đó
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hàm xử lý cuộn trang
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 1. Kiểm tra xem trang đã cuộn đủ xa chưa (để kích hoạt hiệu ứng)
    if (currentScrollY > 100) {
      setIsScrolled(true);

      // 2. Xử lý logic thụt lên/thụt xuống (Slide Up/Down)
      // Nếu cuộn xuống VÀ đã cuộn hơn 200px -> Ẩn Header
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      }
      // Nếu cuộn lên VÀ đã cuộn hơn 200px -> Hiện Header
      else if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setIsHidden(false);
      }
    } else {
      // Khi quay lại đầu trang
      setIsScrolled(false);
      setIsHidden(false);
    }

    // 3. Cập nhật vị trí cuộn cũ
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function để gỡ bỏ event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run effect khi lastScrollY thay đổi

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${isScrolled ? "" : "bg-transparent"}
  `}
    >
      <div
        className={`absolute inset-0 h-full bg-linear-to-b from-[rgba(0,74,143,0.3)] to-[rgba(0,74,143,0)] opacity-100 z-0`}
      ></div>
      <div className="relative big-container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 z-1">
        {/* Phần trái: Socials */}
        <div className="flex items-center space-x-4 font-semibold">
          <Link
            href="#"
            target="_blank"
            className="hover:opacity-80 text-sm hover:text-[#ddbd48] transition duration-400"
          >
            Facebook
          </Link>
          <div className="w-px h-3 bg-white/60"></div>
          <Link
            href="#"
            target="_blank"
            className="hover:opacity-80 text-sm hover:text-[#ddbd48] transition duration-400"
          >
            Youtube
          </Link>
        </div>

        <Link
          href="/"
          className="w-[126px] aspect-[1.35] grid place-items-center rounded-b-md main-gradient main-border border-t-0!"
        >
          <div className="relative w-[65%] aspect-[1.28]">
            <Image
              src="/images/logo.png"
              alt="D-Aqua Logo"
              fill
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </Link>

        {/* Phần phải: Search, Language, Menu */}
        <div className="flex items-center space-x-6">
          <Button className="rounded-full main-border main-gradient bg-white text-white px-8! h-10 font-bold text-base">
            <PhoneCall className="w-4 h-4" />
            <Link href="tel:0987217979">098 721 7979</Link>
          </Button>

          <Button className="h-10 aspect-square rounded-full main-gradient main-border">
            <Menu className="h-6 w-8" />
          </Button>
        </div>
      </div>
    </header>
  );
}
