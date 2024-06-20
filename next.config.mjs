import nextra from 'nextra';

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:'/colin',
    // assetPrefix:'/colin',
    output: "export",
    trailingSlash: true,
    // reactStrictMode:true,
    // distDir:'doc',
    images: {
        unoptimized: true
    }
};

export default withNextra(nextConfig);
// export default nextConfig;