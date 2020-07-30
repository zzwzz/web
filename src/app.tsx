import { ResponseError } from 'umi-request';

export function patchRoutes({ routes }: { routes: any }) {}

export const request = {
  prefix: '/api',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log('错误', error);
  },
};
