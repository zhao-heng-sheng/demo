import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";
import svgr from "vite-plugin-svgr";
import viteImagemin from 'vite-plugin-imagemin';
const isProduction = process.env.NODE_ENV ==='production'
const CDN_URL = 'xxx'
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve("./src/variable.scss"));
export default defineConfig({
    // root:path.join(__dirname,'src'),

    plugins: [
        react(),
        windi(),
        svgr(),
        viteImagemin({
            // 无损压缩配置，无损压缩下图片质量不会变差
            optipng: {
                optimizationLevel: 7
            },
            mozjpeg: {
                quality: [0.8, 0.9],
            },
            // 有损压缩配置，有损压缩下图片质量可能会变差
            pngquant: {
                quality: [0.8, 0.9],
            },
            // svg 优化
            svgo: {
                plugins: [
                {
                  name: 'removeViewBox'
                },
                {
                  name: 'removeEmptyAttrs',
                  active: false
                }
              ]
            },
        })
    ],
    css: {
        modules: {
            // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
            // 其中，name 表示当前文件名，local 表示类名
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
        preprocessorOptions: {
            scss: {
                // additionalData 的内容会在每个 scss 文件的开头自动注入
                additionalData: `@import "${variablePath}";`,
            },
        },
        // 进行 PostCSS 配置
        postcss: {
            plugins: [
                autoprefixer({
                    // 指定目标浏览器
                    overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
                }),
            ],
        },
    },
    resolve:{
        alias:{
            '@assets':path.join(__dirname,'src/assets')
        }
    },
    optimizeDeps:{
        // 入口文件
        entries:['./*.html'],
        // 预加载的依赖
        include:['react','react-dom','react-router-dom','axios','@ant-design/icons'],
        // 排除的依赖
        exclude:['vue'],
        // 依赖的esbuild配置
        esbuildOptions:{
            
        }
    }
    // base:isProduction?CDN_URL:'/',
});
