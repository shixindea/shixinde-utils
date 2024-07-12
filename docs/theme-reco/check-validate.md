---
title: 校验规则
date: 2024-7-10
---
### mobileCheck 手机号校验

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### isNumber类型判断字符是不是纯数值

> export declare function isNumber(value: string): boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### isNullObject 判断字符是不是  空对象

> export declare function isNullObject(value: Object): boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 身份证校验

> export declare const idCardCheck: (value: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 邮箱校验

> export declare const emailCheck: (value: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是浏览器内核

> export declare const checkBrowser: () => string;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是大写字母

> export declare const checkCapitalLetter: (data: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是中文

> export declare const checkChinese: (data: string) => boolean

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是中文，数字或字母

> export declare const checkChineseNumberLettter: (data: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是终端类型,值有ios,android,iPad

> export declare const checkIosAndroidIpad: () => string;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是字母

> export declare const checkLetter: (data: any) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### checkLowercaseLetter 判断是否全部是小写字母

> export declare const checkLowercaseLetter: (data: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是数字

> export declare const checkNum: (data: any) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是字母或数字

> export declare const checkNumOrLetter: (data: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```

### 判断是否是正确的网址

> export declare const checkUrl: (url: string) => boolean;

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
mobileCheck("15512666996")  //返回布尔型 true
mobileCheck("369")  //返回布尔型 false
```
