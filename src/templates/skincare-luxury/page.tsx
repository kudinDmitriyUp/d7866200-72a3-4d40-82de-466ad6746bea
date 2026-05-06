import NavbarDropdown from "@/components/ui/NavbarDropdown";
import CornerGlowBackground from "@/components/ui/CornerGlowBackground";
import LightRaysCornerBackground from "@/components/ui/LightRaysCornerBackground";
import HeroBillboardTiltedCarousel from "@/components/sections/hero/HeroBillboardTiltedCarousel";
import ProductVariantCards from "@/components/sections/product/ProductVariantCards";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import MetricsMinimalCards from "@/components/sections/metrics/MetricsMinimalCards";
import BlogSimpleCards from "@/components/sections/blog/BlogSimpleCards";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBrand from "@/components/sections/footer/FooterBrand";
import "./theme.css";

export default function SkincareLuxuryTemplate() {
  return (
    <>
      <CornerGlowBackground position="fixed" />

      <NavbarDropdown
        logo="UMBRA"
        navItems={[
          { name: "Collection", href: "#products" },
          { name: "Craft", href: "#features" },
          { name: "Journal", href: "#blog" },
          { name: "Contact", href: "#contact" },
        ]}
        ctaButton={{ text: "Shop Now", href: "#products" }}
      />

      <div id="hero" data-section="hero" className="relative">
        <LightRaysCornerBackground position="absolute" />
        <HeroBillboardTiltedCarousel
          tag="Luxury Fragrance"
                    title="A Fragrance That Lingers Long After You Leave"
          description="Discover our award-winning perfumes crafted with rare botanicals and master perfumery. Find your signature scent — the one they never forget."
          primaryButton={{ text: "Explore Collection", href: "#products" }}
          secondaryButton={{ text: "Our Craft", href: "#features" }}
          items={[
            { imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/hero-1.webp" },
            { imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/hero-2.webp" },
            { imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/hero-3.webp" },
            { imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/hero-4.webp" },
            { imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/hero-5.webp" },
            { imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/hero-6.webp" },
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductVariantCards
          tag="Best Sellers"
                    title="Featured Collection"
          description="Discover our bestselling fragrances composed with rare essences and the finest ingredients from around the world."
          products={[
            { name: "Solum Eau de Parfum", variant: "50ml • Earthy & Warm", price: "$185", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-1.webp" },
            { name: "Aura Eau de Parfum", variant: "50ml • Floral & Soft", price: "$165", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-2.webp" },
            { name: "Velour Body Mist", variant: "100ml • Light & Fresh", price: "$125", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-3.webp" },
            { name: "Noir Absolu Parfum", variant: "30ml • Rich & Intense", price: "$195", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-4.webp" },
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeaturesAlternatingSplit
          tag="Perfumery Craft"
                    title="The Art Behind Our Fragrances"
          description="Each perfume is meticulously composed with rare essences and noble raw materials to create scents that captivate and endure."
          items={[
            { title: "Rare Ingredient Sourcing", description: "We source precious essences from sustainable fields worldwide — Grasse rose, Madagascan vanilla, and Italian bergamot at their peak.", imageSrc: "http://img.b2bpic.net/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382870.jpg" },
            { title: "Master Perfumers", description: "Every composition is crafted by world-renowned noses who balance top, heart, and base notes into unforgettable olfactory journeys.", imageSrc: "http://img.b2bpic.net/free-photo/preparing-utensils-microneedling-procedure_23-2149374097.jpg" },
            { title: "Lasting Sillage", description: "Our concentrated formulas are designed for exceptional longevity — a single application carries you beautifully from dawn to dusk.", imageSrc: "http://img.b2bpic.net/free-photo/coffee-machine-with-water-cup_23-2148892890.jpg" },
          ]}
        />
      </div>

      <div id="influencers" data-section="influencers">
        <FeaturesMediaCards
          tag="Community"
                    title="Worn By Those Who Set The Standard"
          description="The women shaping culture choose UMBRA as their signature."
          items={[
            { title: "Amara Osei", description: " ", videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4" },
            { title: "Chloe Marchand", description: " ", videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4" },
            { title: "Elena Vasquez", description: " ", videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-elena.mp4" },
            { title: "Isla Montgomery", description: " ", videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4" },
            { title: "Zara Kimani", description: " ", videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4" },
            { title: "Nadia Petrova", description: " ", videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-nadia.mp4" },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricsMinimalCards
          tag="The Numbers"
          title="Why Women Choose UMBRA"
          metrics={[
            { value: "92%", description: "Women report being asked what perfume they're wearing within the first week." },
            { value: "87%", description: "Our customers return for the same fragrance — a true sign of finding your signature." },
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogSimpleCards
          tag="Journal"
                    title="The UMBRA Journal"
          description="Stories of scent, craft, and the women who inspire us. Explore the world behind our fragrances."
          items={[
            { category: "Fragrance Notes", title: "The Art of Layering Scents for Every Season", excerpt: "Discover how to combine UMBRA fragrances for a signature scent that evolves with you throughout the day.", imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232284.jpg", authorName: "Camille Laurent", authorImageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-osing-street-with-interesting-architecture-background_613910-3354.jpg", date: "Feb 2026" },
            { category: "Behind the Bottle", title: "From Grasse to Your Vanity: Sourcing Rose Absolute", excerpt: "A journey through the fields of Provence where our master perfumers hand-select the rarest rose petals.", imageSrc: "http://img.b2bpic.net/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382870.jpg", authorName: "Elena Vasquez", authorImageSrc: "http://img.b2bpic.net/free-photo/senior-woman-portrait_23-2148891695.jpg", date: "Jan 2026" },
            { category: "Women of UMBRA", title: "How Amara Osei Found Her Signature Scent", excerpt: "The model and entrepreneur shares why Noir Absolu became the fragrance she never leaves the house without.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-face-roller_23-2148803514.jpg", authorName: "Nadia Petrova", authorImageSrc: "http://img.b2bpic.net/free-photo/pretty-blonde-woman-with-wavy-hair-dressed-skirt-light-blouse-white-jacket-sits-chair_197531-33594.jpg", date: "Jan 2026" },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          tag="Support"
                    title="Frequently Asked Questions"
          description="Everything you need to know about our luxury fragrances, ingredients, and satisfaction guarantee."
          items={[
            { question: "What makes UMBRA fragrances different from other luxury brands?", answer: "UMBRA combines rare natural essences with master perfumery techniques. Every composition is developed over months of refinement to deliver extraordinary depth and longevity." },
            { question: "How long does the fragrance last on skin?", answer: "Most of our Eau de Parfums last 8-12 hours on skin. Our Parfum concentrations can last up to 16 hours. For best results, apply to pulse points." },
            { question: "Are your fragrances suitable for sensitive skin?", answer: "Our perfumes are formulated with high-quality, dermatologically considered ingredients. They are free from common irritants and suitable for most skin types." },
            { question: "Do you offer a satisfaction guarantee?", answer: "We're confident in our compositions. If a fragrance doesn't feel right within 14 days of purchase, we offer a full refund—no questions asked." },
            { question: "Are your ingredients natural or synthetic?", answer: "We blend premium natural essences — oud, jasmine, rose — with refined aroma molecules for stability and projection." },
            { question: "How do I choose the right fragrance for me?", answer: "Start with our Discovery Set to explore all four scents. Wear each for a full day to find your match." },
          ]}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare-luxury/faq-image.webp"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          tag="Contact"
          title="Get in Touch"
          description="Have a question or looking for your signature scent? We'd love to hear from you."
          inputs={[
            { name: "name", type: "text", placeholder: "Your name", required: true },
            { name: "email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
            { name: "subject", type: "text", placeholder: "How can we help?", required: true },
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your fragrance preferences...", required: true }}
          buttonText="Send Message"
          imageSrc="http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232284.jpg"
        />
      </div>

      <FooterBrand
        brand="UMBRA"
        columns={[
          { items: [{ label: "Shop", href: "#products" }, { label: "Our Craft", href: "#features" }, { label: "Why UMBRA", href: "#metrics" }] },
          { items: [{ label: "Our Story", href: "#" }, { label: "Sustainability", href: "#" }, { label: "Community", href: "#influencers" }] },
          { items: [{ label: "Customer Care", href: "#" }, { label: "Contact", href: "#contact" }, { label: "FAQ", href: "#faq" }] },
          { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms & Conditions", href: "#" }, { label: "Return Policy", href: "#" }] },
        ]}
      />
    </>
  );
}
