# 唐轲个人作品集：GitHub Pages 上传包

本文件夹可以直接发布到 GitHub Pages，不需要安装 Node.js，也不需要执行构建命令。

## 发布到 `JustinKe02.github.io`

1. 登录 GitHub，创建名为 `JustinKe02.github.io` 的公开仓库；如果仓库已经存在，请先备份原有内容。
2. 解压下载包，将解压后的 `index.html`、`styles.css`、`portfolio-avatar.jpg` 和 `.nojekyll` 上传到仓库根目录，而不是再套一层文件夹。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`，然后保存。
5. 等待 GitHub 完成部署后，访问 `https://JustinKe02.github.io`。

后续添加视频时，可以把视频文件放入仓库的 `videos` 文件夹，再把 `index.html` 中相应的视频占位区域替换为 `<video>` 标签。
