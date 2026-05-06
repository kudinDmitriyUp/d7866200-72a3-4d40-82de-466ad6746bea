import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroCenteredLogosProps = {
  avatars: { src: string }[];
  avatarText: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  logos: string[];
  hideMedia?: boolean;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroCenteredLogos = ({
  avatars,
  avatarText,
  title,
  description,
  primaryButton,
  secondaryButton,
  logos,
  imageSrc,
  videoSrc,
  hideMedia = false,
}: HeroCenteredLogosProps) => {
  return (
    <section aria-label="Hero section" className="relative h-svh flex flex-col mb-20">
      {!hideMedia && (
        <div className="absolute inset-0 z-0">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="size-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 pt-8 w-content-width mx-auto text-center">
          <AvatarGroup avatars={avatars} label={avatarText} size="lg" />

          <TextAnimation
            text={title}
            variant="fade"
            gradientText={true}
            tag="h1"
            className="md:max-w-8/10 text-6xl font-medium text-balance"
          />

          <TextAnimation
            text={description}
            variant="fade"
            gradientText={false}
            tag="p"
            className="md:max-w-6/10 text-base md:text-lg leading-tight text-balance"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>
        </div>
      </div>

      <ScrollReveal variant="fade" delay={0.2} className="relative z-10 w-content-width mx-auto pb-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "30s" }}>
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="shrink-0 mx-3 px-4 py-2 rounded card">
              <span className="text-xl font-semibold whitespace-nowrap opacity-75">{logo}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default HeroCenteredLogos;
