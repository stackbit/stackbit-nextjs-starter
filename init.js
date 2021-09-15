#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const subThemesFolder = path.join(__dirname, '../stackbit-subthemes');
const themesManifestFile = path.join(__dirname, '../stackbit-subthemes/manifest.json');
const themesManifestData = fs.existsSync(themesManifestFile) ? JSON.parse(fs.readFileSync(themesManifestFile)) : {};

const options = {
    content: argv.content || 'default',
    theme: argv.theme || 'default',
    watch: argv.watch
};

// const themeName = options.theme;
// const themePath = path.join(subThemesFolder, themeName, 'tailwind.config.js');
// const watcher = chokidar.watch(themePath, { persistent: true });
// const log = console.log.bind(console);

// async function copy(pathName) {
//     try {
//         const pathObject = path.parse(pathName);
//         const dest = path.join(__dirname, pathObject.base);
//         await fs.copy(pathName, dest);
//         console.log('success!');
//     } catch (err) {
//         console.error(err);
//     }
// }

// // Add event listeners.
// watcher
//     .on('add', (pathName) => log(`File ${pathName} has been added`))
//     .on('change', async (pathName) => {
//         log(`File ${pathName} has been changed`);
//         await copy(pathName, __dirname);
//     })
//     .on('unlink', (pathName) => log(`File ${pathName} has been removed`))
//     .on('addDir', (pathName) => log(`Directory ${pathName} has been added`))
//     .on('unlinkDir', (pathName) => log(`Directory ${pathName} has been removed`))
//     .on('error', (error) => log(`Watcher error: ${error}`))
//     .on('ready', () => log('Initial scan complete. Ready for changes'));

const build = async (options) => {
    console.log('options', options);

    fs.removeSync('content');
    fs.removeSync('public');

    const config = {
        content: options.content,
        theme: options.theme
    };

    var json = JSON.stringify(config, null, 4);
    fs.writeFileSync(path.join(__dirname, 'config.json'), json, 'utf8');

    const css = `@import '@stackbit/components/themes/${options.theme}/theme.css'`;
    fs.writeFileSync(path.join(__dirname, 'src/css/', 'theme.css'), css, 'utf8');

    console.log(themesManifestData);
    const contentName = options.content;
    const contentPath = path.join(subThemesFolder, contentName);
    fs.copySync(contentPath, '.');
};

build(options);
