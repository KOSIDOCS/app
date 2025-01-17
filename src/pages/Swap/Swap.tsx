import React from 'react';
import './Swap.css';
export const Swap: React.FC = ({
  selectToken,
  checkedCoin,
  checkCoinBottom,
}: any) => {
  return (
    <div className="Swap">
      <div className="section-swap">
        <div className="header">
          <h2>SWAP</h2>
          <img src="/images/iconfinder_icons_settings_1564529 1.png" alt="" />
        </div>

        <div className="change">
          <div className="top" onClick={() => selectToken('top')}>
            <div className="select">
              <span>ETH</span>
              <img
                src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                alt=""
              />
            </div>
            <div className="count">
              <div className="selectedCoin">
                <img src={`/images/${checkedCoin.image}`} alt="" />
              </div>
              0.0
            </div>
            <div
              className="convert"
              onClick={(event) => event.stopPropagation()}
            >
              <img src="/images/Vector.png" alt="" />
            </div>
          </div>

          <div className="bottom">
            <div className="select" onClick={() => selectToken('bottom')}>
              <span>Select a token</span>
              <img
                src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                alt=""
              />
            </div>
            <div className="count">
              <div className="selectedCoin">
                <img src={`/images/${checkCoinBottom.image}`} alt="" />
              </div>
              0.0
            </div>
          </div>

          <button className="connect-wallet">Connect wallet</button>
        </div>
      </div>
    </div>
  );
};
