"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[826],{31826:function(n,e,t){t.r(e),e.default='\u767b\u5f55\u9875\u9762\n---\n\n## Installation\n\n```bash\nnpm i @uiw-admin/user-login --save\n```\n\n## \u53c2\u6570\n\n```ts\n\ntype FormValue = { username?: string, password?: string }\n\nexport interface UserLoginProps {\n  /** \u5361\u7247\u6846\u7684\u4f4d\u7f6e */\n  align?: \'left\' | \'right\' | \'center\';\n  classNameWarp?: string;\n  styleWarp?: React.CSSProperties;\n  /** \u5361\u7247\u7684 className */\n  classNameBody?: string;\n  /** \u5361\u7247\u7684 style */\n  styleBody?: React.CSSProperties;\n  /** \u9875\u811a */\n  footer?: React.ReactNode;\n  /** \u80cc\u666f\u56fe\u7247 */\n  bg?: string;\n  /** \u5982\u679c\u5b58\u5728 children \u5219 \u8986\u76d6\u9ed8\u8ba4\u767b\u5f55\u6846\u91cc\u9762\u5185\u5bb9  */ \n  children?: React.ReactNode;\n  /** \u9879\u76ee\u540d\u79f0 */\n  projectName?: string;\n  /** \u767b\u5f55\u63a5\u53e3\u8fd4\u56de */\n  onSuccess?: (resp: any, form: FormValue | undefined) => void;\n  /** \u767b\u5f55\u6309\u94ae \u5c5e\u6027 */\n  btnProps?: Omit<ButtonProps, "ref">;\n  /** \u8bf7\u6c42\u63a5\u53e3 */\n  api?: string;\n  /** \u8c03\u7528\u63a5\u53e3\u4e4b\u524d , \u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6dfb\u52a0\u989d\u5916\u53c2\u6570  \u8fd4\u56de false \u5219\u4e0d\u8fdb\u884c\u767b\u5f55\u64cd\u4f5c  */\n  onBefore?: (store: FormValue) => { [s: string]: any } | boolean;\n  /** request \u8bf7\u6c42\u7684 options \u914d\u7f6e\u53c2\u6570 */\n  requestConfig?: Options;\n    /** \u767b\u5f55\u6309\u94ae\u4f4d\u7f6e \u6309\u94ae\u7ec4, title \u4e3a\u663e\u793a\u6807\u9898 */\n  buttons?: (Omit<ButtonProps, \'ref\'> & { title?: React.ReactNode })[]\n}\n```\n\n## \u6848\u4f8b\n\n```tsx\nimport React from \'react\';\nimport UserLogin from \'@uiw-admin/user-login\';\nimport { useNavigate, } from \'react-router-dom\';\nimport { Notify } from "uiw"\nconst UserLayout = () => {\n  const navigate = useNavigate()\n  return <UserLogin\n   buttons={[\n       {\n         title: "\u767b\u5f55",\n         htmlType: "submit",\n         type: \'primary\',\n         style: { width: "45%" }\n       },\n       {\n         title: "\u6ce8\u518c",\n         style: { width: "45%" }\n       },\n     ]}\n    api="/api/login"\n    onBefore={(value) => ({ a: 12, b: 1221 })}\n    btnProps={{ type: "primary" }}\n    onSuccess={(data) => {\n      if (data && data.token) {\n        sessionStorage.setItem("token", data.token)\n        sessionStorage.setItem("auth", JSON.stringify(data.authList || []))\n        navigate("/home", { replace: true })\n      } else {\n        Notify.error({ title: "\u9519\u8bef\u901a\u77e5", description: data.message || "\u8bf7\u6c42\u5931\u8d25" })\n      }\n    }}\n  />\n}\nexport default UserLayout;\n\n```\n\n## \u9ed8\u8ba4\u9884\u89c8\n\n![](https://user-images.githubusercontent.com/49544090/150922771-8a5fa5dc-8d82-4d3c-80ac-b61dcb5eb920.png)\n\n\n## \u81ea\u5b9a\u4e49\u6309\u94ae\u9884\u89c8\n\n![](https://user-images.githubusercontent.com/49544090/150929179-4854ca6c-25c8-4703-acee-9c7855821b8a.png)'}}]);
//# sourceMappingURL=826.d57658e4.chunk.js.map