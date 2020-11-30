import { computed, defineComponent, onMounted, provide, ref, unref } from 'vue';
import { Layout } from 'ant-design-vue';
import { FullLoading } from '/@/components/Loading/index';

import { RouterView } from 'vue-router';

import { ContentEnum } from '/@/enums/appEnum';
import { appStore } from '/@/store/modules/app';
import { ScrollContainer } from '/@/components/Container';
export default defineComponent({
  name: 'DefaultLayoutContent',
  setup() {
    const getProjectConfigRef = computed(() => {
      return appStore.getProjectConfig;
    });

    const layoutContentRef = ref();

    provide('layoutContent', layoutContentRef);

    onMounted(() => {
      // const layoutContentEl = layoutContentRef.value as HTMLElement;
      // provide('layoutContentHeight', layoutContentEl.clientHeight);
    });

    return () => {
      const { contentMode, openPageLoading } = unref(getProjectConfigRef);
      const { getPageLoading } = appStore;
      const wrapClass = contentMode === ContentEnum.FULL ? 'full' : 'fixed';
      return (
        <div ref={layoutContentRef} class={[`default-layout__main`]}>
          {openPageLoading && (
            <FullLoading class={[`default-layout__loading`, !getPageLoading && 'hidden']} />
          )}
          <Layout.Content class={`layout-content ${wrapClass} `}>
            {() => (
              <div style="height: 100%">
                <ScrollContainer>{() => <RouterView />}</ScrollContainer>
              </div>
            )}
          </Layout.Content>
        </div>
      );
    };
  },
});
