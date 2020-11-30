import { defineComponent } from 'vue';
import { ScrollContainer } from '/@/components/Container';

export default defineComponent({
  name: 'Test2',
  setup() {
    return () => (
      <div style="height: 400px">
        <ScrollContainer class="mt-4">
          <div style="height: 2000px">测试2</div>
        </ScrollContainer>
      </div>
    );
  },
});
