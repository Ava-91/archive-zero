import NeonButton from "./components/NeonButton";

export default function App() {
  return (
    <main className="min-h-screen bg-[#09090b] flex items-center justify-center gap-6">
      <NeonButton color="cyan">
        Continue
      </NeonButton>

      <NeonButton color="pink">
        Delete
      </NeonButton>

      <NeonButton color="purple">
        Download
      </NeonButton>
    </main>
  );
}