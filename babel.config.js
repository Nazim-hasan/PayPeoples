module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'assets': '/assets',
        },
        extensions: ['.js', '.ts', 'jsx', '.tsx', '.ios.js', '.android.js'],
        
      },
    ],
  ],
};
