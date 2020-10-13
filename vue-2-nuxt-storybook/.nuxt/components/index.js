export { default as Logo } from '../../components/Logo.vue'
export { default as Button } from '../../components/stories/Button.vue'
export { default as Header } from '../../components/stories/Header.vue'
export { default as Page } from '../../components/stories/Page.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyButton = import('../../components/stories/Button.vue' /* webpackChunkName: "components/stories/Button" */).then(c => c.default || c)
export const LazyHeader = import('../../components/stories/Header.vue' /* webpackChunkName: "components/stories/Header" */).then(c => c.default || c)
export const LazyPage = import('../../components/stories/Page.vue' /* webpackChunkName: "components/stories/Page" */).then(c => c.default || c)
