import React from 'react';
// @ts-ignore
import bgDefault from './assets/bg.jpeg';
import DocumentTitle from '@uiw-admin/document-title';
import { Form, Row, Col, Button, Input, ButtonProps } from 'uiw';
import useSWR from 'swr';
import { request } from '@uiw-admin/utils';
import { Options } from '@uiw-admin/utils/lib/request';

import './styles/index.css';

export type FormValue = {
  username?: string;
  password?: string;
  swr_Rest_Time?: number | string;
};

export interface UserLoginProps {
  /** 卡片框的位置 */
  align?: 'left' | 'right' | 'center';
  classNameWarp?: string;
  styleWarp?: React.CSSProperties;
  /** 卡片的 className */
  classNameBody?: string;
  /** 卡片的 style */
  styleBody?: React.CSSProperties;
  /** 页脚 */
  footer?: React.ReactNode;
  /** 背景图片 */
  bg?: string;
  children?: React.ReactNode;
  /** 项目名称 */
  projectName?: string;
  /** 登录接口返回 */
  onSuccess?: (resp: any, form: FormValue | undefined) => void;
  /** 登录按钮 属性 */
  btnProps?: Omit<ButtonProps, 'ref'>;
  /** 请求接口 */
  api?: string;
  /** 调用接口之前 , 可以通过这个添加额外参数  返回 false 则不进行登录操作  */
  onBefore?: (store: FormValue) => Record<string, any> | boolean;
  /** request 请求 options 配置参数 */
  requestConfig?: Options;
  /** 登录按钮位置 按钮组, title 为显示标题 */
  buttons?: (Omit<ButtonProps, 'ref'> & { title?: React.ReactNode })[];
  /** 默认输入框保存字段 */
  saveField?: {
    /** 登录账号 */
    userName?: string;
    /** 密码 */
    passWord?: string;
  };
}

export default (props: UserLoginProps) => {
  const {
    align = 'center',
    classNameWarp = '',
    styleWarp = {},
    classNameBody = '',
    styleBody = {},
    footer,
    bg = bgDefault,
    children,
    projectName,
    onSuccess = () => null,
    btnProps = {},
    api,
    onBefore,
    requestConfig,
    buttons,
    saveField,
  } = props;
  const { userName = 'username', passWord = 'password' } = saveField || {};

  const [store, setStore] = React.useState<FormValue>();
  const { isValidating } = useSWR(
    store
      ? [api, { method: 'POST', body: store, ...(requestConfig || {}) }]
      : null,
    request,
    {
      revalidateOnFocus: false,
      onSuccess: (resp) => onSuccess(resp, store),
    },
  );

  return (
    <div className="uiw-loayout-login" style={{ background: `url(${bg})` }}>
      <DocumentTitle title={projectName || 'KKT'} />
      <div
        style={styleWarp}
        className={`uiw-loayout-login-warp ${classNameWarp} uiw-loayout-login-warp-${align}`}
      >
        <div
          className={`uiw-loayout-login-body ${classNameBody}`}
          style={styleBody}
        >
          {children ? (
            children
          ) : (
            <Form
              resetOnSubmit={false}
              onSubmit={({ current }) => {
                const errorObj: any = {};
                if (!current[userName]) errorObj[userName] = '账号不能为空！';
                if (!current[passWord]) errorObj[passWord] = '密码不能为空！';
                if (Object.keys(errorObj).length > 0) {
                  const err: any = new Error();
                  err.filed = errorObj;
                  throw err;
                } else {
                  if (typeof onBefore === 'function') {
                    const result = onBefore(current);
                    if (typeof result === 'object') {
                      setStore({
                        ...current,
                        ...(result || {}),
                        swr_Rest_Time: new Date().getTime(),
                      });
                      return;
                    }
                    if (!result) {
                      return;
                    }
                  }
                  setStore({ ...current, swr_Rest_Time: new Date().getTime() });
                }
              }}
              onSubmitError={(error: any) => {
                if (error.filed) {
                  return { ...error.filed };
                }
                return null;
              }}
              fields={{
                [userName]: {
                  label: '账号',
                  labelFor: 'username',
                  children: (
                    <Input
                      disabled={!!isValidating}
                      preIcon="user"
                      id="username"
                      placeholder="请输入账号"
                    />
                  ),
                },
                [passWord]: {
                  label: '密码',
                  labelFor: 'password',
                  children: (
                    <Input
                      disabled={!!isValidating}
                      preIcon="lock"
                      id="password"
                      type="password"
                      placeholder="请输入密码"
                    />
                  ),
                },
              }}
            >
              {({ fields, canSubmit }) => {
                return (
                  <div>
                    <Row>
                      <Col>{fields[userName]}</Col>
                    </Row>
                    <Row>
                      <Col>{fields[passWord]}</Col>
                    </Row>
                    <Row>
                      <Col className="btn">
                        {buttons ? (
                          buttons.map((item, idx) => {
                            const { title, ...rest } = item;
                            return (
                              <Button
                                key={idx}
                                loading={!!isValidating}
                                disabled={!canSubmit()}
                                {...rest}
                              >
                                {title}
                              </Button>
                            );
                          })
                        ) : (
                          <Button
                            loading={!!isValidating}
                            disabled={!canSubmit()}
                            block
                            type="dark"
                            {...btnProps}
                            htmlType="submit"
                          >
                            登录
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </div>
                );
              }}
            </Form>
          )}
        </div>
      </div>
      {footer}
    </div>
  );
};
