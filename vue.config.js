
//配置对象  将两个配置对象合并  优先执行 你的配置
//配置webpack
module.exports = {
    publicPath:'./',
    //配置反向代理   dev  热启动
    devServer: {
        // port:  3000,
        proxy: {
            '/huaweilogin': {
                target: 'https://hwid1.vmall.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/huaweilogin': '/'
                }
            },
            '/huawei': {
                target: 'https://openapi.vmall.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/huawei': '/'
                }
            },
            
        }
    }
}