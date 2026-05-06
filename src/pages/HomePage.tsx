import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import ProductRatingCards from '@/components/sections/product/ProductRatingCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
      <HeroSplitMediaGrid
      tag="Floral Artistry"
      title="Jazz Day Flowers Studio"
      description="Artisan blooms, thoughtfully arranged to celebrate life’s daily rhythms. Experience the elegance of seasonal flowers."
      primaryButton={{
        text: "Explore Collection",
        href: "#shop",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=dsobfr",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=b3z2cs",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutText
      title="Where Nature Meets Jazz. Our studio is dedicated to the philosophy of rhythm, grace, and color, bringing life into your spaces one stem at a time."
      primaryButton={{
        text: "Learn Our Story",
        href: "#",
      }}
    />
  </div>

  <div id="shop" data-section="shop">
      <ProductRatingCards
      tag="Signature Blooms"
      title="Shop Our Arrangements"
      description="Carefully curated seasonal selections for every occasion."
      products={[
        {
          brand: "Jazz Day",
          name: "Romantic Peonies",
          price: "$85",
          rating: 5,
          reviewCount: "24",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=pyxh8q",
        },
        {
          brand: "Jazz Day",
          name: "Elegant Lily Mix",
          price: "$70",
          rating: 5,
          reviewCount: "18",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=ax8pwi",
        },
        {
          brand: "Jazz Day",
          name: "Meadow Wildflowers",
          price: "$60",
          rating: 4,
          reviewCount: "32",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=54xswg",
        },
        {
          brand: "Jazz Day",
          name: "Tulip Serenade",
          price: "$55",
          rating: 5,
          reviewCount: "41",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=dwvqf9",
        },
        {
          brand: "Jazz Day",
          name: "Orchid Elegance",
          price: "$120",
          rating: 5,
          reviewCount: "12",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=tda3u5",
        },
        {
          brand: "Jazz Day",
          name: "Dried Botanical Art",
          price: "$95",
          rating: 4,
          reviewCount: "15",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=h5kyfd",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialOverlayCards
      tag="Kind Words"
      title="What Our Clients Say"
      description="Delivering happiness, one bloom at a time."
      testimonials={[
        {
          name: "Anna S.",
          role: "Wedding Planner",
          company: "Eventic",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=kdpl7e",
        },
        {
          name: "Mark R.",
          role: "Designer",
          company: "Studio",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=72gmqr",
        },
        {
          name: "Elena M.",
          role: "Client",
          company: "Private",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=vvgvnb",
        },
        {
          name: "Sarah P.",
          role: "Event Manager",
          company: "Luxury",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=g5y40y",
        },
        {
          name: "David L.",
          role: "Client",
          company: "Private",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=bee0s9",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsFeatureCards
      tag="Our Impact"
      title="Floral Excellence"
      description="Years of passion captured in petals."
      metrics={[
        {
          value: "1.2k+",
          title: "Bouquets Delivered",
          features: [
            "Seasonal freshness",
            "Artisanal care",
          ],
        },
        {
          value: "450+",
          title: "Happy Clients",
          features: [
            "Custom orders",
            "Unique designs",
          ],
        },
        {
          value: "15",
          title: "Staff Artisans",
          features: [
            "Expert florists",
            "Design focus",
          ],
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqTwoColumn
      tag="Support"
      title="Frequently Asked"
      description="Common questions about our services and flower care."
      items={[
        {
          question: "How do I care for my flowers?",
          answer: "Keep them in cool water and trim stems every two days for maximum longevity.",
        },
        {
          question: "Can I request custom arrangements?",
          answer: "Absolutely. Reach out through our contact form for bespoke floral designs.",
        },
        {
          question: "Do you offer delivery?",
          answer: "We provide city-wide delivery for all orders placed 24 hours in advance.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCta
      tag="Inquire"
      text="Ready to bring some art into your life? Contact us today to discuss your next floral arrangement."
      primaryButton={{
        text: "Contact Studio",
        href: "#",
      }}
      secondaryButton={{
        text: "View Gallery",
        href: "#",
      }}
    />
  </div>
    </>
  );
}
