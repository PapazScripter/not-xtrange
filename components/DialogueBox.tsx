6:03:38 PM: build-image version: e939f44b001caa6487d455733296841972e73575 (noble)
6:03:38 PM: buildbot version: 6500ef2da7c345197096dc6f44fc4a0c3324578a
6:03:39 PM: Fetching cached dependencies
6:03:39 PM: Failed to fetch cache, continuing with build
6:03:39 PM: Starting to prepare the repo for build
6:03:39 PM: No cached dependencies found. Cloning fresh repo
6:03:39 PM: git clone --filter=blob:none https://github.com/PapazScripter/not-xtrange
6:03:39 PM: Preparing Git Reference refs/heads/main
6:03:40 PM: Starting to install dependencies
6:03:42 PM: v22.21.1 is already installed.
6:03:42 PM: Now using node v22.21.1 (npm v10.9.4)
6:03:42 PM: Enabling Node.js Corepack
6:03:42 PM: Started restoring cached build plugins
6:03:42 PM: Finished restoring cached build plugins
6:03:42 PM: Started restoring cached corepack dependencies
6:03:42 PM: Finished restoring cached corepack dependencies
6:03:42 PM: No npm workspaces detected
6:03:42 PM: Started restoring cached node modules
6:03:42 PM: Finished restoring cached node modules
6:03:42 PM: Installing npm packages using npm version 10.9.4
6:03:51 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
6:03:47 PM: added 67 packages in 5s
6:03:47 PM: npm packages installed
6:03:48 PM: Successfully installed dependencies
6:03:48 PM: Starting build script
6:03:48 PM: Detected 1 framework(s)
6:03:48 PM: "vite" at version "6.4.1"
6:03:48 PM: Section completed: initializing
6:03:50 PM: ​
6:03:50 PM: Netlify Build                                                 
6:03:50 PM: ────────────────────────────────────────────────────────────────
6:03:50 PM: ​
6:03:50 PM: ❯ Version
6:03:50 PM:   @netlify/build 35.5.5
6:03:50 PM: ​
6:03:50 PM: ❯ Flags
6:03:50 PM:   accountId: 692a3d68274f42bf3d6ef8e6
6:03:50 PM:   baseRelDir: true
6:03:50 PM:   buildId: 69388ea8cbdf0b00086ed02e
6:03:50 PM:   deployId: 69388ea8cbdf0b00086ed030
6:03:50 PM: ​
6:03:50 PM: ❯ Current directory
6:03:50 PM:   /opt/build/repo
6:03:50 PM: ​
6:03:50 PM: ❯ Config file
6:03:50 PM:   No config file was defined: using default values.
6:03:50 PM: ​
6:03:50 PM: ❯ Context
6:03:50 PM:   production
6:03:50 PM: ​
6:03:50 PM: Build command from Netlify app                                
6:03:50 PM: ────────────────────────────────────────────────────────────────
6:03:50 PM: ​
6:03:50 PM: $ npm run build
6:03:50 PM: > no,-i'm-not-a-xtrange@0.0.0 build
> vite build
6:03:50 PM: vite v6.4.1 building for production...
6:03:50 PM: /index.css doesn't exist at build time, it will remain unchanged to be resolved at runtime
transforming...
6:03:51 PM: ✓ 35 modules transformed.
6:03:51 PM: ✗ Build failed in 439ms
6:03:51 PM: error during build:
6:03:51 PM: App.tsx (7:9): "DialogueBox" is not exported by "components/DialogueBox.tsx", imported by "App.tsx".
6:03:51 PM: file: /opt/build/repo/App.tsx:7:9
6:03:51 PM: 
6:03:51 PM: 5: import { getCharacterResponse, getInspectionResult } from './utils/gameLogic';
6:03:51 PM: 6: import { playAmbience, stopAmbience, playSFX, playMusic, stopMusic, playGuitarString } from './utils/audio';
6:03:51 PM: 7: import { DialogueBox } from './components/DialogueBox';
6:03:51 PM:             ^
6:03:51 PM: 8: import { CharacterView } from './components/CharacterView';
6:03:51 PM: 
6:03:51 PM:     at getRollupError (file:///opt/build/repo/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
6:03:51 PM:     at error (file:///opt/build/repo/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
6:03:51 PM:     at Module.error (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:16956:16)
6:03:51 PM:     at Module.traceVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:17412:29)
6:03:51 PM:     at ModuleScope.findVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:15076:39)
6:03:51 PM:     at ReturnValueScope.findVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5649:38)
6:03:51 PM:     at FunctionBodyScope.findVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5649:38)
6:03:51 PM:     at ReturnValueScope.findVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5649:38)
6:03:51 PM:     at FunctionBodyScope.findVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5649:38)
6:03:51 PM:     at Identifier.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5423:40)
6:03:51 PM: ​
6:03:51 PM: "build.command" failed                                        
6:03:51 PM: ────────────────────────────────────────────────────────────────
6:03:51 PM: ​
6:03:51 PM:   Error message
6:03:51 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
6:03:51 PM: ​
6:03:51 PM:   Error location
6:03:51 PM:   In Build command from Netlify app:
6:03:51 PM:   npm run build
6:03:51 PM: ​
6:03:51 PM:   Resolved config
6:03:51 PM:   build:
6:03:51 PM:     command: npm run build
6:03:51 PM:     commandOrigin: ui
6:03:51 PM:     publish: /opt/build/repo/dist
6:03:51 PM:     publishOrigin: ui
6:03:51 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
6:03:51 PM: Failing build: Failed to build site
6:03:51 PM: Finished processing build request in 12.796s
