module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    // Your existing plugins
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};