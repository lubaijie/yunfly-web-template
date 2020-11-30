import { defHttp } from '/@/utils/http/axios';

enum Api {
  Tables = '/system/datasource/tables',
}

export function getTablesApi() {
  return defHttp.request({
    url: Api.Tables,
    method: 'GET',
  });
}
