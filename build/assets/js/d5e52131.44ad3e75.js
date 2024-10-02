"use strict";(self.webpackChunkboomfi_proxy=self.webpackChunkboomfi_proxy||[]).push([[459],{8749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var d=n(4848),r=n(8453);const s={sidebar_position:6},i="Webhooks",c={id:"webhooks",title:"Webhooks",description:"Webhooks are a way for our system to send real-time notifications to your application when certain events occur. By setting up webhooks, you can automate actions and keep your application in sync with our platform. For example, you can use webhooks to receive notifications when a payment is created or updated, allowing you to update your records or trigger other processes in response to these events.",source:"@site/docs/webhooks.mdx",sourceDirName:".",slug:"/webhooks",permalink:"/docs/webhooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get Payment by ID",permalink:"/docs/payments/get-payment-by-id"}},a={},l=[{value:"Payload Response",id:"payload-response",level:2},{value:"Payment Created Event",id:"payment-created-event",level:2},{value:"Example Payload",id:"example-payload",level:3},{value:"Payment Updated Event",id:"payment-updated-event",level:2},{value:"Example Payload",id:"example-payload-1",level:3}];function o(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"webhooks",children:"Webhooks"})}),"\n",(0,d.jsx)(t.p,{children:"Webhooks are a way for our system to send real-time notifications to your application when certain events occur. By setting up webhooks, you can automate actions and keep your application in sync with our platform. For example, you can use webhooks to receive notifications when a payment is created or updated, allowing you to update your records or trigger other processes in response to these events."}),"\n",(0,d.jsx)(t.admonition,{type:"info",children:(0,d.jsx)(t.p,{children:"To set your default webhook URL, please contact our support team with the endpoint you would like to receive the webhook events."})}),"\n",(0,d.jsx)(t.h2,{id:"payload-response",children:"Payload Response"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Unique identifier of the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"parent_id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the parent payment, if applicable."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"org_id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the organization associated with the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"amount"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Amount associated with the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"currency"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Currency of the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"invoice_id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the invoice associated with the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"source"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Source of the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"payment_method"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Payment method used."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer_id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the customer associated with the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"status"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Current status of the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"next_action"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Next action related to the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"scheduled_time"}),(0,d.jsx)(t.td,{children:"integer"}),(0,d.jsx)(t.td,{children:"Scheduled time for the payment."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"created_at"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Timestamp when the payment was created."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"updated_at"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Timestamp when the payment was last updated."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"amount_usd"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Amount in USD."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan_currency"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Currency of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan_price"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Price of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan"}),(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"Details of the associated plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan.id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan.name"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Name of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan.type"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Type of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan.price"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Price of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan.currency"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Currency of the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"plan.reference"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Reference for the plan."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"org"}),(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"Details of the organization."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"org.id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the organization."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"org.name"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Name of the organization."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer"}),(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"Details of the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.org_id"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"ID of the organization associated with the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.name"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Name of the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.email"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Email of the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.phone"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Phone number of the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.wallet_address"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Wallet address of the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.deleted_at"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Timestamp when the customer was deleted, if applicable."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.reference"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Reference for the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.metadata"}),(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"Additional metadata associated with the customer."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.created_at"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Timestamp when the customer was created."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"customer.updated_at"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Timestamp when the customer was last updated."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"event"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Type of the event."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"payment-created-event",children:"Payment Created Event"}),"\n",(0,d.jsx)(t.p,{children:"When a payment is created, a webhook event is triggered with the following payload:"}),"\n",(0,d.jsx)(t.h3,{id:"example-payload",children:"Example Payload"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-json",children:'{\n  "id": "pay_2msVFYlhbbHs5j0dZ2glpTHAeIO",\n  "parent_id": "",\n  "org_id": "2m1HtGFFlNWzSCgsK0IkEqfnYQx",\n  "amount": "5.31",\n  "currency": "USDT",\n  "invoice_id": "2msVFdhDAtseYSXbJpIDJ5Swajn",\n  "source": "BoomFi",\n  "payment_method": "ProxyWallet",\n  "customer_id": "2msVFcFPbaiMCQKDP8XpLVnXyuv",\n  "status": "Processing",\n  "next_action": "",\n  "scheduled_time": 0,\n  "created_at": "2024-10-02T10:32:47.684Z",\n  "updated_at": "2024-10-02T10:32:48.002043693Z",\n  "amount_usd": "5.308990560620399448",\n  "plan_currency": "USDT",\n  "plan_price": "5",\n  "plan": {\n    "id": "pln_2msV5KmB1PQ2yVfSwjw2pDSnmV2",\n    "name": "Test Payment 3",\n    "type": "OneTime",\n    "price": "5",\n    "currency": "USDT",\n    "reference": "payment-reference-03"\n  },\n  "org": {\n    "id": "org_2m1HtGFFlNWzSCgsK0IkEqfnYQx",\n    "name": "UQG Limited"\n  },\n  "customer": {\n    "id": "cus_2msVFcFPbaiMCQKDP8XpLVnXyuv",\n    "org_id": "2m1HtGFFlNWzSCgsK0IkEqfnYQx",\n    "name": "Adrian Lynch",\n    "email": "al+boomfo@uqualify.co",\n    "phone": "",\n    "wallet_address": "",\n    "deleted_at": null,\n    "reference": "",\n    "metadata": {},\n    "created_at": "2024-10-02T10:32:47.688Z",\n    "updated_at": "2024-10-02T10:32:47.688Z"\n  },\n  "event": "Payment.Created"\n}\n'})}),"\n",(0,d.jsx)(t.h2,{id:"payment-updated-event",children:"Payment Updated Event"}),"\n",(0,d.jsx)(t.p,{children:"When a payment is updated, a webhook event is triggered with the following payload:"}),"\n",(0,d.jsx)(t.h3,{id:"example-payload-1",children:"Example Payload"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-json",children:'{\n  "id": "pay_2msWZ4gvssEUjIbEweL3LKunJ8L",\n  "parent_id": "",\n  "org_id": "2m1HtGFFlNWzSCgsK0IkEqfnYQx",\n  "amount": "5.31",\n  "currency": "USDT",\n  "invoice_id": "2msWZ3nGLjxgWP1nkd0qsgKU6km",\n  "source": "BoomFi",\n  "payment_method": "ProxyWallet",\n  "customer_id": "2msWWaYvMlsqRCugZMxvraymU5V",\n  "status": "Succeeded",\n  "next_action": "",\n  "scheduled_time": 0,\n  "created_at": "2024-10-02T10:43:35.293Z",\n  "updated_at": "2024-10-02T10:49:04.098324068Z",\n  "amount_usd": "5.310581127205863654",\n  "plan_currency": "USDT",\n  "plan_price": "5",\n  "plan": {\n    "id": "pln_2msV5KmB1PQ2yVfSwjw2pDSnmV2",\n    "name": "Test Payment 3",\n    "type": "OneTime",\n    "price": "5",\n    "currency": "USDT",\n    "reference": "payment-reference-03"\n  },\n  "org": {\n    "id": "org_2m1HtGFFlNWzSCgsK0IkEqfnYQx",\n    "name": "UQG Limited"\n  },\n  "customer": {\n    "id": "cus_2msWWaYvMlsqRCugZMxvraymU5V",\n    "org_id": "2m1HtGFFlNWzSCgsK0IkEqfnYQx",\n    "name": "Daniel Rodwell",\n    "email": "dr@uqualify.co",\n    "phone": "",\n    "wallet_address": "TM6w3asAwtipDS6TcB8irboLZLBqm3gFG5",\n    "deleted_at": null,\n    "reference": "",\n    "metadata": {},\n    "created_at": "2024-10-02T10:43:16.759Z",\n    "updated_at": "2024-10-02T10:43:16.759Z"\n  },\n  "event": "Payment.Updated"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var d=n(6540);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);