# tauri-list

A minimal task tracker ("Tasker") built with **Tauri v2**, **React**, and **Vite**, styled using [M3E (Material 3 Expressive)](https://matraic.github.io/m3e/) web components. Targets both desktop (Linux/Windows/macOS) and Android.

## Stack

- **Tauri v2** — native shell
- **React + Vite** — frontend
- **@m3e/web / @m3e/react** — Material 3 Expressive components
- **Gruvbox Material (Soft Dark)** — custom theme applied via M3E design tokens

## Features

- Add / remove tasks
- Persisted to `localStorage`
- Custom Material 3 theming (Gruvbox-inspired accent colors)
- Cross-platform: desktop bundles (`.deb`, `.rpm`, AppImage) + Android build support

## Development

```bash
npm install
npm run tauri dev
```

## Building

Desktop:

```bash
npm run tauri build
```

Android:

```bash
npm run tauri android build
```

Build artifacts are output to `src-tauri/target/release/bundle/`.

## Notes

- Requires the Android SDK/NDK configured (`ANDROID_HOME`, `JAVA_HOME`) for Android builds.
- AppImage bundling requires `linuxdeploy` and its plugins to be available on `PATH` (auto-downloaded to `~/.cache/tauri` by Tauri).

## License

MIT
