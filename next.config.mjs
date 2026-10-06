import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// The panel (Vercel project core-limao-ui) lives on its own deployment with
// basePath "/app". This site serves it at /app by proxying there (Next.js
// multi-zones), which works on any Vercel plan — unlike microfrontends.
const PANEL_ORIGIN = process.env.PANEL_ORIGIN ?? "https://core-limao-ui.vercel.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/app", destination: `${PANEL_ORIGIN}/app` },
        { source: "/app/:path*", destination: `${PANEL_ORIGIN}/app/:path*` },
      ],
    };
  },
}

export default withNextIntl(nextConfig);
