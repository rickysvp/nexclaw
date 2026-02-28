#!/bin/bash

# NexClaw 版本管理脚本
# 用法: ./scripts/version.sh [major|minor|patch]

set -e

# 获取当前版本
CURRENT_VERSION=$(cat VERSION)
echo "当前版本: $CURRENT_VERSION"

# 解析版本号
IFS='.' read -r -a VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR=${VERSION_PARTS[0]}
MINOR=${VERSION_PARTS[1]}
PATCH=${VERSION_PARTS[2]}

# 根据参数更新版本
if [ "$1" == "major" ]; then
    MAJOR=$((MAJOR + 1))
    MINOR=0
    PATCH=0
elif [ "$1" == "minor" ]; then
    MINOR=$((MINOR + 1))
    PATCH=0
elif [ "$1" == "patch" ]; then
    PATCH=$((PATCH + 1))
else
    echo "用法: ./scripts/version.sh [major|minor|patch]"
    exit 1
fi

NEW_VERSION="$MAJOR.$MINOR.$PATCH"
echo "新版本: $NEW_VERSION"

# 更新 VERSION 文件
echo "$NEW_VERSION" > VERSION

# 更新 package.json
sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json

# 创建 Git 提交
git add VERSION package.json
git commit -m "chore(release): bump version to $NEW_VERSION"

# 创建 Git 标签
git tag -a "v$NEW_VERSION" -m "版本 $NEW_VERSION"

echo "✅ 版本已更新到 $NEW_VERSION"
echo "📝 请更新 CHANGELOG.md 并推送标签: git push origin v$NEW_VERSION"
