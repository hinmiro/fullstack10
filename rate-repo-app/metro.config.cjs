const { getDefaultConfig } = require('@expo/metro-config')
const path = require('path')
const __dirname = path.resolve()

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.sourceExts.push('cjs')

module.exports = defaultConfig
