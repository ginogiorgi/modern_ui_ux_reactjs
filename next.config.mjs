const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? "/modern_ui_ux_reactjs" : "",
    assetPrefix: isProd ? "/modern_ui_ux_reactjs/" : "",
    output: "export",
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/modern_ui_ux_reactjs" : "",
    },
};

export default nextConfig;
