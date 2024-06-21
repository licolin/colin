import nextra from 'nextra';

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:'/colin',
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

export default withNextra(nextConfig);
// export default nextConfig;