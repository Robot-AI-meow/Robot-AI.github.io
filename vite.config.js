import { defineConfig } from 'vite'

// GitHub Actions 会根据仓库名自动设置 VITE_BASE
// 用户站（wuliyuan.github.io）→ /
// 项目站（personal-resume）→ /personal-resume/
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  base,
})
