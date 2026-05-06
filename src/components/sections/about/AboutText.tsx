import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

interface AboutTextProps {
  title: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

const AboutText = ({
  title,
  primaryButton,
  secondaryButton,
}: AboutTextProps) => {
  return (
    <section aria-label="About section" className="py-20">
      <div className="w-content-width mx-auto flex flex-col gap-3 items-center">
        <TextAnimation
          text={title}
          variant="fade-blur"
          gradientText={false}
          tag="h2"
          className="text-2xl md:text-5xl font-medium text-center leading-tight text-balance"
        />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutText;
