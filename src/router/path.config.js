
const home = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    {
        name: 'home',
        path: '/home',
        component: r => require.ensure([],() => r(require('@/view/home/Home.vue')), "home")
    },
    {
        name: 'bar',
        path: '/bar',
        component: Bar
    },
    {
        name: 'none',
        path: '*',
        redirect: {
            name: 'home'
        }
    }
]

export { routes }