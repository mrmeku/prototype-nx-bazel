module.exports = {
  name: 'bazel-is-cool',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bazel-is-cool',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
