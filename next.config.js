/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const { i18n } = require('./i18n/next-i18next.config')

module.exports = {
  i18n,
}