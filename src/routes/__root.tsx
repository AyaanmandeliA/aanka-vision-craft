import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-alabaster px-4">
      <div className="max-w-md text-center">
        <p className="font-sans text-[11px] uppercase tracking-luxury text-bronze">404</p>
        <h1 className="mt-6 font-serif text-5xl font-light tracking-tight text-obsidian">
          Page <em className="italic">Not Found</em>
        </h1>
        <p className="mt-4 font-serif text-lg font-light text-obsidian/65">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-4 bg-obsidian px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors duration-500 hover:bg-bronze"
          >
            Return Home
            <span className="block h-px w-8 bg-alabaster transition-all duration-500 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aanka Group — A House of Lifestyle Brands" },
      {
        name: "description",
        content:
          "Aanka Group is a UAE-based holding building memorable brands across food, wellness, beauty, and design.",
      },
      { name: "author", content: "Aanka Group" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  // Reveal hook applied at the root so all pages animate on scroll
  useReveal();
  return (
    <main className="bg-alabaster text-obsidian">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
