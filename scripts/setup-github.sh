#!/bin/bash

# NexClaw GitHub 仓库配置脚本
# 用法: ./scripts/setup-github.sh

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 NexClaw GitHub 配置脚本${NC}"
echo ""

# 检查 GitHub 用户名
if [ -z "$GITHUB_USERNAME" ]; then
    echo -e "${YELLOW}请输入您的 GitHub 用户名:${NC}"
    read GITHUB_USERNAME
fi

if [ -z "$GITHUB_USERNAME" ]; then
    echo -e "${RED}❌ 错误: 必须提供 GitHub 用户名${NC}"
    exit 1
fi

echo -e "${GREEN}✓ GitHub 用户名: $GITHUB_USERNAME${NC}"
echo ""

# 检查是否已有远程仓库
if git remote -v > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  已存在远程仓库配置${NC}"
    git remote -v
    echo ""
    echo -e "${YELLOW}是否覆盖现有配置? (y/n)${NC}"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git remote remove origin 2>/dev/null || true
    else
        echo -e "${YELLOW}跳过远程仓库配置${NC}"
    fi
fi

# 添加远程仓库
echo -e "${GREEN}📦 配置远程仓库...${NC}"
git remote add origin "https://github.com/$GITHUB_USERNAME/nexclaw.git"
echo -e "${GREEN}✓ 远程仓库已添加${NC}"
echo ""

# 验证远程仓库
echo -e "${GREEN}🔍 验证远程仓库配置...${NC}"
git remote -v
echo ""

# 创建版本标签
echo -e "${GREEN}🏷️  创建版本标签...${NC}"
VERSION=$(cat VERSION)
if git rev-parse "v$VERSION" >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  标签 v$VERSION 已存在，跳过创建${NC}"
else
    git tag -a "v$VERSION" -m "版本 $VERSION - 初始版本"
    echo -e "${GREEN}✓ 标签 v$VERSION 已创建${NC}"
fi
echo ""

# 推送代码
echo -e "${GREEN}📤 推送到 GitHub...${NC}"
echo -e "${YELLOW}正在推送代码，请稍候...${NC}"

if git push -u origin main; then
    echo -e "${GREEN}✓ 代码已推送到 main 分支${NC}"
else
    echo -e "${RED}❌ 推送失败，请检查:${NC}"
    echo "  1. GitHub 仓库是否已创建"
    echo "  2. 是否有推送权限"
    echo "  3. 网络连接是否正常"
    exit 1
fi

# 推送标签
if git push origin "v$VERSION"; then
    echo -e "${GREEN}✓ 标签 v$VERSION 已推送${NC}"
else
    echo -e "${YELLOW}⚠️  标签推送失败，可能已存在${NC}"
fi

echo ""
echo -e "${GREEN}🎉 配置完成！${NC}"
echo ""
echo -e "${GREEN}仓库地址: https://github.com/$GITHUB_USERNAME/nexclaw${NC}"
echo -e "${GREEN}版本标签: v$VERSION${NC}"
echo ""
echo -e "${YELLOW}下一步:${NC}"
echo "  1. 访问 GitHub 仓库查看代码"
echo "  2. 在 GitHub 上创建 Release"
echo "  3. 分享您的项目给其他人"
