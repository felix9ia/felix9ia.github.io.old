import { defineConfig } from 'umi';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Config from 'webpack-chain';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  // base: '/felix9ia.github.io/',
  publicPath: '/dist/',
  // runtimePublicPath: true,
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
  chainWebpack: (memo, e) => {
    const { env, webpack, createCSSRule } = e;
    if (env === 'production') {
      const html = [
        {
          title: 'felix9ia - 我怕自己忘了',
          filename: '../index.html',
          template: './src/template/index.html',
        },
      ];
      memo.plugin('html').use(HtmlWebpackPlugin, html);
    }
  },
});
