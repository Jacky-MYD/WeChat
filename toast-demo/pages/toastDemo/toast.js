Page({
  data: { 
    content: '自定义toast组件'
  },
  // tosat测试
  onLoad: function () {
    // 调用应用实例的方法获取全局数据
    let app = getApp();
    // toast组件实例
    new app.ToastPannel();
  },
  // 触发toast组件
  openToastPannel: function () {
    this.show(this.data.content);
  }
})  