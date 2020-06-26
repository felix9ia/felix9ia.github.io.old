import { extend } from 'umi-request';
import { CONFIG } from '@/config';

export const request = extend({
  prefix: 'https://api.github.com',
  timeout: 5000,
  params: {
    access_token: CONFIG.token.join(''),
  },
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
