import banner from "../../assets/banner.png";
import NumberButton from "../layout/BannerNumberBtn";
import { useNavigate } from "react-router-dom";

function AiPlanBanner() {
    let navigate = useNavigate();

    return (
        <section className="bg-white min-h-screen -mx-[15rem] md:-mx-[15rem]">
          {/* 폰화면에서는 cols-1로 지정 */}
          <div className="grid grid-cols-2 sm:grid-cols-1 items-center px-20 md:px-16 pt-20">
            <div className="sm:order-first">
              <h2 className="text-3xl font-bold mb-2">AI로 여행 계획 짜기!</h2>
              <p className="font-bold text-zinc-400">트케줄을 통해 경험해보지 못한 여행을 즐기는 것이 가능해요.</p>
              <p className="font-bold text-zinc-400">여행 전, 여행 중, 여행 후 아무때나 나의 일정을 간편하게 수정하고 꺼내보세요!</p>
              <div className="grid grid-cols-2 grid-rows-2 pt-10 gap-4">
                <NumberButton number="1" label="유명한 맛집 탐방" />
                <NumberButton number="2" label="유니크 & 깨끗한 숙소" />
                <NumberButton number="3" label="지역별 힐링 코스" />
                <NumberButton number="4" label="실내 이색 액티비티 활동" />
              </div>
              <button className="flex items-center justify-center mt-8 w-[12rem] h-[3rem] rounded-3xl
               bg-sky-500/75 text-white font-bold"
               onClick={() => {
                navigate('/aiplan');
               }}>
                일정 살펴보기</button>
            </div>
            <div>
              <img src={banner} alt="배너 이미지" className="w-[40rem] md:order-2 sm:order-last" />
            </div>
          </div>
        </section>
      );
    }
    

export default AiPlanBanner;
