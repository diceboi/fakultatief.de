import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

const nextConfig = {
  images: {
    qualities: [75, 90],
  },
};

export default withNextIntl(nextConfig);
