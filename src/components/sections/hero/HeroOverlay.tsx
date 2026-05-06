import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroOverlayProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  avatars?: { src: string }[];
  avatarsLabel?: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroOverlay = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  avatars,
  avatarsLabel,
}: HeroOverlayProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative w-full h-svh overflow-hidden flex flex-col justify-end mb-20"
    >
      <HeroBackgroundSlot />
      <ImageOrVideo
        imageSrc={imageSrc}
        videoSrc={videoSrc}
        className="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <div
        className="absolute z-10 w-[150vw] h-[150vw] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 backdrop-blur mask-[radial-gradient(circle,black_20%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-content-width mx-auto pb-10 md:pb-25">
        <div className="flex flex-col gap-3 w-full md:w-6/10 lg:w-1/2 xl:w-45/100 2xl:w-4/10">
          <span className="w-fit px-3 py-1 mb-1 text-sm card rounded">{tag}</span>

          <TextAnimation
            text={title}
            variant="fade-blur"
            gradientText={true}
            tag="h1"
            className="text-7xl 2xl:text-8xl font-medium text-primary-cta-text text-balance"
          />

          <TextAnimation
            text={description}
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-primary-cta-text leading-tight text-balance"
          />

          <div className="flex flex-wrap gap-3 mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>

          {avatars && avatars.length > 0 && (
            <div className="mt-4">
              <AvatarGroup avatars={avatars} size="lg" label={avatarsLabel} labelClassName="text-primary-cta-text" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroOverlay;
