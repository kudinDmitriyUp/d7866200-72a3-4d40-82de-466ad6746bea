import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type AboutMediaOverlayProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const AboutMediaOverlay = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
}: AboutMediaOverlayProps) => {
  return (
    <section aria-label="About section" className="py-20">
      <div className="relative flex items-center justify-center py-8 md:py-12 mx-auto w-content-width rounded overflow-hidden">
        <div className="absolute inset-0">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} />
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-xs pointer-events-none select-none" />
        </div>

        <div className="relative z-10 flex items-center justify-center px-5 py-10 mx-auto min-h-100 md:min-h-120 md:w-1/2 w-content-width">
          <div className="flex flex-col items-center gap-2 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-1 px-3 py-1 text-sm card rounded"
            >
              {tag}
            </motion.span>

            <TextAnimation
              text={title}
              variant="fade-blur"
              gradientText={true}
              tag="h2"
              className="text-6xl font-medium text-balance text-primary-cta-text"
            />

            <TextAnimation
              text={description}
              variant="fade-blur"
              gradientText={false}
              tag="p"
              className="text-base md:text-lg leading-tight text-primary-cta-text"
            />

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
                {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMediaOverlay;
