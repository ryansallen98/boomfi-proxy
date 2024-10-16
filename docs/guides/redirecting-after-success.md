---
sidebar_position: 3
---

# Redirecting after a successful payment

You can customize any uQualify's pay link to automatically redirect your customers after they complete a payment. This is possible by incorporating a redirect URL as a query parameter in the original pay link URL. To perform this, follow the example below:

#### Original pay link URL

```
pay.boomfi.xyz/2bm4YuFSaw011jTWbevVPA3137q
```

#### Pay link URL with redirect

```
pay.boomfi.xyz/2bm4YuFSaw011jTWbevVPA3137q?redirect_to=<REDIRECT_URL>
```