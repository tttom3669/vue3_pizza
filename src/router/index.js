import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginAdmin.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue'),
        props: (route) => ({ id: route.params.id }),
      },
      {
        path: 'order',
        component: () => import('../views/front/OrderView.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/CheckoutView.vue'),
        props: (route) => ({ orderId: route.params.orderId }),
      },
      {
        path: 'search/:keywords',
        component: () => import('../views/front/SearchView.vue'),
        props: (route) => ({ keywords: route.params.keywords }),
      },
      {
        path: 'articles',
        component: () => import('../views/front/ArticlesView.vue'),
      },
      {
        path: 'articles/:articleId',
        component: () => import('../views/front/ArticleView.vue'),
        props: (route) => ({ articleId: route.params.articleId }),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'adminHome',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/admin/AdminArticles.vue'),
      },
    ],
  },
  // // 404 頁面
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue'),
  // },
  // 重新導向
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior() {
    // 參數
    // to, from 路由位置 (來源,目標)
    // savedPosition 可以為空，如果沒有的話
    // 始終滾動到頂部
    return { top: 0 };
  },
  routes,
});

export default router;
