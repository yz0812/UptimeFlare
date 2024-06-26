const pageConfig = {
  // Title for your status page
  title: "yz's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/yz0812', label: 'GitHub' },
    { link: 'https://yz0812.github.io/', label: 'Blog' },
    { link: 'mailto:yz_0812@outlook.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // id "应该是唯一的，如果 "id "保持不变，历史记录将被保留
      id: 'my_blog',
      // 名称 "用于状态页面和回调信息
      name: '我的博客',
      // http请求方法
      method: 'GET',
      // 目标 "是一个有效的 URL
      target: 'https://yz0812.github.io',
      // [可选] `tooltip` 仅用于状态页面，以显示工具提示
      tooltip: '我的博客',
      // [可选] `statusPageLink` 跳转路径
      statusPageLink: 'https://yz0812.github.io',
      // [OPTIONAL] `expectedCodes` 成功状态值 默认是200
      expectedCodes: [200],
      // [OPTIONAL] `timeout` 超时时间
      timeout: 10000,
      // [OPTIONAL] 携带的请求头
      // headers: {
      //   'User-Agent': 'Uptimeflare',
      //   Authorization: 'Bearer YOUR_TOKEN_HERE',
      // },
      // [OPTIONAL] http发送的信息
      // body: 'Hello, world!',
      // [OPTIONAL] 如果指定了该关键字，回复必须包含该关键字才能被视为有效。
      // responseKeyword: 'success',
      // [OPTIONAL] 如果指定，检查将在您指定的区域运行
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
      // checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    // Example TCP Monitor
    {
      id: 'chat.oaichat.cc',
      name: 'GPT-3.5',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://chat.oaichat.cc/',
      tooltip: '免费的3.5接口',
      statusPageLink: 'https://chat.oaichat.cc/',
      timeout: 10000,
    },
    // Example TCP Monitor
    {
      id: 'plus.aivvm.com',
      name: 'GPT-4 L站[plus.aivvm.com]',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://plus.aivvm.com/',
      tooltip: '免费的GPT4',
      statusPageLink: 'https://chatgpt.com/api/auth/session',
      timeout: 10000,
    },

    {
      id: 'shared.oaifree.com',
      name: 'GPT-4 L站[shared.oaifree.com]',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://shared.oaifree.com/',
      tooltip: '免费的GPT4',
      statusPageLink: 'https://shared.oaifree.com/',
      timeout: 10000,
    },
    
  ],
  notification: {
      // [可选] apprise API 服务器 URL
      // 如果未指定，则不会发送通知
      // appriseApiServer: "https://apprise.example.com/notify",
      // [可选] apprise 的接收者 URL，参考 https://github.com/caronc/apprise
      // 如果未指定，则不会发送通知
      // recipientUrl: "tgram://bottoken/ChatID",
      // [可选] 通知消息中使用的时区，默认为 "Etc/GMT"
      timeZone: "Asia/Shanghai",
      // [可选] 发送通知前的宽限期（分钟）
      // 只有在初次故障后连续检查 N 次均失败时才会发送通知
      // 如果未指定，则会立即发送通知
      // gracePeriod: 5,

  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
