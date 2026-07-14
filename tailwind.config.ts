import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { brand: {50:'#e8f2ff',100:'#d5e9ff',500:'#248bff',600:'#006fe8',700:'#0059c9'}, surface:'#0b111a'} } }, plugins: [] }
export default config
