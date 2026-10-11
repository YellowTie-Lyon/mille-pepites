import { home } from "../mock/data";

/* Vrai cookie photographique : tourne au défilement (voir .cookie-scroll-spin dans index.css) */
export default function HeroCookie() {
  return (
    <div
      className="cookie-scroll-spin relative mx-auto h-[440px] w-[440px] tablet:h-[400px] tablet:w-[400px] mobile:h-[310px] mobile:w-[310px]"
      data-testid="hero-cookie"
    >
      <img
        src={home.hero.cookieImage}
        alt="Vrai cookie géant Mille Pépites aux pépites de chocolat, vu de dessus"
        className="h-full w-full object-contain drop-shadow-[0_34px_50px_rgba(46,27,18,0.32)]"
      />
    </div>
  );
}
