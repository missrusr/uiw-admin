import React, { useEffect, useMemo, useRef } from 'react';
import {
  Button,
  Input,
  Form,
  Row,
  Col,
  Checkbox,
  Switch,
  Textarea,
  DateInput,
  TimePicker,
  MonthPicker,
  FormSubmitProps,
  SearchSelect,
} from 'uiw';
import Select from './widgets/Select';
import FormRadio from './widgets/Radio';
import { useStore } from './hooks';
import { BaseFormProps, Fields, FormProps } from './types';

const widgets = {
  input: Input,
  radio: FormRadio,
  checkbox: Checkbox,
  switch: Switch,
  select: Select,
  searchSelect: SearchSelect,
  textarea: Textarea,
  dateInput: DateInput,
  timePicker: TimePicker,
  monthPicker: MonthPicker,
};

const BaseForm: React.FC<BaseFormProps> = (props) => {
  const store = useStore();

  const formRef = useRef<any>();

  let { updateStore, updateForm } = store as any;

  const { columns, searchBtns, onBeforeSearch } = props;

  const getFields = (formProps: FormProps, title: any) => {
    const { widgetProps, key, widget, label, initialValue, ...otherProps } =
      formProps;

    // const name = key || colKey;
    const Widget = widgets[widget];
    return {
      label: label || title,
      children: <Widget {...widgetProps} />,
      ...otherProps,
      initialValue,
    };
  };

  // 获取表单配置
  const getFormFields = useMemo(() => {
    const fields: Fields = {};
    columns.forEach((col) => {
      if (col.props && Object.keys(col.props).length > 0) {
        if (Array.isArray(col.props)) {
          col.props.forEach((f) => {
            const name = f.key || col.key;
            fields[name] = getFields(f, col.title);
          });
        } else {
          const { key } = col.props;
          const name = key || col.key;
          fields[name] = getFields(col.props, col.title);
        }
      }
    });

    return fields;
  }, [JSON.stringify(columns)]);

  // 查询
  const onFormSearch = ({ initial, current }: FormSubmitProps) => {
    updateStore({
      searchValues: {
        ...initial,
        ...current,
      },
    });
    // onSearch();
  };
  useEffect(() => {
    // 存储表单组件实例
    if (formRef.current) {
      updateForm(formRef);
    }
  }, [formRef]);

  const itemsLength = Object.keys(getFormFields).length;
  const emptyLength = 4 - (itemsLength % 5);

  return (
    <Form
      style={{ background: '#fff', paddingBottom: 10, marginBottom: 14 }}
      resetOnSubmit={false}
      onSubmit={({ initial, current }) => {
        // 搜索前校验
        if (onBeforeSearch) {
          if (onBeforeSearch?.({ initial, current })) {
            onFormSearch({ initial, current });
          }
        } else {
          onFormSearch({ initial, current });
        }
      }}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      ref={formRef}
      fields={getFormFields}
    >
      {({ fields, state, canSubmit, resetForm }) => {
        return (
          <div>
            <Row gutter={12}>
              {Object.keys(fields).map((key) => (
                <Col key={key} fixed style={{ width: '20%' }}>
                  {fields[key]}
                </Col>
              ))}
              {Array(emptyLength)
                .fill('')
                .map((value, index) => (
                  <Col key={index.toString()} fixed style={{ width: '20%' }} />
                ))}
              <Col
                align="middle"
                style={{ textAlign: 'right', marginRight: 14 }}
              >
                {searchBtns &&
                  searchBtns.map((btn: any, idx) =>
                    btn?.render ? (
                      <React.Fragment key={idx.toString()}>
                        {btn.render}
                      </React.Fragment>
                    ) : (
                      <Button
                        key={idx.toString()}
                        style={{ marginRight: 5 }}
                        {...btn}
                      >
                        {btn.label}
                      </Button>
                    ),
                  )}
              </Col>
            </Row>
          </div>
        );
      }}
    </Form>
  );
};

export default BaseForm;
