export default function plugin() {
  return [
    "swc-plugin-observing-components",
    { import_path: "use-react-signal" },
  ];
}
