import { createRouter, createWebHistory } from 'vue-router'

// 골뱅이를 쓴 이유는 vite.config 보면서 설명!
import Main from '@/pages/Main.vue'
import Banner from '@/pages/BannerList.vue'
import BannerAdd from '@/pages/BannerAdd.vue'
import Notice from '@/pages/NoticeList.vue'
import NoticeAdd from '@/pages/NoticeAdd.vue'
import NoticeEdit from '@/pages/NoticeEdit.vue'
import User from '@/pages/UserList.vue'

const router = createRouter({ // 라우터 인스턴스 생성
    history: createWebHistory(), // html5 히스토리 모드를 사용, URL 변경을 처리하는 함수!
    routes : [
        { path: '/', component: Main },
        {
            path: '/banner',
            name : 'Banner',
            component: Banner },
        { path: '/bannerAdd', component: BannerAdd },
        {
            path: '/notice',
            name : 'Notice',
            component: Notice },
        { path: '/noticeAdd', component: NoticeAdd },
        { path: '/user', component: User },
        {
            path: '/noticeEdit/:noticeId',
            name: 'NoticeEdit',
            component: NoticeEdit,
            props: true // URL 파라미터를 props로 전달
        }
    ]
})

export default router;