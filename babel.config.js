const presets = [
  [
    "next/babel",
  ],
];
const plugins = [
  [
    "transform-flow-strip-types",
    // "object-to-json-parse" Next rejects parse
  ]
];

module.exports = { presets, plugins };