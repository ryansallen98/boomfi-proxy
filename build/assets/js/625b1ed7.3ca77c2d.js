"use strict";(self.webpackChunkboomfi_proxy=self.webpackChunkboomfi_proxy||[]).push([[1831],{8473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(4848),s=n(8453);const a={sidebar_position:2},o="Authentication",r={id:"authentication",title:"Authentication",description:'Uqualify\'s API employs an API Key security schema to authenticate all HTTP requests. These keys are unique alphanumeric tokens generated by Uqualify, serving as a digital "key" that grants authorized access to specific API endpoints. This ensures that only approved users or systems can request and retrieve data from the API.',source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/docs/authentication",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Response Patterns",permalink:"/docs/response-patterns"}},c={},u=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authentication",children:"Authentication"})}),"\n",(0,i.jsx)(t.p,{children:'Uqualify\'s API employs an API Key security schema to authenticate all HTTP requests. These keys are unique alphanumeric tokens generated by Uqualify, serving as a digital "key" that grants authorized access to specific API endpoints. This ensures that only approved users or systems can request and retrieve data from the API.'}),"\n",(0,i.jsx)(t.p,{children:"The API Key is a critical element in our business operations, providing a secure and efficient way to access and utilize data, services, or resources offered by our application programming interface (API). In Uqualify, we use the x-api-method to protect information. This means you must include the x-api-key on the headers of each request. The following provides an example of how this should be done:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:"curl --request GET \\\n     --url https://paylinks.uqualify.co.uk/api/v1/paylinks \\\n     --header 'accept: application/json' \\\n     --header 'x-api-key: <YOUR_API_KEY>'\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsx)(t.p,{children:"\ud83d\udea7 Keep your keys safe"}),(0,i.jsx)(t.p,{children:"It is important to avoid sharing your secret API keys in public places like Github or Bitbucket since it can allow malicious API calls."})]}),"\n",(0,i.jsx)(t.p,{children:"To get your api key please contact our support team and they will issue you a secure API Key."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);