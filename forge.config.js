module.exports = {
  packagerConfig: {
    ignore: [
      "^\\/node_modules$",
    ]
  },
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
      config: {},
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
