import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Testimonial = {
  name: string;
  handle: string;
  text: string;
  rating: number;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type HeroBillboardTestimonialProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  testimonials: Testimonial[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const INTERVAL = 5000;

const HeroBillboardTestimonial = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  testimonials,
}: HeroBillboardTestimonialProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const testimonial = testimonials[currentIndex];

  return (
    <section aria-label="Hero section" className="relative pt-25 pb-20 md:py-30 mb-20">
      <HeroBackgroundSlot />
      <div className="flex flex-col gap-10 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="px-3 py-1 mb-1 text-sm card rounded">{tag}</span>

          <TextAnimation
            text={title}
            variant="fade"
            gradientText={true}
            tag="h1"
            className="text-6xl font-medium text-balance"
          />

          <TextAnimation
            text={description}
            variant="fade"
            gradientText={false}
            tag="p"
            className="text-base md:text-lg leading-tight text-balance"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="slide-up" delay={0.2} className="relative w-full p-3 xl:p-4 2xl:p-5 card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-3/4 md:aspect-video" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto md:max-w-sm p-3 xl:p-4 2xl:p-5 card rounded flex flex-col gap-3 xl:gap-4 2xl:gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={cls("size-5 text-accent", index < testimonial.rating ? "fill-accent" : "fill-transparent")}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="text-lg leading-tight text-balance">{testimonial.text}</p>

              <div className="flex items-center gap-3">
                <ImageOrVideo
                  imageSrc={testimonial.imageSrc}
                  videoSrc={testimonial.videoSrc}
                  className="size-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{testimonial.name}</span>
                  <span className="text-sm text-foreground/60">{testimonial.handle}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboardTestimonial;
