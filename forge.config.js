module.exports = {
  rebuildConfig: {},
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'ganeshaampuh',
          name: 'desktop-vue-golang'
        },
        prerelease: true,
        authToken: process.env.GITHUB_TOKEN
      }
    }
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: 'Ganesha Ampuh',
        description: 'Desktop boilerplate for Golang + Vue stack'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
