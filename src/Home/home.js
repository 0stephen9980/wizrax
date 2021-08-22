import React from "react";
import { Button, Container } from "react-bootstrap";
import "./home.css";

export default function home() {
  return (
    <Container>
      <div className="block1">
        <div className="imgDot">
          <img
            className="dottedLine"
            src="https://wazirx.com/static/media/art-line-device.b62af98e.png"
          />
        </div>
        <div className="body1">
          <div className="heading">
            <h1>
              WAZIRX IS INDIA'S MOST TRUSTED BITCOIN & CRYPTOCURRENCY EXCHANGE
            </h1>
          </div>
          <div className="heading">
            <p>
              Buy, Sell & Trade Bitcoin, Ethereum, Ripple, Litecoin and more
              cryptocurrencies in India. Start trading now!
            </p>
          </div>
          <Button variant="warning" size="lg">
            Sign Up
          </Button>
        </div>
        <div className="tradeImg">
          <img
            className="tradeImgAlignment"
            src="https://cdn1.poloniex.com/prod/assets/images/trade-your-way.png"
          />
        </div>
        <div>
          <img
            className="appStore"
            src="http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png"
          />
          <img
            className="appStore"
            src="http://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png"
          />
        </div>
      </div>
    </Container>
  );
}
