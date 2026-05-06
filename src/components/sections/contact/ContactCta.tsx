import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

const ContactCta = ({
  tag,
  text,
  primaryButton,
  secondaryButton,
}: {
  tag: string;
  text: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
}) => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade" className="flex items-center justify-center py-20 px-5 md:px-10 card rounded">
          <div className="w-full md:w-3/4 flex flex-col items-center gap-3">
            <span className="card rounded px-3 py-1 text-sm">{tag}</span>

            <TextAnimation
              text={text}
              variant="slide-up"
              gradientText={true}
              tag="h2"
              className="text-4xl md:text-5xl font-medium text-center leading-tight text-balance"
            />

            <div className="flex flex-wrap justify-center gap-3 mt-1">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCta;
