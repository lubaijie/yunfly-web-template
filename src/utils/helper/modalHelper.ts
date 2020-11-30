import { toHump } from '..';
import { isArray } from '../is';

/**
 * @description 下划线字段改驼峰字段
 * @param data
 */
export function fieldLineToHump(data: { [key: string]: any } | Array<{ [key: string]: any }>) {
  if (typeof data !== 'object') return;

  if (isArray(data)) {
    const resultData: any = [];
    data.forEach((item: { [key: string]: any }) => {
      Object.keys(item).forEach((field: string) => {
        item[toHump(field)] = item[field];
        delete item[field];
      });
      resultData.push(item);
    });

    return resultData;
  } else {
    Object.keys(data).forEach((field: string) => {
      data[toHump(field)] = data[field];
      delete data[field];
    });

    return data;
  }
}
