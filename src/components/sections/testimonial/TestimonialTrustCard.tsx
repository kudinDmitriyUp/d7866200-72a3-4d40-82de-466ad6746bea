import { Star } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type Avatar = {
  name: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TestimonialTrustCard = ({
  quote,
  rating,
  author,
  avatars,
}: {
  quote: string;
  rating: number;
  author: string;
  avatars: Avatar[];
}) => {
  const visibleAvatars = avatars.slice(0, 6);
  const remainingCount = avatars.length - visibleAvatars.length;

  return (
    <section aria-label="Testimonials section" className="py-20">
      <div className="flex flex-col items-center gap-5 w-content-width mx-auto">
        <ScrollReveal variant="fade-blur" className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cls("size-6 text-accent", index < rating ? "fill-accent" : "fill-transparent")}
              strokeWidth={1.5}
            />
          ))}
        </ScrollReveal>

        <TextAnimation
          text={quote}
          variant="slide-up"
          gradientText={false}
          tag="p"
          className="text-3xl md:text-5xl font-medium leading-tight text-center text-balance"
        />

        <ScrollReveal variant="fade-blur" delay={0.1} className="text-xl text-center">
          <p>{author}</p>
        </ScrollReveal>

        <ScrollReveal variant="fade-blur" delay={0.2} className="flex items-center justify-center">
          {visibleAvatars.map((avatar, index) => (
            <div
              key={avatar.name}
              className={cls("relative size-12 md:size-16 overflow-hidden rounded-full border-2 border-background", index > 0 && "-ml-5")}
              style={{ zIndex: visibleAvatars.length - index }}
            >
              <ImageOrVideo imageSrc={avatar.imageSrc} videoSrc={avatar.videoSrc} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="flex items-center justify-center size-12 md:size-16 -ml-5 rounded-full border-2 border-background card"
              style={{ zIndex: 0 }}
            >
              <span className="text-sm md:text-base font-medium">+{remainingCount}</span>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialTrustCard;
