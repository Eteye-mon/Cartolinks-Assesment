
import Image from "next/image";
export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50  bg-[#000] border-t border-gray-800">
      <div className="max-w-full  px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logobg.png" width={40} height={40} alt="logo" className="h-4 w-4 lg:h-8 lg:w-8"/>
            <span className="text-white font-semibold text-[9px] lg:text-[20px]">
              Krea AI
            </span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <span className="text-gray-300 lg:text-[20px] text-[9px]">
              curated by
            </span>
            <div className="flex items-center gap-2">
              <div className="lg:w-8 lg:h-8 h-4 w-4 flex items-center justify-center">
                <MobbinLogo />
              </div>
              <span className="font-semibold lg:text-lg text-[9px]">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobbinLogo() {
  return (
    <svg
      width="139"
      height="64"
      viewBox="0 0 139 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none h-20 w-[43px] fill-text-white"
      data-sentry-element="svg"
      data-sentry-source-file="MobbinLogo.tsx"
      data-sentry-component="MobbinLogo"
    >
      <title>Mobbin</title>
      <path
        d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z"
        data-sentry-element="path"
        data-sentry-source-file="MobbinLogo.tsx"
      ></path>
    </svg>
  );
}
