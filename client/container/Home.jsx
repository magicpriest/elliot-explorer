import Component from '../core/Component';
import React from 'react';
import { Card, CardTitle, CardImg, CardText } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
            <div>
              <img className="img-fluid" src="/img/largelogo.svg" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-lg-5 offset-md-1 offset-lg-1">
            <Card body>
              <h2>Wallets and source code:</h2>
              <a
                href="https://github.com/elliotproject/elli/releases/latest"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/windows-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Windows 32/64
                </p>
              </a>
              <a
                href="https://github.com/elliotproject/elli/releases/latest"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/linux-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Linux
                </p>
              </a>
              <a
                href="https://github.com/elliotproject/elli/releases/latest"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/apple-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  MacOS (suitable for High Sierra)
                </p>
              </a>
              <a
                href="https://github.com/elliotproject/elli/releases/latest"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/code-solid.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Source code
                </p>
              </a>
              <a
                href="https://medium.com/@costernation/how-to-setup-an-elli-masternode-with-linux-vps-on-windows-f9645dd8bdf7"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/iconfinder_53-medium_843767.png"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Instruction for masternode autosetup
                </p>
              </a>
            </Card>
          </div>
          <div className="col-md-5 col-lg-5 ">
            <Card body>
              <h2>Exchanges:</h2>
              <a href="https://graviex.net/markets/ellibtc" target="_blank">
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/graviex.png"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Graviex
                </p>
              </a>
              <a
                href="https://wallet.crypto-bridge.org/market/BRIDGE.ELLI_BRIDGE.BTC"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/cb.png"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  CryptoBridge
                </p>
              </a>
              <p> ... and more coming soon!</p>
              <h2>Masternode Service</h2>
              <a
                href="https://www.apollon.network/supported-coins/"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/apollon.jpg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Apollon network
                </p>
              </a>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-lg-5 offset-md-1 offset-lg-1">
            <Card body>
              <h2>Informational Resources:</h2>
              <a
                href="https://coinmarketcap.com/currencies/elliot-coin/"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/coin-market-cap-logo.png"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Coinmarketcap
                </p>
              </a>
              <a
                href="https://masternodes.online/currencies/ELLI/"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/logo.png"
                    style={{ width: '40px', marginRight: '10px' }}
                  />
                  Masternodes.online
                </p>
              </a>
              <a
                href="https://www.coingecko.com/en/coins/elliotcoin?utm_content=elliotcoin&utm_medium=search_coin&utm_source=coingecko"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/coingecko.png"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Coingecko
                </p>
              </a>
              <a
                href="https://coinlib.io/coin/ELLI/Elliot+Coin"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/logo_full_dark.png"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Coinlib
                </p>
              </a>
            </Card>
          </div>
          <div className="col-md-5 col-lg-5 ">
            <Card body>
              <h2>Social:</h2>
              <a
                href="https://bitcointalk.org/index.php?topic=3229671"
                target="_blank"
              >
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/bitcoin-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />{' '}
                  Bitcointalk topic
                </p>
              </a>
              <a href="https://discord.gg/bgq8VcE" target="_blank">
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/discord-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />{' '}
                  Discord channel
                </p>
              </a>
              <a href="https://t.me/ElliotCoin" target="_blank">
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/telegram-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />{' '}
                  Telegram channel
                </p>
              </a>
              <a href="https://twitter.com/CoinElliot" target="_blank">
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/twitter-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />{' '}
                  Twitter
                </p>
              </a>
              <a href="https://www.reddit.com/r/ElliotCoin/" target="_blank">
                <p>
                  <img
                    className="img-fluid"
                    src="/img/home/reddit-brands.svg"
                    style={{ width: '20px', marginRight: '10px' }}
                  />{' '}
                  Reddit page
                </p>
              </a>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
