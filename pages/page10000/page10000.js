// pages/page10000/page10000.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        page_hidden: false,
        carousel1: {
            hidden: false,
            // 组件类型
            type: "carousel",
            style: "height:398.4375rpx;margin-left:0;margin-right:auto;margin-top:0;opacity:1;",
            content: [{
                    customFeature: [], // 定制特征
                    pic: "http://img.weiye.me/zcimgdir/album/file_59001034a7cd2.png"
                },
                {
                    customFeature: [], // 定制特征
                    pic: "http://img.weiye.me/zcimgdir/album/file_59001040ad59d.png"
                }
            ],
            // 定制特征
            customFeature: {
                autoplay: true, // 是否自动切换、自动播放
                interval: 2, // 播放间隔、自动切换时间间隔
                carouselgroupId: null, // 绑定轮播分组id 
                indicatorColor: "",
                indicatorActiveColor: ""
            },
            animations: [], // 动画
            page_form: "",
            compId: "carousel1",
            loading: false, // 加载中状态
            loadingFail: false, // 加载失败
            canIUseNavigatorTarget: "",
            videoUrl:""
        },
        album2: {
            hidden: false
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {}
});