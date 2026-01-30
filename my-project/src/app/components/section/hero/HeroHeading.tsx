type Props = {
  introText?: string;
};

export default function HeroHeading({ introText }: Props) {
  return (
    <h1
      className="
      text-4xl sm:text-5xl md:text-6xl lg:text-7xl
      font-bold tracking-tight
      bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900
      bg-clip-text text-transparent
      leading-tight
      animate-slide-up
    "
    >
      {introText || (
        <>
          Mindful Strength.
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-transparent">
            Intelligent Movement.
          </span>
        </>
      )}
    </h1>
  );
}
