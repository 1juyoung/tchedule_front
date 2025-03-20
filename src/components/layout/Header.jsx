import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  // 스크롤 위치에 따라 헤더가 배너 위에 있는지 여부를 상태로 관리
  const [isOverBanner, setIsOverBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 예시로 스크롤 위치가 500px 미만이면 배너 위로 판단
      if (window.scrollY < 800) {
        setIsOverBanner(true);
      } else {
        setIsOverBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-8 left-9 right-0 h-16 flex items-center justify-between px-4 bg-opacity ${isOverBanner ? "text-neutral-50" : "text-black"
        }`}
    >
      <Link to="/" className="sm:text-sm text-xl font-bold">
        T-Chedule
      </Link>
      <AiOutlineUser className="fixed sm:mt-0 mt-3 right-12 sm:text-xl text-3xl" />
    </div>
  );
}

export default Header;
