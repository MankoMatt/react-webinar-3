import {memo, useState} from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import propTypes from "prop-types";
import useStore from "../../store/use-store";

function Paginator({maxPageCount, page}) {
  const cn = bem('Paginator');


  let store = useStore()


  const chengePage = (page) => {
    let pageCount = page * 10 - 10
    store.actions.paginator.chengePage(page, pageCount)
    store.actions.catalog.load(pageCount)
  }

  const activePage = page

  const apm2 = activePage - 2
  const apm3 = activePage - 3
  const apm1 = activePage - 1
  const app1 = activePage + 1
  const app3 = activePage + 3
  const app2 = activePage + 2

  return (
    <div className={cn()}>
      <div className={cn('buttons-contaner')}>
        {apm2 <= 0 ? null : <span className={cn('min-button')} onClick={() => chengePage(1)}>1</span>}
        {apm3 <= 0 ? null : <span>...</span>}
        {activePage === maxPageCount ? <span className={cn('near-button')} onClick={() => chengePage(apm2)}>{apm2}</span> : null}
        {apm1 <= 0 ? null : <span className={cn('near-button')} onClick={() => chengePage(apm1)}>{apm1}</span>}
        <span className={cn('activePage')}> {activePage} </span>
        {app1 >= maxPageCount ? null : <span  className={cn('near-button')} onClick={() => {chengePage(app1)}}>{app1} </span>}
        {activePage === 1 ? <span className={cn('near-button')} onClick={() => chengePage(app2)}>{app2}</span> : null}
        {app3 > maxPageCount ? null : <span>...</span>}
        {app1 > maxPageCount ? null :
          <span className={cn('max-button')} onClick={() => chengePage(maxPageCount)}>{maxPageCount}</span>}
      </div>
    </div>
  );
}

Paginator.propTypes = {
  maxPageCount: propTypes.number,
  page: propTypes.number
};

Paginator.defaultProps = {
  maxPageCount: 0,
  page: 1
};

export default memo(Paginator);
