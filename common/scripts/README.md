# Common Scripts 目录说明

本目录包含了项目通用的脚本工具，主要用于自动化安装和运行各种 Node.js 工具。这些脚本由 Rush 工具自动生成，确保在不同环境中能够一致地运行项目命令。

## 脚本列表

### 📦 Rush 工具脚本

#### `install-run-rush.js`
**功能**: 自动安装并运行 Rush 命令
- 自动检测并安装 rush.json 中指定版本的 Rush
- 在 Rush 未安装或版本不匹配时自动处理
- 适用于自动化构建环境
- **使用示例**: `node common/scripts/install-run-rush.js install`

#### `install-run-rushx.js`
**功能**: 自动安装并运行 rushx 命令
- 基于 `install-run-rush.js` 实现
- 专门用于执行 rushx 自定义命令
- 确保 Rush 环境正确配置后执行 rushx
- **使用示例**: `node common/scripts/install-run-rushx.js custom-command`

#### `install-run-rush-pnpm.js`
**功能**: 自动安装并运行 rush-pnpm 命令
- 基于 `install-run-rush.js` 实现
- 专门用于执行 rush-pnpm 相关命令
- 结合 pnpm 包管理器使用
- **使用示例**: `node common/scripts/install-run-rush-pnpm.js pnpm-command`

### 🛠️ 通用工具脚本

#### `install-run.js`
**功能**: 通用的 Node.js 工具安装运行脚本
- 自动安装指定版本的 Node.js 工具
- 支持任意 npm 包的自动安装和运行
- 处理版本检查和依赖管理
- **使用示例**: `node common/scripts/install-run.js qrcode@1.2.2 qrcode https://rushjs.io`

## 脚本特点

### 🔄 自动化特性
- **版本管理**: 根据配置文件自动安装正确版本的工具
- **环境适应**: 适用于本地开发和 CI/CD 环境
- **缓存机制**: 避免重复安装已有的工具版本
- **错误处理**: 包含完善的错误处理和重试机制

### 🛡️ 安全性
- 所有脚本都由 Rush 工具自动生成
- 遵循 Microsoft 的开源许可证
- 包含完整的版本验证和签名检查

### ⚡ 性能优化
- 智能缓存已安装的工具版本
- 并行化安装和运行流程
- 最小化网络请求和磁盘操作

## 使用场景

### 🏗️ CI/CD 环境
```bash
# 在 CI 中安装依赖
node common/scripts/install-run-rush.js install

# 执行构建
node common/scripts/install-run-rush.js build

# 执行测试
node common/scripts/install-run-rushx.js test
```

### 👩‍💻 本地开发
```bash
# 本地安装依赖
node common/scripts/install-run-rush.js update

# 运行自定义命令
node common/scripts/install-run-rushx.js start

# 使用特定工具
node common/scripts/install-run.js prettier@2.8.0 prettier --check .
```

### 📋 批处理脚本
```bash
# 在其他脚本中使用
#!/bin/bash
node common/scripts/install-run-rush.js install
node common/scripts/install-run-rushx.js lint
node common/scripts/install-run-rushx.js test
```

## 环境要求

- **Node.js**: 需要 Node.js 运行环境
- **网络访问**: 首次运行时需要下载工具包
- **文件权限**: 需要在 common/temp 目录有写入权限
- **配置文件**: 需要有效的 rush.json 配置文件

## 故障排除

### 常见问题
1. **网络问题**: 配置 npm registry 或使用企业内网镜像
2. **权限问题**: 确保有足够的文件系统权限
3. **版本冲突**: 清理 common/temp 目录重新安装
4. **配置错误**: 检查 rush.json 配置是否正确

### 调试建议
- 查看 common/temp 目录的日志文件
- 使用 `--debug` 参数获取详细输出
- 检查环境变量配置
- 验证网络连接和代理设置

## 注意事项

⚠️ **重要提醒**:
- 这些脚本由工具自动生成，请勿手动修改
- Rush 升级时会覆盖这些文件
- 如需自定义，请在项目配置中进行
- 在生产环境中使用前请充分测试