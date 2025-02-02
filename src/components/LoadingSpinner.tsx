
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      {/* School Logo */}
      <div className="relative w-24 h-24 mb-8">
        <img
          src="https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-1/304784131_545741720685397_6898752098845042170_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=_hw1wNbojxIQ7kNvgEZ7Zpb&_nc_oc=AdgPEUO_v_CSdK_HNpSaSWFCdBhaGxGAm-DVT3E-s5fsLiX_dRiGr9jHNjZHr_w2SXA&_nc_zt=24&_nc_ht=scontent-bom2-3.xx&_nc_gid=AFZMSraLQCz732MHSjAivma&oh=00_AYASJ9FwDpeqjHJCHVDijRjiyh67cR2gOff_her_PwuyBQ&oe=678758D7"
          alt="SUKANTI Logo"
          className="w-full h-full object-cover rounded-full animate-pulse"
        />
        {/* Rotating Circle */}
        <div className="absolute inset-0 border-4 border-primary-500 rounded-full animate-spin-slow" 
          style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }} 
        />
        {/* Pulsing Glow */}
        <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl animate-pulse" />
      </div>
    </div>
  );
}