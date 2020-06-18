import { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';
import { Route } from '@/models/connect';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */
export const getAuthorityFromRouter = <T extends Route>(
  router: T[] = [],
  pathname: string,
): T | undefined => {
  const authority = router.find(
    ({ routes, path = '/' }) =>
      (path && pathRegexp(path).exec(pathname)) ||
      (routes && getAuthorityFromRouter(routes, pathname)),
  );
  if (authority) return authority;
  return undefined;
};

export const getRouteAuthority = (path: string, routeData: Route[]) => {
  let authorities: string[] | string | undefined;
  routeData.forEach((route) => {
    // match prefix
    if (pathRegexp(`${route.path}/(.*)`).test(`${path}/`)) {
      if (route.authority) {
        authorities = route.authority;
      }
      // exact match
      if (route.path === path) {
        authorities = route.authority || authorities;
      }
      // get children authority recursively
      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

export const getResumeType = (typeNum: string) => {
  let resumeType = '空';
  switch(typeNum){
    case '0': resumeType = '中文';
      break;
    case '1': resumeType = '英文';
      break;
    case '2': resumeType = '中英';
      break;
    case '3': resumeType = '英中';
      break;
    case '4': resumeType = '空';
      break;
    default:
      break;
  }

  return resumeType;
}

// 有否海外留学经历 | 有否海外工作经历
export const hasOverseaEdu = (typeNum: string) =>{
  let eduType = '无';
  switch(typeNum){
    case '0': eduType = '否';
      break;
    case '1': eduType = '是';
      break;
    default:
      break;
  }

  return eduType;
}


// 毕业学校类型
export const getCollegeType = (typeNum: string) =>{
  let collegeType = '无';
  switch(typeNum){
    case '0': collegeType = '普通院校';
      break;
    case '1': collegeType = '985';
      break;
    case '2': collegeType = '211';
      break;
    case '3': collegeType = '港澳台院校';
      break;
    case '4': collegeType = '海外院校';
      break;
    case '5': collegeType = '中学';
      break;
    case '6': collegeType = '职业教育';
      break;
    case '7': collegeType = '培训机构';
      break;
    default:
      break;
  }
  return collegeType;
}
