import React from 'react';
import _ from 'lodash';
import {formatColor} from './tool';

const CellCorner = ({cornerName, color, lls, lrs}) => {
  return <div>
    <div
      className={'gm-cell-corner gm-cell-corner-' + cornerName}
      style={{borderRightColor: formatColor(color)}}
    />
    {
      cornerName === 'bl' && lls && <div
        className="gm-cell-corner-line gm-cell-corner-line-l"
        style={{borderTopColor: formatColor(color)}}
      />
    }
    {
      cornerName === 'br' && lrs && <div
        className="gm-cell-corner-line gm-cell-corner-line-r"
        style={{borderTopColor: formatColor(color)}}
      />
    }
  </div>;
}

export default ({baseCellsIndex, core, tl, tr, bl, br, lls, lrs, onClickCellCorner}) => {
  return <div className="gm-cell" title="点击可更改四角颜色" onClick={_.partial(onClickCellCorner, {baseCellsIndex, colors: {tl, tr, bl, br}})}>
    <CellCorner {...{cornerName: 'tl', color: tl, lls, lrs}}/>
    <CellCorner {...{cornerName: 'tr', color: tr, lls, lrs}}/>
    <CellCorner {...{cornerName: 'bl', color: bl, lls, lrs}}/>
    <CellCorner {...{cornerName: 'br', color: br, lls, lrs}}/>
    <div className="gm-cell-core"
         style={{background: 'url(' + core + ') no-repeat'}}
    />
  </div>;
}