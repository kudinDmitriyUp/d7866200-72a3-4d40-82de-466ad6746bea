import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type PricingPlan = {
  tag: string;
  price: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: string[];
};

const PricingLayeredCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  plans,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  plans: PricingPlan[];
}) => (
  <section aria-label="Pricing section" className="py-20">
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
          {plans.map((plan) => (
            <div key={plan.tag} className="flex flex-col gap-3 p-3 h-full card rounded">
              <div className="flex flex-col gap-3 p-5 secondary-button rounded">
                <span className="px-3 py-1 w-fit text-sm card rounded">{plan.tag}</span>

                <div className="flex flex-col gap-1">
                  <span className="text-5xl font-medium">{plan.price}</span>
                  <span className="text-base">{plan.description}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <Button text={plan.primaryButton.text} href={plan.primaryButton.href} variant="primary" className="w-full" />
                  {plan.secondaryButton && <Button text={plan.secondaryButton.text} href={plan.secondaryButton.href} variant="secondary" className="w-full" />}
                </div>
              </div>

              <div className="flex flex-col gap-3 p-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 primary-button rounded">
                      <Check className="size-3 text-primary-cta-text" strokeWidth={2} />
                    </div>
                    <span className="text-base leading-tight">{feature}</span>
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

export default PricingLayeredCards;
