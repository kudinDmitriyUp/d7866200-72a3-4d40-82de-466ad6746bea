import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type HeroSplitMediaGridProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  items: [
    { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never },
    { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never }
  ];
};

const HeroSplitMediaGrid = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
}: HeroSplitMediaGridProps) => {
  return (
    <section aria-label="Hero section" className="relative flex items-center h-fit md:h-svh pt-25 pb-20 md:py-0">
      <HeroBackgroundSlot />
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-content-width mx-auto">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="px-3 py-1 mb-1 text-sm card rounded">{tag}</span>

            <TextAnimation
              text={title}
              variant="fade-blur"
              gradientText={true}
              tag="h1"
              className="text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance"
            />

            <TextAnimation
              text={description}
              variant="fade-blur"
              gradientText={false}
              tag="p"
              className="max-w-8/10 text-lg md:text-xl leading-tight text-center md:text-left"
            />

            <div className="flex flex-wrap max-md:justify-center gap-3 mt-3">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
            </div>
          </div>
        </div>

        <ScrollReveal variant="fade-blur" delay={0.2} className="w-full md:w-1/2 grid grid-cols-2 gap-3">
          {items.map((item, index) => (
            <div key={index} className="h-80 md:h-[55vh] p-3 xl:p-4 2xl:p-5 card rounded overflow-hidden">
              <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSplitMediaGrid;
