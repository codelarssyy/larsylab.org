module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/larssyy',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/ContactLarssyy',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/1089191436475449455',
        permanent: true,
      },
    ]
  },
}
