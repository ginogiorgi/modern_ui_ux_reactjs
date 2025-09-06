// Configuración para soportar despliegue en GitHub Pages bajo el subpath del repo.
// - basePath y assetPrefix aseguran que los assets (incluyendo los de public/) se pidan desde /modern_ui_ux_reactjs/
// - output: 'export' genera una versión estática en la carpeta out (ideal para GitHub Pages)
// - images.unoptimized evita uso del Image Optimization Server (no disponible en hosting estático)
// Nota: En desarrollo (npm run dev) no se aplica basePath para mantener rutas simples.
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
