# Personal Resume

个人简历单页，部署到 **GitHub Pages**（低调模式）。

线上地址（仅知道链接的人可访问）：

```text
https://liyuan-wu.github.io/Robot-AI-meow/
```

## 推送 / 更新

```bash
cd "/Users/liyuan/Documents/Obsidian Vault/personal-resume"
git add .
git commit -m "update resume"
git remote set-url origin git@github.com:liyuan-wu/Robot-AI-meow.git
git push -u origin main
```

首次推送若还没有 remote：

```bash
git remote add origin git@github.com:liyuan-wu/Robot-AI-meow.git
```

## 开启 Pages（只需一次）

仓库 → **Settings → Pages → Source** → 选 **GitHub Actions**

## 隐私

- 仓库名不易猜，不在根路径暴露
- 页面已加 `noindex`，尽量不收录到搜索引擎
- 建议仓库设为 **Private**（源码不公开）

## 本地开发

```bash
npm install
npm run dev
```
