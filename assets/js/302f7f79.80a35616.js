"use strict";(self.webpackChunkbh_docs=self.webpackChunkbh_docs||[]).push([[1375],{3168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(5893),o=n(1151);const i={},s="Perming Options",l={id:"kolbot/PermingOptions",title:"PermingOptions",description:"D2Bot Table of Contents",source:"@site/docs/kolbot/PermingOptions.md",sourceDirName:"kolbot",slug:"/kolbot/PermingOptions",permalink:"/kolbot/PermingOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/bhdocs/bhdocs.github.io/blob/master/docs/kolbot/PermingOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultiBotting",permalink:"/kolbot/MultiBotting"},next:{title:"TCP-IP games",permalink:"/kolbot/TCP-IP games"}},c={},a=[{value:"Perming with D2BotMuleLog",id:"perming-with-d2botmulelog",level:3},{value:"D2BotTimerRefresh",id:"d2bottimerrefresh",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://bhdocs.github.io/category/d2bot",children:"D2Bot Table of Contents"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://bhdocs.github.io/category/kolbot",children:"Kolbot Table of Contents"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"perming-options",children:"Perming Options"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#perming-with-d2botmulelog",children:"Perming with D2BotMuleLog"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#d2bottimerrefresh",children:"D2BotTimerRefresh"})}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"perming-with-d2botmulelog",children:"Perming with D2BotMuleLog"}),"\n",(0,r.jsxs)(t.p,{children:["For perming the chars with staying 2h in game, you should use the starter script ",(0,r.jsx)(t.a,{href:"D2BotMuleLog",children:"D2BotMuleLog"})," like for muling purpose."]}),"\n",(0,r.jsxs)(t.p,{children:["Edit ",(0,r.jsx)(t.code,{children:"kolbot/libs/systems/mulelogger/LoggerConfig.js"})," with required info and set the value:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"IngameTime: rand(7230, 7290),\n"})}),"\n",(0,r.jsx)(t.p,{children:"or"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"AutoPerm: true, // override InGameTime to perm character\n"})}),"\n",(0,r.jsx)(t.h3,{id:"d2bottimerrefresh",children:"D2BotTimerRefresh"}),"\n",(0,r.jsxs)(t.p,{children:["If you need only to refresh the countdown timer for your chars, a better choice can be ",(0,r.jsx)(t.a,{href:"https://raw.githubusercontent.com/blizzhackers/documentation/master/kolbot/custom-scripts/D2BotTimerRefresh.dbj",children:"D2BotTimerRefresh.dbj on github"})," saved as D2BotTimerRefresh.dbj in your ~\\d2bs\\kolbot\\ folder."]}),"\n",(0,r.jsx)(t.p,{children:"This will log on accounts/chars and will keep every char for random 15-25 seconds (line 185) in the lobby, without creating games."}),"\n",(0,r.jsx)(t.p,{children:"Edit the lines 27-29 with the required info"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'"account1/password/realm": ["all"],\n"account2/password/realm": ["all"],\n"account3/password/realm": ["all"]\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(7294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);