import {
  ClosingSection,
  EvidenceSection,
  HeroSection,
  PlatformSection,
} from "@/components/home-sections";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <PlatformSection />
      <EvidenceSection />
      <ClosingSection />
    </main>
  );
}
