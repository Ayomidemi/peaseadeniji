/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/quant/stochastic-modeling/sm-gwp1/sm-gwp1.html",
        destination: "/quant/sm-gwp1",
        permanent: true,
      },
      {
        source: "/quant/stochastic-modeling/sm-gwp2/sm-gwp2.html",
        destination: "/quant/sm-gwp2",
        permanent: true,
      },
      {
        source: "/quant/derivatives-pricing/fdp-gwp1/fdp-gwp1.html",
        destination: "/quant/fdp-gwp1",
        permanent: true,
      },
      {
        source: "/quant/derivatives-pricing/fdp-gwp2/fdp-gwp2.html",
        destination: "/quant/fdp-gwp2",
        permanent: true,
      },
      {
        source: "/quant/deep-learning/dl-gwp1/dl-gwp1.html",
        destination: "/quant/dl-gwp1",
        permanent: true,
      },
      {
        source: "/quant/deep-learning/dl-gwp2/dl-gwp2.html",
        destination: "/quant/dl-gwp2",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/notebooks/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
