import useHomeImgStatus from "../../hooks/useHomeImgStatus";
import bg_img1 from "../../assets/bg_imag.jpeg";
import bg_img2 from "../../assets/bg_img2.jpg";

function Banner() {
  const slides = [bg_img1, bg_img2];
  const { current } = useHomeImgStatus(slides, 8000);

  return (
    <>
      {/* 글로벌 여백 영향을 받지 않도록 고정 배경 이미지 */}
      <div
        className="fixed inset-0 m-0 p-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${slides[current]})` }}
      ></div>

      {/* 컨텐츠 영역은 필요에 따라 여백 적용 */}
      <div className="relative min-h-screen flex flex-col justify-center sm:items-center px-6 md:px-16">
        <p className="sm:text-base md:text-sm lg:text-xl text-neutral-50 font-bold 
        leading-tight mb-2">
          어디로 가고 싶으신가요?
        </p>
        <h1 className="sm:text-xl md:text-3xl lg:text-5xl font-bold text-neutral-50">
          나를 아는 여행 앱
        </h1>
        <h1 className="sm:text-3xl md:text-3xl lg:text-5xl font-bold text-neutral-50 leading-tight">
          트케줄
        </h1>
      </div>
    </>
  );
}

export default Banner;
