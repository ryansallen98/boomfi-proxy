"use strict";(self.webpackChunkboomfi_proxy=self.webpackChunkboomfi_proxy||[]).push([[5641],{5015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=r(4848),s=r(8453),i=r(1470),d=r(9365);const a={sidebar_position:1},l="List Paylinks",c={id:"paylinks/list-paylinks",title:"List Paylinks",description:"The List Paylinks endpoint allows you to retrieve a comprehensive list of all pay links created within your organization on the Uqualify platform. Use this endpoint to efficiently manage and review all the payment links you have generated, ensuring they align with your business needs.",source:"@site/docs/paylinks/list-paylinks.mdx",sourceDirName:"paylinks",slug:"/paylinks/list-paylinks",permalink:"/docs/paylinks/list-paylinks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Paylinks",permalink:"/docs/category/paylinks"},next:{title:"Create Payment Link",permalink:"/docs/paylinks/create-payment-link"}},o={},h=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example Request",id:"example-request",level:2},{value:"Responses",id:"responses",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"list-paylinks",children:"List Paylinks"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"GET https://paylinks.uqualify.co.uk/api/v1/paylinks\n"})}),"\n",(0,n.jsx)(t.p,{children:"The List Paylinks endpoint allows you to retrieve a comprehensive list of all pay links created within your organization on the Uqualify platform. Use this endpoint to efficiently manage and review all the payment links you have generated, ensuring they align with your business needs."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Paylinks are created automatically when a plan is created. Each plan has a corresponding paylink that can be used to facilitate payments."})}),"\n",(0,n.jsx)(t.h2,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"after"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Return paylinks after this cursor for pagination."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"before"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Return paylinks before this cursor for pagination."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The maximum number of paylinks to return per page (1-100)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"page"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The page number of the results to return (\u2265 1)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"since"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Return paylinks created or updated since this timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Sort order for the results."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"until"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Return paylinks created or updated until this timestamp."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example-request",children:"Example Request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl --request GET \\\n     --url https://paylinks.uqualify.co.uk/api/v1/paylinks \\\n     --header 'X-API-KEY: API-KEY \\\n     --header 'accept: application/json'\n"})}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(d.A,{value:"200",label:"200",default:!0,children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"The data object containing the paylinks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"An array of paylink objects."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The unique identifier for the paylink."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.plan_id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The ID of the associated plan."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.invoice_id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The ID of the associated invoice."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.source"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The source of the paylink."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.customer_ident_collection"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates if customer identification collection is enabled."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.shipping_address_collection"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates if shipping address collection is enabled."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.tax_ident_collection"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates if tax identification collection is enabled."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.enabled"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates if the paylink is enabled."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.deleted_at"}),(0,n.jsx)(t.td,{children:"date-time"}),(0,n.jsx)(t.td,{children:"The timestamp when the paylink was deleted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.created_by"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The ID of the user who created the paylink."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.updated_by"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The ID of the user who last updated the paylink."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.created_at"}),(0,n.jsx)(t.td,{children:"date-time"}),(0,n.jsx)(t.td,{children:"The timestamp when the paylink was created."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.updated_at"}),(0,n.jsx)(t.td,{children:"date-time"}),(0,n.jsx)(t.td,{children:"The timestamp when the paylink was last updated."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.metadata"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"Additional metadata associated with the paylink."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.metadata.properties"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"Additional properties associated with the paylink."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.items.plan"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"The details of the associated plan."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.last_update"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The timestamp indicating when the data was last updated."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.next"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The index of the next page of paylinks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data.total"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The total number of paylinks available."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Indicates if there was an error."})]})]})]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "items": [\n      {\n        "id": "2Z4zsnmp37AF3WKM6N2j4wmeakr",\n        "plan_id": "2Z4zspFMhs2pMYjcR3l6JpJaWdA",\n        "invoice_id": "",\n        "source": "BoomFi",\n        "customer_ident_collection": false,\n        "shipping_address_collection": false,\n        "tax_ident_collection": false,\n        "enabled": true,\n        "deleted_at": "2023-12-04T13:25:48.499Z",\n        "created_by": "2TzGhPCAfFWLPBjtc6h52Aao2S6",\n        "updated_by": "",\n        "created_at": "2023-12-04T13:25:48.496Z",\n        "updated_at": "2023-12-04T13:25:48.499Z",\n        "metadata": {},\n        "properties": {\n          "short_code": "AANj9Dm7Zl"\n        },\n        "plan": {\n          "id": "2Z4zspFMhs2pMYjcR3l6JpJaWdA",\n          "org_id": "2Tpmnmh6GHJXumKN1oBy2u56Ima",\n          "source": "Lago",\n          "name": "test paylink 12 04",\n          "type": "OneTime",\n          "billing_scheme": "FlatFee",\n          "price": "1",\n          "currency": "USD",\n          "available_quantity": 0,\n          "trial_period": "",\n          "recurring_interval": "Unknown",\n          "recurring_interval_count": 1,\n          "recurring_usage_type": "Unknown",\n          "reference": "",\n          "enabled": true,\n          "v1": "eyJwbGFucyI6IHsiaWQiOiAiYWE1ZmI5MjQtMmMzZi00NzcwLTkyZDEtMjFjYmY3ODc3ODc2IiwgIm5hbWUiOiAidGVzdCBwYXlsaW5rIDEyIDA0IiwgInN0YXR1cyI6ICJhY3RpdmUiLCAiaW50ZXJ2YWwiOiBudWxsLCAicmVmZXJlbmNlIjogIiIsICJhbW91bnRfd2VpIjogIjEwMCIsICJjcmVhdGVkX2F0IjogIjIwMjMtMTI...",\n          "created_by": "2TzGhPCAfFWLPBjtc6h52Aao2S6",\n          "created_at": "2023-12-04T13:25:47.656Z",\n          "updated_at": "2023-12-04T13:25:48.491Z",\n          "deleted_at": null,\n          "metadata": {}\n        }\n      }\n    ],\n    "last_update": "2021-01-01T00:00:00Z",\n    "next": 10,\n    "total": 10\n  },\n  "error": true\n}\n'})})]}),(0,n.jsxs)(d.A,{value:"400",label:"400",children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"The error returned by the server."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.code"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The error code returned by the server."}),(0,n.jsx)(t.td,{children:"400"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.errors"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"A list of detailed error objects."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.error.domain"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The domain associated with the error."}),(0,n.jsx)(t.td,{children:"orders"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.error.reason"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The reason for the error."}),(0,n.jsx)(t.td,{children:"InsufficientQuantity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.message"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A descriptive message explaining the error."}),(0,n.jsx)(t.td,{children:"Insufficient quantity"})]})]})]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "error": {\n    "code": 400,\n    "errors": [\n      {\n        "domain": "orders",\n        "reason": "InsufficientQuantity"\n      }\n    ],\n    "message": "Insufficient quantity"\n  }\n}\n'})})]}),(0,n.jsxs)(d.A,{value:"500",label:"500",children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"The error returned by the server."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.code"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The error code returned by the server."}),(0,n.jsx)(t.td,{children:"500"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.errors"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"A list of detailed error objects."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.errors.domain"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The domain associated with the error."}),(0,n.jsx)(t.td,{children:"orders"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.errors.reason"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The reason for the error."}),(0,n.jsx)(t.td,{children:"Internal"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error.message"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A descriptive message explaining the error."}),(0,n.jsx)(t.td,{children:"Internal server error"})]})]})]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "error": {\n    "code": 500,\n    "errors": [\n      {\n        "domain": "orders",\n        "reason": "Internal"\n      }\n    ],\n    "message": "Internal server error"\n  }\n}\n'})})]})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>d});r(6540);var n=r(4164);const s={tabItem:"tabItem_Ymn6"};var i=r(4848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(6540),s=r(4164),i=r(3104),d=r(6347),a=r(205),l=r(7485),c=r(1682),o=r(679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[d,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=x({queryString:r,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=c??p;return j({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=l.indexOf(t),s=a[r].value;s!==n&&(c(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:i}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=d.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(6540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);