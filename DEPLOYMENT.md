# NexClaw 部署指南

## 部署方式

### 方式 1: 静态导出（推荐用于测试环境）

1. **构建静态文件**
   ```bash
   npm run build:static
   ```

2. **部署到任意静态托管服务**
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - 阿里云 OSS

### 方式 2: Node.js 服务器

1. **构建应用**
   ```bash
   npm run build
   ```

2. **启动服务器**
   ```bash
   npm start
   ```

3. **使用 PM2 管理进程（生产环境）**
   ```bash
   npm install -g pm2
   pm2 start npm --name "nexclaw" -- start
   ```

### 方式 3: Docker 部署

1. **构建 Docker 镜像**
   ```bash
   docker build -t nexclaw:latest .
   ```

2. **运行容器**
   ```bash
   docker run -d -p 3000:3000 --name nexclaw nexclaw:latest
   ```

## 环境变量

创建 `.env.local` 文件：

```env
# 基础配置
NEXT_PUBLIC_APP_URL=https://nexclaw.example.com
NODE_ENV=production

# 可选：分析工具
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 测试环境部署

### 使用 Vercel（推荐）

1. 在 Vercel 上导入 GitHub 仓库
2. 配置环境变量
3. 自动部署

### 使用 Netlify

1. 连接 GitHub 仓库
2. 构建设置：
   - Build command: `npm run build:static`
   - Publish directory: `dist`

## 生产环境检查清单

- [ ] 环境变量配置正确
- [ ] 构建成功无错误
- [ ] 所有页面可访问
- [ ] 静态资源加载正常
- [ ] 响应式设计正常
- [ ] 性能优化完成

## 版本发布流程

1. 更新版本号（VERSION 文件）
2. 更新 CHANGELOG.md
3. 提交代码到 Git
4. 创建 Git 标签
5. 推送到远程仓库
6. 触发自动部署

## 回滚策略

如果部署出现问题：

```bash
# 回滚到上一个版本
git checkout v0.2.0
npm run build
# 重新部署
```

## 监控和日志

- 使用 Vercel Analytics 或 Google Analytics
- 配置错误监控（Sentry）
- 设置性能监控

---

**最后更新**: 2026-02-28
