type Props = {
  scrolled: boolean;
};

export default function HeroScrollIndicator({ scrolled }: Props) {
  return (
    <div
      className={`
      absolute bottom-8 left-1/2 transform -translate-x-1/2
      flex flex-col items-center gap-2
      transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}
      lg:hidden
    `}
    >
      <span className="text-sm text-gray-500">Scroll to explore</span>
      <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
      </div>
    </div>
  );
}
