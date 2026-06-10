# Personal Resume

个人简历单页，部署到 **GitHub Pages**。

仓库：[Robot-AI-meow/Robot-AI.github.io](https://github.com/Robot-AI-meow/Robot-AI.github.io)

线上地址：

```text
https://robot-ai-meow.github.io/Robot-AI.github.io/
```

> 若把仓库改名为 `Robot-AI-meow.github.io`，地址可简化为 `https://robot-ai-meow.github.io`

## 推送 / 更新

```bash
cd "/Users/liyuan/Documents/Obsidian Vault/personal-resume"
git add .
git commit -m "update resume"
git remote set-url origin git@github.com:Robot-AI-meow/Robot-AI.github.io.git
git push -u origin main
```

## 开启 Pages（只需一次）

仓库 → **Settings → Pages → Source** → 选 **GitHub Actions**

## 本地开发

```bash
npm install
npm run dev
```
