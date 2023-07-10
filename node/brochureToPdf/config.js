const path = require("path");
module.exports = {
    // 生成的文件存放目录
    folderPath: path.resolve(__dirname, "./小册"),
    // 小册链接(小册第一章的链接)
    bookLinks: [
        'https://juejin.cn/book/7146465352120008743/section/7146465352606728231',
        'https://juejin.cn/book/7171733571638738952/section/7176147435599691836',
        'https://juejin.cn/book/7174044519350927395/section/7174044518763888675'
    ],
    // 是否合并小册pdf（依赖easy-pdf-merge，需java环境）
    isMerge:true,
    // cookie: "n_mh=EFg1_mBHQbgSgSf99DQS8qIA7qY3jFf9OAFGOWaDQQk; sid_guard=654fdab6961159b9ddc71d88dd74d480%7C1678843081%7C31536000%7CThu%2C+14-Mar-2024+01%3A18%3A01+GMT; uid_tt=31ebf54cf451c8dd8203f0033281287d; uid_tt_ss=31ebf54cf451c8dd8203f0033281287d; sid_tt=654fdab6961159b9ddc71d88dd74d480; sessionid=654fdab6961159b9ddc71d88dd74d480; sessionid_ss=654fdab6961159b9ddc71d88dd74d480; sid_ucp_v1=1.0.0-KGMwOTEwOGQ2YWQzZjlmOTUzODdhZDI0YmQwN2E4MDhkMjA0MWUxM2EKFwjn9sDA_fWRBhDJucSgBhiwFDgCQO8HGgJsZiIgNjU0ZmRhYjY5NjExNTliOWRkYzcxZDg4ZGQ3NGQ0ODA; ssid_ucp_v1=1.0.0-KGMwOTEwOGQ2YWQzZjlmOTUzODdhZDI0YmQwN2E4MDhkMjA0MWUxM2EKFwjn9sDA_fWRBhDJucSgBhiwFDgCQO8HGgJsZiIgNjU0ZmRhYjY5NjExNTliOWRkYzcxZDg4ZGQ3NGQ0ODA; store-region=cn-sh; store-region-src=uid; csrf_session_id=561fec86656bac72130747c98aa051ed; _tea_utm_cache_2018={%22utm_source%22:%22gold_browser_extension%22}; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; msToken=-c3gZyb5THUlaAbxwOpVwCWvle84tTgzorub-wrAym-8GffqoqSbZPIH-nIENieVUFST792wu3HjEO4IsWiE2K_LZ2uGVFaCKAYrLjXbWZzwGsPOTqnb65A0u9q5q3nS",
    // 对象格式cookie
    cookieOjbs: [
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "uid_tt",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "31ebf54cf451c8dd8203f0033281287d",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "uid_tt_ss",
            path: "/",

            secure: true,
            session: false,
            storeId: null,
            value: "31ebf54cf451c8dd8203f0033281287d",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: false,
            name: "msToken",
            path: "/",

            secure: true,
            session: false,
            storeId: null,
            value: "R0kFUUvBidytStsMKFzRD12LB-CufcVrsPPZBf37MDpybPNgfBOEf1KKdnElPnU6LGUu2iiejFaedU6AMa60BXs8PFKBXfEIiYJUW6vaTNsH_3ZhK1MFeJ-S9sC-Fm7O",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "store-region",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "cn-sh",
        },
        {
            domain: "juejin.cn",
            hostOnly: true,
            httpOnly: false,
            name: "s_v_web_id",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "f1e01f8ca5357b7d01036fac57f9871318613069f90c3f8995",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "sid_tt",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "654fdab6961159b9ddc71d88dd74d480",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "ssid_ucp_v1",
            path: "/",

            secure: true,
            session: false,
            storeId: null,
            value: "1.0.0-KGMwOTEwOGQ2YWQzZjlmOTUzODdhZDI0YmQwN2E4MDhkMjA0MWUxM2EKFwjn9sDA_fWRBhDJucSgBhiwFDgCQO8HGgJsZiIgNjU0ZmRhYjY5NjExNTliOWRkYzcxZDg4ZGQ3NGQ0ODA",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "store-region-src",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "uid",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: false,
            name: "_tea_utm_cache_2018",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "{%22utm_source%22:%22gold_browser_extension%22}",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "sessionid",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "654fdab6961159b9ddc71d88dd74d480",
        },
        {
            domain: "juejin.cn",
            hostOnly: true,
            httpOnly: false,
            name: "_jj_ext",
            path: "/",
            secure: true,
            session: false,
            storeId: null,
            value: "1",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: false,
            name: "_tea_utm_cache_2608",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "{%22utm_source%22:%22gold_browser_extension%22}",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "n_mh",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "EFg1_mBHQbgSgSf99DQS8qIA7qY3jFf9OAFGOWaDQQk",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "sessionid_ss",
            path: "/",

            secure: true,
            session: false,
            storeId: null,
            value: "654fdab6961159b9ddc71d88dd74d480",
        },
        {
            domain: ".juejin.cn",
            hostOnly: false,
            httpOnly: true,
            name: "sid_guard",
            path: "/",

            secure: false,
            session: false,
            storeId: null,
            value: "654fdab6961159b9ddc71d88dd74d480%7C1678843081%7C31536000%7CThu%2C+14-Mar-2024+01%3A18%3A01+GMT",
        },
        {
            domain: ".juejin.cn",

            hostOnly: false,
            httpOnly: true,
            name: "sid_ucp_v1",
            path: "/",

            secure: true,
            session: false,
            storeId: null,
            value: "1.0.0-KGMwOTEwOGQ2YWQzZjlmOTUzODdhZDI0YmQwN2E4MDhkMjA0MWUxM2EKFwjn9sDA_fWRBhDJucSgBhiwFDgCQO8HGgJsZiIgNjU0ZmRhYjY5NjExNTliOWRkYzcxZDg4ZGQ3NGQ0ODA",
        },
    ],
};
