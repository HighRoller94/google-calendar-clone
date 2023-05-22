/** @type {import('next').NextConfig} */
const nextConfig = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        }
    }
}

module.exports = nextConfig
