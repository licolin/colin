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

try {
    // Your code before line 1 that might throw errors
} catch (error) {
    console.error("Error:", error);
    // Handle the error gracefully (e.g., log it, display an error message)
}

// Export the combined configuration
export default withNextra(nextConfig);
