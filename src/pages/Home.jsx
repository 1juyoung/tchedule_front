import useHomeImgStatus from "../hooks/useHomeImgStatus";
import bg_img1 from "../assets/bg_imag.jpeg";
import bg_img2 from "../assets/bg_img2.jpg";


function Home() {
  const slides = [bg_img1, bg_img2];
  const { current } = useHomeImgStatus(slides, 8000);

  return (
<div
  className="top-0 min-h-screen flex flex-col justify-center px-6 md:px-16 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${slides[current]})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }}
>

      <p className="sm:text-xs md:text-sm lg:text-xl text-neutral-50 font-bold leading-tight mb-2">
        어디로 가고 싶으신가요?
      </p>
      <h1 className="sm:text-lg md:text-3xl lg:text-5xl font-bold text-neutral-50 ">
        나를 아는 여행 앱
      </h1>
      <h1 className="sm:text-lg md:text-3xl lg:text-5xl font-bold text-neutral-50 leading-tight">
        트케줄
      </h1>
    </div>
  );
}

export default Home;
