import { defineConfig } from 'umi';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
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
  outputPath: './',
  plugins: [],
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    // 删除 umi 内置插件
    const html = new HtmlWebpackPlugin({
      title: 'felix9ia - 找自己',
      filename: '../index.html',
      template: './src/template/index.html',
    });
    memo.plugins.push(html);
  },
});
