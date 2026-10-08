import { localize } from "../i18n.js";
// Local responsive photography. Source and author credits are documented in README.md.
import hands480 from '../assets/images/sora-shimazaki-hands-cream-480.webp'
import hands960 from '../assets/images/sora-shimazaki-hands-cream-960.webp'
import hands1440 from '../assets/images/sora-shimazaki-hands-cream-1440.webp'
import mirror480 from '../assets/images/sora-shimazaki-morning-mirror-480.webp'
import mirror960 from '../assets/images/sora-shimazaki-morning-mirror-960.webp'
import mirror1440 from '../assets/images/sora-shimazaki-morning-mirror-1440.webp'
import mirror1920 from '../assets/images/sora-shimazaki-morning-mirror-1920.webp'
import water480 from '../assets/images/cottonbro-hands-running-water-480.webp'
import water960 from '../assets/images/cottonbro-hands-running-water-960.webp'
import water1440 from '../assets/images/cottonbro-hands-running-water-1440.webp'
import skin480 from '../assets/images/sora-shimazaki-cheek-cream-detail-480.webp'
import skin960 from '../assets/images/sora-shimazaki-cheek-cream-detail-960.webp'
import skin1440 from '../assets/images/sora-shimazaki-cheek-cream-detail-1440.webp'
import light480 from '../assets/images/kayley-window-light-ceramic-480.webp'
import light960 from '../assets/images/kayley-window-light-ceramic-960.webp'
import light1440 from '../assets/images/kayley-window-light-ceramic-1440.webp'
import ritual480 from '../assets/images/sora-shimazaki-quiet-mirror-ritual-480.webp'
import ritual960 from '../assets/images/sora-shimazaki-quiet-mirror-ritual-960.webp'
import ritual1440 from '../assets/images/sora-shimazaki-quiet-mirror-ritual-1440.webp'
import linen480 from '../assets/images/cup-of-couple-cloth-wooden-brush-480.webp'
import linen960 from '../assets/images/cup-of-couple-cloth-wooden-brush-960.webp'
import linen1440 from '../assets/images/cup-of-couple-cloth-wooden-brush-1440.webp'

export const photos = localize({
  hands: { src: hands960, srcset: `${hands480} 480w, ${hands960} 960w, ${hands1440} 1440w`, width: 1440, height: 2160, alt: "Detail rukou při nanášení krému, bílý oděv a měkká tkanina.", author: "Sora Shimazaki", source: "https://www.pexels.com/photo/african-american-woman-moisturizing-hand-with-lotion-5938576/" },
  mirror: { src: mirror960, srcset: `${mirror480} 480w, ${mirror960} 960w, ${mirror1440} 1440w, ${mirror1920} 1920w`, width: 1920, height: 1280, alt: "Žena v bílém županu nanáší krém na tvář a dívá se do zrcadla.", author: "Sora Shimazaki", source: "https://www.pexels.com/photo/crop-ethnic-woman-applying-cream-on-face-against-mirror-5938237/" },
  water: { src: water960, srcset: `${water480} 480w, ${water960} 960w, ${water1440} 1440w`, width: 1440, height: 1080, alt: "Ruce oplachované proudem vody nad světlým keramickým umyvadlem.", author: "cottonbro studio", source: "https://www.pexels.com/photo/person-washing-hands-4114724/" },
  skin: { src: skin960, srcset: `${skin480} 480w, ${skin960} 960w, ${skin1440} 1440w`, width: 1440, height: 1297, alt: "Prsty jemně roztírají krém na tváři nad límcem bílého županu.", author: "Sora Shimazaki", source: "https://www.pexels.com/photo/african-american-woman-applying-cream-on-face-5938590/" },
  light: { src: light960, srcset: `${light480} 480w, ${light960} 960w, ${light1440} 1440w`, width: 1440, height: 1566, alt: "Denní světlo kreslí tiché geometrické stíny na světlých obkladech.", author: "Kayley", source: "https://www.pexels.com/photo/tiled-wall-of-stylish-bathroom-in-daylight-5872379/" },
  ritual: { src: ritual960, srcset: `${ritual480} 480w, ${ritual960} 960w, ${ritual1440} 1440w`, width: 1440, height: 656, alt: "Detail ruky u tváře a bílého županu v odrazu koupelnového zrcadla.", author: "Sora Shimazaki", source: "https://www.pexels.com/photo/black-woman-applying-cream-in-bathroom-5938597/" },
  linen: { src: linen960, srcset: `${linen480} 480w, ${linen960} 960w, ${linen1440} 1440w`, width: 1440, height: 960, alt: "Dřevěný kartáč na složené světlé tkanině na kamenné koupelnové ploše.", author: "Cup of Couple", source: "https://www.pexels.com/photo/a-brush-lying-on-a-cloth-7303903/" },
})
