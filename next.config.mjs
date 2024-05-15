/** @type {import('next').NextConfig} */


const NextConfig = {
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
        ]
    },
    compiler: {
        styledComponents: true,
    },
};



export default NextConfig;