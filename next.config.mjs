// /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //     output: "export",
// // };
// //
// // export default nextConfig;

import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    }
};

// Export the combined configuration
export default withNextra(nextConfig);
