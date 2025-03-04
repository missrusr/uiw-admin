import React, { useMemo } from 'react';
import { Button } from 'uiw';
import Skeleton from '../Skeleton';
import Table from './BaseTable';
import BaseForm from './BaseForm';
import { StoreCtx } from './hooks';
import { ProtableProps } from './types';

const ProTabel: React.FC<ProtableProps> = (props) => {
  const {
    table,
    columns,
    operateButtons = [],
    searchBtns,
    onBeforeSearch,
    paginationProps,
    ...tableProps
  } = props;
  const {
    key,
    onReset,
    onRefersh,
    updateStore,
    formatData,
    query,
    searchValues,
    loading,
    onSearch,
    SWRConfiguration,
    selection,
    pageIndex,
    form,
    updateForm,
    setPageIndex,
    mutate,
    requestOptions,
  } = table;
  const store = useMemo(
    () => ({
      data: [],
      onReset,
      onRefersh,
      key,
      updateStore,
      formatData,
      query,
      searchValues,
      onSearch,
      SWRConfiguration,
      selection,
      pageIndex,
      form,
      updateForm,
      setPageIndex,
      mutate,
      requestOptions,
    }),
    [JSON.stringify(table)],
  );
  return (
    <StoreCtx.Provider value={{ ...store }}>
      <Skeleton loading={loading}>
        {/* 表单查询区域 */}
        {searchBtns && searchBtns.length > 0 && (
          <BaseForm
            columns={columns}
            searchBtns={searchBtns}
            onBeforeSearch={onBeforeSearch}
          />
        )}

        {/* 操作区域 */}
        {operateButtons && operateButtons.length > 0 && (
          <div style={{ background: '#fff', padding: 10 }}>
            {operateButtons.map((btn: any, idx: number) =>
              btn?.render ? (
                <React.Fragment key={idx.toString()}>
                  {btn.render}
                </React.Fragment>
              ) : (
                <Button key={idx.toString()} {...btn}>
                  {btn.label}
                </Button>
              ),
            )}
          </div>
        )}
        {/* 列表组件 */}
        <Table
          columns={columns}
          {...tableProps}
          paginationProps={paginationProps}
        />
      </Skeleton>
    </StoreCtx.Provider>
  );
};

export default ProTabel;
