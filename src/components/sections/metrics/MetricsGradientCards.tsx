import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";

type Metric = {
  value: string;
  title: string;
  description: string;
  icon: string | LucideIcon;
};

const MetricsGradientCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  metrics,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  metrics: Metric[];
}) => (
  <section aria-label="Metrics section" className="py-20">
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
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
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
          </div>
        )}
      </div>

      <ScrollReveal variant="slide-up">
        <GridOrCarousel>
          {metrics.map((metric) => {
            const IconComponent = resolveIcon(metric.icon);
            return (
              <div key={metric.value} className="relative flex flex-col items-center justify-center gap-0 p-3 xl:p-4 2xl:p-5 min-h-70 h-full card rounded">
                <span
                  className="text-9xl font-medium leading-none text-center truncate"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, var(--color-foreground) 0%, var(--color-foreground) 20%, transparent 72%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {metric.value}
                </span>
                <span className="mt-[-0.75em] text-4xl font-medium text-center truncate">{metric.title}</span>
                <p className="max-w-9/10 md:max-w-7/10 mt-2 text-base leading-tight text-center line-clamp-2">{metric.description}</p>
                <div className="absolute bottom-5 left-5 flex items-center justify-center size-10 primary-button rounded">
                  <IconComponent className="h-2/5 w-2/5 text-primary-cta-text" />
                </div>
              </div>
            );
          })}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default MetricsGradientCards;
