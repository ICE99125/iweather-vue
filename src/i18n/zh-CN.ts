export default {
  appInfo: {
    project: '小冰天气',
    github: '项目地址',
    issue: '问题/建议',
    contributors: '贡献者',
  },
  date: {
    morning: '早晨',
    afternoon: '中午',
    evening: '旁晚',
    night: '夜间',
    day: '日间',
    pubTime: '发布时间',
  },
  weather: {
    astronomy: {
      label: '日月升落',
      moonphase: '月相',
      illumination: '照明度',
      moonPhaseValue: '月相数值',
    },
    wind: {
      speed: '风速',
    },
    temperature: {
      label: '温度',
      max: '最高温度',
      min: '最低温度',
    },
    pressure: '大气压',
    dew: '露点温度',
    humidity: '空气湿度',
    visibility: '能见度',
    coluds: '云量',
    uvIndex: '紫外线指数',
    precipitation: '降水量',
    precipChance: '降水概率',
    aqi: '空气质量指数',
    hourly: '小时概述',
    daily: '逐日概述',
    air: {
      excellent: '优',
      good: '良',
      lightlyPollution: '轻度污染',
      ModeratePollution: '中度污染',
      HeavyPollution: '重度污染',
      SeriousPollution: '严重污染',
    },
  },
  account: {
    logOut: '退出',
    logIn: '登录',
    signIn: '注册',
    forget: '忘记密码',
  },
  waring: {
    key: 'key 缺失',
  },
  setting: {
    theme: {
      label: '主题',
      darkMode: '暗黑模式',
      autoMode: '自动模式',
      lightMode: '亮色模式',
      systemMode: '跟随系统',
    },
    language: {
      label: '语言',
    },
    dataSources: {
      label: '数据提供商',
      qWeather: '和风天气',
      openWeather: 'openWeather',
      caiyun: '彩云天气',
    },
  },
  map: {
    label: '地图',
    placeholder: '请输入地点',
    select: '地图选点',
    err: '定位失败',
  },
  confirm: '确认',
  cacel: '取消',
  settings: '设置',
  calendar: '日历',
  about: '关于',
  favorites: '收藏',
  dashBoard: '仪表盘',
};

export const time: Record<string, Intl.DateTimeFormatOptions> = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
  },
  hour: {
    hour: 'numeric',
    hour12: false,
  },
  time: {
    hour: 'numeric',
    minute: 'numeric',
  },
};
