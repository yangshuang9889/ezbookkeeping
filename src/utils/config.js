// src/config/index.js
// 环境区分（开发/测试/生产）
const env = process.env.NODE_ENV || 'development';

// 不同环境的配置项
const envConfig = {
  // 开发环境
  development: {
    baseApi: 'https://jz.xn--yrv04v.com/api', // 本地接口地址
    timeout: 10000, // 请求超时
  },
  // 生产环境
  production: {
    baseApi: 'https://jz.xn--yrv04v.com/api', // 线上接口地址
    timeout: 15000,
  },
  // 测试环境（可选）
  test: {
    baseApi: 'https://jz.xn--yrv04v.com/api',
    timeout: 10000,
  },
};

// 导出最终配置（合并通用配置和环境专属配置）
export default {
  env,
  ...envConfig[env],
  // 可添加全局通用配置
  pageSize: 20, // 分页默认条数
  tokenKey: 'USER_TOKEN', // 存储token的key
};
