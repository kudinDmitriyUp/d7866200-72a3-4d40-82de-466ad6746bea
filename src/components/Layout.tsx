import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Shop",
    "href": "#shop"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <NavbarDropdown
      logo="Jazz Day"
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
     navItems={navItems} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBasic
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#shop",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Care Guide",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 Jazz Day Flowers. All rights reserved."
      rightText="Designed with rhythm & grace."
    />
    </StyleProvider>
  );
}
