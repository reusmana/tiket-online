export const navigationPath = [
  {
    path: '/',
    description: '홈',
    type: 'active',
    icon: 'home',
  },
  {
    group: '공공정책 조사 신청',
    type: 'active',
    icon: 'write',
    member: [
      {
        path: '/virtual-application',
        description: '가상번호 신청',
        type: 'active',
      },
      {
        path: '/application-status',
        description: '신청 현황',
        type: 'active',
      },
    ],
  },
  {
    group: '발신 관리',
    type: 'active',
    icon: 'call',
    member: [
      {
        path: '/outbound-management',
        description: '(재)발신 요청',
        type: 'active',
      },
    ],
  },
  {
    group: '결과 및 통계',
    type: 'active',
    icon: 'signal',
    member: [
      {
        parentPath: '/result-statistic-research',
        path: ['/result-statistic-research-detail'],
        description: '조사결과 및 통계',
        type: 'active',
      },
      {
        parentPath: '/result-statistic-quotation',
        path: ['/result-statistic-quotation-detail'],
        description: '견적서',
        type: 'active',
      },
    ],
  },
  {
    group: '나의 정보',
    type: 'active',
    icon: 'people',
    member: [
      {
        path: '/my-information',
        description: '나의 정보',
        type: 'active',
      },
      {
        parentPath: '/announcement',
        path: ['/announcement'],
        description: '공지사항',
        type: 'active',
      },
      {
        path: '/payment-status',
        description: '결제 현황',
        type: 'active',
      },
    ],
  },
  {
    group: 'Super Admin',
    type: 'active',
    icon: 'peoples',
    member: [
      {
        path: '/admin/my-information',
        description: 'Super Admin 정보',
        type: 'active',
      },
      {
        path: '/admin/payment-status',
        description: '결제현황',
        type: 'active',
      },
      {
        parentPath: '/admin/customer-status',
        path: ['/admin/customer-status/detail'],
        description: '고객사 현황',
        type: 'active',
      },
      {
        path: '/admin/notification-status',
        description: '알림 현황',
        type: 'active',
      },
      {
        parentPath: '/admin/notification-management',
        path: [
          '/admin/notification-management',
          '/admin/notification-management/register',
          '/admin/notification-management/edit',
        ],
        description: '공지사항 관리',
        type: 'active',
      },
      {
        parentPath: '/admin/guide-management',
        path: ['/admin/guide-management', '/admin/guide-management/register', '/admin/guide-management/register/edit'],
        description: '이용안내 관리',
        type: 'active',
      },
      {
        parentPath: '/admin/term-and-condition-management',
        path: [
          '/admin/term-and-condition-management',
          '/admin/term-and-condition-management/register',
          '/admin/term-and-condition-management/register/edit',
        ],
        description: '이용약관 관리',
        type: 'active',
      },
      {
        path: '/complete-list',
        description: '전체목록',
        type: 'active',
      },
      {
        path: '/settings',
        description: '설정',
        type: 'active',
      },
    ],
  },
];
