// noinspection JSUnusedGlobalSymbols
module.exports = {
  images: {
    // Contentful assets
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
      // 2022-08-29
      {
        source: "/legal/services-terms-conditions",
        destination: "/terms/MSA_Services Agreement-8_29_2022.pdf",
        permanent: false,
      },
      // 2022-04-26
      {
        source: "/legal/naasterms",
        destination: "/terms/62165287b0c6e1dd637c8e75_NaaS-Terms-8.27.2021.pdf",
        permanent: false,
      },
      // 2022-04-26
      {
        source: "/legal/eula",
        destination: "/terms/6128f1444f09249ec2ac66d8_EULA.pdf",
        permanent: false,
      },
      // 2022-05-02
      {
        source: "/tei-april2022",
        destination: "/tei-april-2022",
        permanent: true,
      },
    ];
  },
};
