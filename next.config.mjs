/** @type {import('next').NextConfig} */


const NextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "cdn.discordapp.com",
            port: '',
            pathname: '**/**'
        },
        {
            protocol: 'https',
            hostname: "upload.wikimedia.org",
            port: '',
            pathname: '**/**'
        },
        {
            protocol: "https",
            hostname: "kesjdfgazvhmlugxqfys.supabase.co",
            port: "",
            pathname: "**/**"
        }
        ]
    },
    compiler: {
        styledComponents: true,
    },
};



export default NextConfig;