import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/v0/b/my-portifolio-397d6.appspot.com/o/**",
            },
        ],
    },
};

export default withNextIntl(nextConfig);
