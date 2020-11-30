import { defineComponent, onMounted, ref, unref } from 'vue';
import { getTablesApi } from '/@/api/system/data/tables';
import { MainContainer } from '/@/components/Container';
import { BasicColumn, BasicTable } from '/@/components/Table';

const columns: BasicColumn[] = [
  {
    title: '表名称',
    dataIndex: 'tableCollation',
    slots: { title: 'tableCollation' },
  },
  {
    title: '表备注',
    dataIndex: 'tableComment',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '已有数据行数',
    dataIndex: 'tableRows',
  },
];

const DataTabels = defineComponent({
  name: 'DataTables',
  setup() {
    const tablesData = ref(null);

    onMounted(async () => {
      tablesData.value = await getTablesApi();
    });

    return () => (
      <MainContainer>
        {() => (
          <BasicTable
            title="数据表"
            dataSource={unref(tablesData)}
            columns={columns}
            showTableSetting={true}
          />
        )}
      </MainContainer>
    );
  },
});

export default DataTabels;
