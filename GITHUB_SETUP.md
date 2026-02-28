# GitHub 仓库配置指南

## 1. 在 GitHub 上创建新仓库

1. 登录 GitHub 账号
2. 点击右上角 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `nexclaw` (或您喜欢的名称)
   - **Description**: `下一代 AI Agent 安全钱包平台`
   - **Visibility**: Public (推荐) 或 Private
   - **Initialize**: 不要勾选 "Add a README file" (我们已有)
4. 点击 "Create repository"

## 2. 配置本地仓库

在终端中执行以下命令：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/nexclaw.git

# 或者使用 SSH（推荐）
git remote add origin git@github.com:YOUR_USERNAME/nexclaw.git

# 验证远程仓库
git remote -v
```

## 3. 推送代码

```bash
# 创建版本标签
git tag -a v0.1.0 -m "版本 0.1.0 - 初始版本"

# 推送到 GitHub
git push -u origin main
git push origin v0.1.0
```

## 4. 验证推送

访问 `https://github.com/YOUR_USERNAME/nexclaw` 查看代码是否已成功推送。

## 5. 创建 GitHub Release

1. 在 GitHub 仓库页面，点击右侧 "Releases"
2. 点击 "Create a new release"
3. 选择标签 `v0.1.0`
4. 填写发布标题：`NexClaw v0.1.0`
5. 填写发布说明（可从 CHANGELOG.md 复制）
6. 点击 "Publish release"

## 快速配置脚本

如果您已经配置好 GitHub 账号，可以直接运行：

```bash
# 设置您的 GitHub 用户名
export GITHUB_USERNAME="your-username"

# 运行配置脚本
./scripts/setup-github.sh
```

---

**注意**: 请确保您已安装 Git 并配置好 SSH 密钥（如果使用 SSH 方式）。
