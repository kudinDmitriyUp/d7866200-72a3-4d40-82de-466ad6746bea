import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import { cls } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

const FaqSimple = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FaqItem[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section aria-label="FAQ section" className="py-20">
      <div className="w-content-width mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="card rounded px-3 py-1 text-sm">{tag}</span>

          <TextAnimation
            text={title}
            variant="fade"
            gradientText={true}
            tag="h2"
            className="text-6xl font-medium text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant="fade"
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

        <ScrollReveal variant="slide-up" className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className="p-3 2xl:p-4 rounded card cursor-pointer select-none"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base md:text-lg font-medium leading-tight">{item.question}</h3>
                <div className="flex shrink-0 items-center justify-center size-7 md:size-8 rounded primary-button">
                  <Plus
                    className={cls(
                      "size-3.5 md:size-4 text-primary-cta-text transition-transform duration-300",
                      activeIndex === index && "rotate-45"
                    )}
                    strokeWidth={2}
                  />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-1 text-sm leading-tight">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSimple;
