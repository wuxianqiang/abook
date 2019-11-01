module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "abook",
        "camel2Dash": false,
        "styleLibrary": {
          "name": "theme-chalk",
          "base": false,
          "path": "[module].css",
        }
      }
    ]
  ]
}
