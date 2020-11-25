import { Button as AButton } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import { BasicModal } from '/@/components/Modal';

export default defineComponent({
  name: 'Test1',
  setup() {
    const visibleRef = ref<boolean>(false);

    return () => (
      <div>
        <AButton onClick={() => (visibleRef.value = true)}>{{ default: () => '打开' }}</AButton>

        <BasicModal
          visible={visibleRef.value}
          title="测试"
          onCancel={() => (visibleRef.value = false)}
        >
          {{ default: () => <div>测试测试测试</div> }}
        </BasicModal>
      </div>
    );
  },
});
