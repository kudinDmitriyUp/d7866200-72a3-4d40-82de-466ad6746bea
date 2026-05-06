import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Metric = {
  value: string;
  title: string;
  features: string[];
};

const MetricsFeatureCards = ({
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
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-col justify-between gap-3 xl:gap-4 2xl:gap-5 p-3 xl:p-4 2xl:p-5 h-full card rounded">
              <div className="flex flex-col gap-0">
                <span className="text-8xl md:text-7xl font-medium leading-none truncate">{metric.value}</span>
                <span className="text-xl truncate">{metric.title}</span>
              </div>

              <div className="flex flex-col gap-3 pt-5 border-t border-accent">
                {metric.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 primary-button rounded">
                      <Check className="size-3 text-primary-cta-text" strokeWidth={2} />
                    </div>
                    <span className="text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default MetricsFeatureCards;
