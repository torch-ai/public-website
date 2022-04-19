// noinspection JSUnusedGlobalSymbols
module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source:
          "/post/dataedge-becomes-torch-ai-value-added-reseller-for-cyber-solutions",
        destination:
          "/post/dataedge-seelcts-torch-ai-for-ai-enabled-data-rediness-solutions",
        permanent: true,
      },
    ];
  },
};
