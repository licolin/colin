import nextra from 'nextra';

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:process.env.BASE_PATH,
    assetPrefix:process.env.ASSET_PREFIX,
    output: "export",
    // reactStrictMode:true,
    // distDir:'dist',
    images: {
        unoptimized: true
    }
};

export default withNextra(nextConfig);
// export default nextConfig;