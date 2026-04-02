const KYC2020Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center bg-[#E8781A] px-3 py-2 ${className}`}>
      <span className="text-white font-bold text-xs tracking-wider leading-none">KYC</span>
      <span className="text-white font-bold text-xl leading-none">2020</span>
      <span className="text-white text-[9px] tracking-[0.1em] leading-none mt-0.3">SEE FAR</span>
    </div>
  );
};

export default KYC2020Logo;
