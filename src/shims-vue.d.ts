declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'jsencrypt' {
  import JSEncrypt from 'jsencrypt/bin/jsencrypt';
  export default JSEncrypt;
}
