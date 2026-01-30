export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main Glow Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-full blur-3xl opacity-70 animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-rose-100 to-pink-50 rounded-full blur-3xl opacity-70 animate-pulse-slow delay-1000" />

      {/* Subtle Grid Pattern */}
      <div
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M60 0v60H0V0z%22 fill=%22none%22/%3E%3Cpath d=%22M60 0v2H0V0zm0 4v2H0V4zm0 4v2H0V8zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2z%22 fill=%22rgba(99,102,241,0.05)%22/%3E%3C/svg%3E")',
        }}
        className="absolute inset-0 opacity-20"
      />
    </div>
  );
}
