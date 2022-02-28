//index.js
//获取应用实例
var app = getApp()
Page({ 
  data: {
    imgUrls: [
      '../../images/slider_1.jpeg',
      '../../images/slider_2.jpeg',
      '../../images/slider_3.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goods: function() {
    wx.navigateTo({
      url: '../second_level/secondhand/goods'
    })
  },
  // notice: function() {
  //   wx.navigateTo({
  //     // url: '../second_level/notice/notice'
  //     url: 'weixin://dl/business/?t=QDZVQEO2z9f
  //   })
  // },
  notice: function() {
    wx.navigateToMiniProgram({
      appId:'wx82d43fee89cdc7df'
    })
  },
  // repairs: function() {
  //   wx.navigateTo({
  //     url: '../second_level/repairs/repairs'
  //   })
  // },
  repairs: function() {
    wx.navigateToMiniProgram({
      appId: 'wxbb58374cdce267a6',
    })
  },
  pay: function() {
    wx.navigateTo({
      url: '../second_level/pay/pay'
    })
  },
  pay: function() {
    wx.navigateTo({
      url: '../second_level/pay/pay'
    })
  },
  // survey: function() {
  //   wx.navigateTo({
  //     url: '../survey/survey'
  //   })
  // },
  survey: function() {
    wx.navigateToMiniProgram({
      appId: 'wx8f446acf8c4a85f5',
    })
  },
  visitor: function() {
    wx.navigateTo({
      url: '../second_level/visitor/visitor'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    
  },
  tapName: function(event) {
    console.log(event)
  }
})

