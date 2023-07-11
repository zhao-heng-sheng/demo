import{a as Y,r as P,t as he,b as F,h as r,o as be,e as fe,f as W,u as p,i as O,j as ge,k as ve,l as me,F as pe,m as we}from"./entry.160a6681.js";import{u as xe}from"./config.705116ea.js";import{c as ke,a as ye,b as E,d as t,i as I,e as j,f as c,g as X,u as Ce,h as q,j as Se,k as w,l as Be,m as D,r as x,N as Re,n as $e,o as K}from"./light.2bb3b985.js";import{u as _e,p as U,d as u}from"./use-merged-state.b46e6822.js";const Ve={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},ze=e=>{const{primaryColor:n,opacityDisabled:d,borderRadius:l,textColor3:i}=e,h="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Ve),{iconColor:i,textColor:"white",loadingColor:n,opacityDisabled:d,railColor:h,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:l,railBorderRadiusMedium:l,railBorderRadiusLarge:l,buttonBorderRadiusSmall:l,buttonBorderRadiusMedium:l,buttonBorderRadiusLarge:l,boxShadowFocus:`0 0 0 2px ${ye(n,{alpha:.2})}`})},Fe={name:"Switch",common:ke,self:ze},We=Fe,Me=E("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),E("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),j("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),X("disabled",[X("icon",[c("rubber-band",[c("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[j("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),c("active",[c("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[j("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),c("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),c("active",[t("rail","background-color: var(--n-rail-color-active);")]),c("loading",[t("rail",`
 cursor: wait;
 `)]),c("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ne=Object.assign(Object.assign({},q.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let R;const He=Y({name:"Switch",props:Ne,setup(e){R===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?R=CSS.supports("width","max(1px)"):R=!1:R=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:d}=Ce(e),l=q("Switch","-switch",Me,We,e,n),i=Se(e),{mergedSizeRef:h,mergedDisabledRef:s}=i,C=P(e.defaultValue),$=he(e,"value"),m=_e($,C),S=F(()=>m.value===e.checkedValue),k=P(!1),o=P(!1),b=F(()=>{const{railStyle:a}=e;if(a)return a({focused:o.value,checked:S.value})});function f(a){const{"onUpdate:value":_,onChange:V,onUpdateValue:z}=e,{nTriggerFormInput:M,nTriggerFormChange:N}=i;_&&K(_,a),z&&K(z,a),V&&K(V,a),C.value=a,M(),N()}function G(){const{nTriggerFormFocus:a}=i;a()}function J(){const{nTriggerFormBlur:a}=i;a()}function Q(){e.loading||s.value||(m.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue))}function Z(){o.value=!0,G()}function ee(){o.value=!1,J(),k.value=!1}function te(a){e.loading||s.value||a.key===" "&&(m.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue),k.value=!1)}function ae(a){e.loading||s.value||a.key===" "&&(a.preventDefault(),k.value=!0)}const A=F(()=>{const{value:a}=h,{self:{opacityDisabled:_,railColor:V,railColorActive:z,buttonBoxShadow:M,buttonColor:N,boxShadowFocus:ie,loadingColor:oe,textColor:ne,iconColor:re,[w("buttonHeight",a)]:g,[w("buttonWidth",a)]:le,[w("buttonWidthPressed",a)]:se,[w("railHeight",a)]:v,[w("railWidth",a)]:B,[w("railBorderRadius",a)]:de,[w("buttonBorderRadius",a)]:ce},common:{cubicBezierEaseInOut:ue}}=l.value;let H,L,T;return R?(H=`calc((${v} - ${g}) / 2)`,L=`max(${v}, ${g})`,T=`max(${B}, calc(${B} + ${g} - ${v}))`):(H=U((u(v)-u(g))/2),L=U(Math.max(u(v),u(g))),T=u(v)>u(g)?B:U(u(B)+u(g)-u(v))),{"--n-bezier":ue,"--n-button-border-radius":ce,"--n-button-box-shadow":M,"--n-button-color":N,"--n-button-width":le,"--n-button-width-pressed":se,"--n-button-height":g,"--n-height":L,"--n-offset":H,"--n-opacity-disabled":_,"--n-rail-border-radius":de,"--n-rail-color":V,"--n-rail-color-active":z,"--n-rail-height":v,"--n-rail-width":B,"--n-width":T,"--n-box-shadow-focus":ie,"--n-loading-color":oe,"--n-text-color":ne,"--n-icon-color":re}}),y=d?Be("switch",F(()=>h.value[0]),A,e):void 0;return{handleClick:Q,handleBlur:ee,handleFocus:Z,handleKeyup:te,handleKeydown:ae,mergedRailStyle:b,pressed:k,mergedClsPrefix:n,mergedValue:m,checked:S,mergedDisabled:s,cssVars:d?void 0:A,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:d,mergedRailStyle:l,onRender:i,$slots:h}=this;i==null||i();const{checked:s,unchecked:C,icon:$,"checked-icon":m,"unchecked-icon":S}=h,k=!(D($)&&D(m)&&D(S));return r("div",{role:"switch","aria-checked":d,class:[`${e}-switch`,this.themeClass,k&&`${e}-switch--icon`,d&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:l},x(s,o=>x(C,b=>o||b?r("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),o),r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),b)):null)),r("div",{class:`${e}-switch__button`},x($,o=>x(m,b=>x(S,f=>r(Re,null,{default:()=>this.loading?r($e,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||o)?r("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||o):!this.checked&&(f||o)?r("div",{class:`${e}-switch__button-icon`,key:f?"unchecked-icon":"icon"},f||o):null})))),x(s,o=>o&&r("div",{key:"checked",class:`${e}-switch__checked`},o)),x(C,o=>o&&r("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}}),De=Y({__name:"config",setup(e){const n=xe(),d=we();return console.log("Runtime config:",d),(l,i)=>{const h=He;return be(),fe(pe,null,[W("div",{class:me({dark:p(n).theme.dark})},[W("p",{class:"bg-blue-300 dark:bg-slate-600 dark:text-slate-200",onClick:i[0]||(i[0]=s=>p(n).title="hello")},"appConfig: "+O(p(n).title),1),W("label",null,[ge(" dark mode: "),ve(h,{id:"toggle",value:p(n).theme.dark,"onUpdate:value":i[1]||(i[1]=s=>p(n).theme.dark=s)},null,8,["value"])])],2),W("p",{class:"bg-blue-300 dark:bg-slate-600 dark:text-slate-200",onClick:i[2]||(i[2]=s=>p(n).title="hello")},"runtimeConfig.public.apiBase: "+O(p(d).public.apiBase),1)],64)}}});export{De as default};
