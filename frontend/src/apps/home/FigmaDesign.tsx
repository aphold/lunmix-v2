import Sangraw from '../../logos/Sangraw.svg';

const quickAccessItems = new Array(6).fill(0).map((_, i) => ({ src: Sangraw, alt: `quick-${i}` }));
const topNavItems = new Array(5).fill(0).map((_, i) => ({ src: Sangraw, alt: `nav-${i}` }));
const footerItems = [{ src: Sangraw, alt: 'github' }];

const description = '"designed by a burger"';

export default function FigmaDesign(): JSX.Element {
  return (
    <main className="flex min-h-screen w-full bg-[#2a28a0]">
      <section className="relative flex min-h-[615px] w-full items-center justify-center overflow-hidden bg-[#2a28a0] px-4 py-4">
        <div className="relative z-10 mx-auto flex min-h-[615px] w-full max-w-[1000px] flex-col">
          <header className="flex items-start justify-between px-[42px] pt-[38px]">
            <time className="[font-family:'Inter-Bold',Helvetica] text-[42px] font-bold leading-[normal] tracking-[0] whitespace-nowrap text-[#ebebf5]">12:34</time>
            <nav aria-label="Top navigation" className="flex items-center gap-[14px] pt-1">
              {topNavItems.map((item) => (
                <button key={item.alt} type="button" className="flex h-auto items-center justify-center transition-opacity hover:opacity-90" aria-label={item.alt}>
                  <img className="object-contain h-8 w-8" alt={item.alt} src={item.src} />
                </button>
              ))}
            </nav>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <img className="mb-[6px] mt-[-8px] h-auto w-full max-w-[523px] object-contain" alt="Lunmix" src={Sangraw} />
            <p className="mb-[26px] [font-family:'Inter-Regular',Helvetica] text-xs font-normal leading-[normal] tracking-[0] text-[#8d8db6]">{description}</p>

            <div className="mb-[30px] w-full max-w-[410px] rounded-[25px] border border-solid border-[#9191b3] bg-[#1a1963] p-3">
              <label className="flex items-center gap-3 px-2 py-2" htmlFor="search-freely">
                <input id="search-freely" defaultValue="Search freely." readOnly className="h-auto w-full border-0 bg-transparent p-0 text-[26px] font-bold text-[#aeadc7] focus:outline-none" />
              </label>
            </div>

            <div className="mb-[16px] h-px w-full max-w-[363px] bg-[#d9d9d9]" />
            <h2 className="mb-[14px] [font-family:'Inter-Bold',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-[#b5b5c7]">quick access</h2>
            <nav aria-label="Quick access" className="flex flex-wrap items-center justify-center gap-4">
              {quickAccessItems.map((item) => (
                <button key={item.alt} type="button" className="flex h-auto items-center justify-center transition-transform hover:scale-[1.02]" aria-label={item.alt}>
                  <img className="h-10 w-10 object-contain" alt={item.alt} src={item.src} />
                </button>
              ))}
            </nav>
          </div>

          <footer className="flex items-end justify-between px-[58px] pb-[12px]">
            <div />
            <div className="flex items-end gap-6">
              <div className="[font-family:'Inter-Bold',Helvetica] text-[49px] font-bold leading-[0.9] tracking-[0] whitespace-nowrap text-[#e7e7ea]">a_g</div>
              {footerItems.map((item) => (
                <button key={item.alt} type="button" className="mb-[2px] flex h-auto items-center justify-center transition-opacity hover:opacity-90" aria-label={item.alt}>
                  <img className="object-contain h-8 w-8" alt={item.alt} src={item.src} />
                </button>
              ))}
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
