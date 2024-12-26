/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        Email_JS_Service: process.env.NEXT_PRIVATE_Email_JS_Service,
        Email_JS_Template: process.env.NEXT_PRIVATE_Email_JS_Template,
        Email_JS_Pubic_Key: process.env.NEXT_PRIVATE_Email_JS_Pubic_Key,
    },
};

export default nextConfig;
