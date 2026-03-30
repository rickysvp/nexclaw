# Claw Wallet Website Versions

## Version History

### v1.0.0 - CoinFello Clone Base
**Date:** 2026-03-29
**Status:** Baseline
**Description:** 
- 基于 CoinFello 网站设计的克隆版本
- 保留了 CoinFello 的布局、样式和交互
- 作为后续 Claw Wallet 品牌改造的基础

**Key Features:**
- Grid background pattern
- Hero section with golden italic accent
- Scrolling command tags
- Trust badges
- Features demo with tabs
- Security cards
- Agent Skill code block
- Newsletter subscription

**Files:**
- `/src/app/page.tsx` - Main landing page

---

### v1.1.0 - Claw Wallet Brand
**Date:** 2026-03-29
**Status:** Completed
**Description:**
- 将 CoinFello 设计改造为 Claw Wallet 品牌
- 面向 AI Agent 用户的安全钱包定位
- 强调自托管、无私钥管理、智能风控

**Changes:**
- [x] Hero section: "让 AI Agent 拥有安全的钱包"
- [x] Features: 对话操作、自托管安全、智能风控、多链支持
- [x] Security: 自托管架构、TEE 硬件加密、智能风控引擎、策略引擎
- [x] Brand colors: 紫色 (#6B46C1) 主题
- [x] Logo: 🦞 龙虾图标
- [x] 所有文案中文化
- [x] 更新导航、CTA、Footer

---

## Version Naming Convention

- **v1.x.x** - CoinFello clone iterations
- **v2.x.x** - Claw Wallet brand iterations
- **v3.x.x** - Future major redesigns

## Rollback Instructions

To rollback to a previous version:

```bash
# Copy backup file to restore
cp versions/backups/v1.0.0-page.tsx src/app/page.tsx

# Or use git if available
git checkout v1.0.0
```
