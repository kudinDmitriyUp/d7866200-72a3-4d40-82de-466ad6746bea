import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import TiltedCarousel from "@/components/ui/TiltedCarousel";

type HeroBillboardTiltedCarouselProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  items: ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never })[];
};

const HeroBillboardTiltedCarousel = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
}: HeroBillboardTiltedCarouselProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative flex flex-col items-center justify-center gap-8 w-full min-h-svh py-25"
    >
      <HeroBackgroundSlot />
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto text-center">
        <span className="px-3 py-1 mb-1 text-sm card rounded">{tag}</span>

        <TextAnimation
          text={title}
          variant="fade-blur"
          gradientText={true}
          tag="h1"
          className="text-6xl font-medium text-balance"
        />

        <TextAnimation
          text={description}
          variant="fade-blur"
          gradientText={false}
          tag="p"
          className="text-base md:text-lg leading-tight text-balance"
        />

        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
          <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
        </div>
      </div>

      <TiltedCarousel items={items} />
    </section>
  );
};

export default HeroBillboardTiltedCarousel;
