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
    theme: argv.theme || 'fish'
};

const themeName = options.theme;
const themePath = path.join(subThemesFolder, themeName, 'tailwind.config.js');

const watcher = chokidar.watch(themePath, { persistent: true });
const log = console.log.bind(console);

async function copy(pathName) {
    try {
        const pathObject = path.parse(pathName);
        const dest = path.join(__dirname, pathObject.base);
        await fs.copy(pathName, dest);
        console.log('success!');
    } catch (err) {
        console.error(err);
    }
}

// Add event listeners.
watcher
    .on('add', (pathName) => log(`File ${pathName} has been added`))
    .on('change', async (pathName) => {
        log(`File ${pathName} has been changed`);
        await copy(pathName, __dirname);
    })
    .on('unlink', (pathName) => log(`File ${pathName} has been removed`))
    .on('addDir', (pathName) => log(`Directory ${pathName} has been added`))
    .on('unlinkDir', (pathName) => log(`Directory ${pathName} has been removed`))
    .on('error', (error) => log(`Watcher error: ${error}`))
    .on('ready', () => log('Initial scan complete. Ready for changes'));

const build = async (options) => {
    console.log(themesManifestData);
    const themeName = options.theme;
    const themePath = path.join(subThemesFolder, themeName);
    fs.copySync(themePath, '.');
};

build(options);
