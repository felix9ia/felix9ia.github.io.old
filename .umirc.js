import { defineConfig } from 'umi';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/felix9ia.github.io/',
  publicPath: './dist/',
  runtimePublicPath: true,
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/Home' },
        { path: '/home', component: '@/pages/Home' },
        { path: '/post/:id', component: '@/pages/Post' },
        { path: '/blog', component: '@/pages/Blog' },
        // { path: '/archives', component: '@/pages/Archives' },
      ],
    },
  ],
  alias: {
    '@': '/src',
  },
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    // 删除 umi 内置插件
    if (env === 'production') {
      const html = [
        {
          title: 'felix9ia - 找自己',
          filename: '../index.html',
          template: './src/template/index.html',
        },
      ];
      memo.plugin('html').use(HtmlWebpackPlugin, html);
    }
  },
});
