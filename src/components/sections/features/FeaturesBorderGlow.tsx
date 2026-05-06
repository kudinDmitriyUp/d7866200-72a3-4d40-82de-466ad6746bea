import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";
import BorderGlow from "@/components/ui/BorderGlow";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "@/utils/resolve-icon";

type FeatureItem = {
  icon: string | LucideIcon;
  title: string;
  description: string;
};

interface FeaturesBorderGlowProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureItem[];
}

const FeaturesBorderGlow = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
}: FeaturesBorderGlowProps) => {
  return (
    <section aria-label="Features border glow section" className="py-20">
      <div className="flex flex-col w-content-width mx-auto gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="px-3 py-1 mb-1 text-sm card rounded">{tag}</span>

          <TextAnimation
            text={title}
            variant="fade-blur"
            gradientText={true}
            tag="h2"
            className="text-6xl font-medium text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="md:max-w-6/10 text-lg leading-tight text-center"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="fade">
          <GridOrCarousel>
            {features.map((feature) => {
              const FeatureIcon = resolveIcon(feature.icon);
              return (
                <div key={feature.title} className="relative flex flex-col justify-between gap-3 xl:gap-4 2xl:gap-5 p-3 xl:p-4 2xl:p-5 h-full min-h-60 card rounded">
                  <div className="flex items-center justify-center size-12 primary-button rounded">
                    <FeatureIcon className="size-4 text-primary-cta-text" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium leading-tight">{feature.title}</h3>
                    <p className="text-sm leading-tight">{feature.description}</p>
                  </div>
                  <BorderGlow />
                </div>
              );
            })}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesBorderGlow;
