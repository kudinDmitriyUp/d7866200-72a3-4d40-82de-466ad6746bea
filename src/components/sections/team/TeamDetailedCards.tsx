import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";

type SocialLink = {
  icon: string | LucideIcon;
  url: string;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  socialLinks: SocialLink[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TeamDetailedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  members,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  members: TeamMember[];
}) => (
  <section aria-label="Team section" className="py-20">
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
        <span className="px-3 py-1 mb-1 text-sm card rounded">{tag}</span>

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

      <ScrollReveal variant="fade">
        <GridOrCarousel >
          {members.map((member) => (
            <div key={member.name} className="relative aspect-4/5 rounded overflow-hidden">
              <ImageOrVideo imageSrc={member.imageSrc} videoSrc={member.videoSrc} />

              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 p-3 xl:p-4 2xl:p-5 card backdrop-blur-sm rounded">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl font-medium leading-tight truncate">{member.name}</span>
                  <span className="px-3 py-1 text-xs leading-tight secondary-button text-secondary-cta-text rounded truncate">{member.role}</span>
                </div>

                <p className="text-base leading-tight">{member.description}</p>

                <div className="flex gap-3 mt-1">
                  {member.socialLinks.map((link, index) => {
                    const IconComponent = resolveIcon(link.icon);
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center size-9 primary-button rounded"
                      >
                        <IconComponent className="h-2/5 w-2/5 text-primary-cta-text" strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default TeamDetailedCards;
