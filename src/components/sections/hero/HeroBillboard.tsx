import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroBillboardProps = {
  tag?: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  avatars?: { src: string }[];
  avatarsLabel?: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroBillboard = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  avatars,
  avatarsLabel,
  imageSrc,
  videoSrc,
}: HeroBillboardProps) => {
  return (
    <section aria-label="Hero section" className="relative pt-25 pb-20 md:py-30 mb-20">
      <HeroBackgroundSlot />
      <div className="flex flex-col gap-10 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-2 text-center">
          {avatars && avatars.length > 0 ? (
            <AvatarGroup avatars={avatars} label={avatarsLabel} />
          ) : tag ? (
            <span className="px-3 py-1 mb-1 text-sm card rounded">{tag}</span>
          ) : null}

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
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="fade" delay={0.2} className="w-full p-3 xl:p-4 2xl:p-5 card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-4/5 md:aspect-video" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboard;
