import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  base: '/web/',
  publicPath: '/web/',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      exact: true,
      routes: [
        {
          path: '/',
          exact: true,
          component: '@/pages/hero/index.tsx',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
    {
      path: '/user',
      component: '@/layouts/index',
      routes: [
        {
          path: '/user/login',
          exact: true,
          component: '@/pages/user/index',
        },
      ],
    },
    {
      path: '/hero',
      component: '@/layouts/index',
      routes: [
        {
          path: '/hero',
          exact: true,
          component: '@/pages/hero/index.tsx',
        },
      ],
    },
    {
      path: '/skill',
      component: '@/layouts/index',
      routes: [
        {
          path: '/skill',
          exact: true,
          component: '@/pages/skill/index.tsx',
        },
      ],
    },
    {
      path: '/tool',
      component: '@/layouts/index',
      routes: [
        {
          path: '/tool',
          exact: true,
          component: '@/pages/tool/index.tsx',
        },
      ],
    },
    {
      path: '/web',
      // component: '@/layouts/index',
      routes: [
        {
          path: '/web',
          exact: true,
          component: '@/pages/web/index.tsx',
        },
      ],
    },
    {
      path: '/foo',
      component: '@/layouts/index',
      routes: [
        {
          path: '/foo/:id',
          exact: true,
          component: '@/pages/foo/index.js',
        },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
});
