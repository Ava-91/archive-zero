export default function NeonButton({
  children,
  color = "cyan",
}) {
  const colors = {
    cyan: `
      border-cyan-400
      text-cyan-300
      shadow-[0_0_15px_#22d3ee]
      hover:shadow-[0_0_35px_#22d3ee]
      hover:bg-cyan-400/10
    `,
    pink: `
      border-pink-500
      text-pink-400
      shadow-[0_0_15px_#ec4899]
      hover:shadow-[0_0_35px_#ec4899]
      hover:bg-pink-500/10
    `,
    purple: `
      border-violet-500
      text-violet-300
      shadow-[0_0_15px_#8b5cf6]
      hover:shadow-[0_0_35px_#8b5cf6]
      hover:bg-violet-500/10
    `,
  };

  return (
    <button
      className={`
        px-8
        py-3
        rounded-xl
        border-2
        font-semibold
        transition-all
        duration-300
        cursor-pointer
        ${colors[color]}
      `}
    >
      {children}
    </button>
  );
}