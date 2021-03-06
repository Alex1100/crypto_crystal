require "./crypto_crystal/*"
require "http/client"
require "json"
require "uri"
require "kemal"

module CryptoCrystal
  get "/" do |env|
    render "public/index.ecr"
  end

  get "/prices.json" do |env|
    livecoin_res = JSON.parse((HTTP::Client.get("https://api.livecoin.net/exchange/ticker").body))
    cCex_res = JSON.parse((HTTP::Client.get("https://c-cex.com/t/prices.json").body))
    hitbtc_res = JSON.parse((HTTP::Client.get("https://api.hitbtc.com/api/1/public/ticker").body))

    hitbtc = {
      "BTCUSD":  hitbtc_res["BTCUSD"]["last"],
      "ETHUSD":  hitbtc_res["ETHUSD"]["last"],
      "ETHBTC":  hitbtc_res["ETHBTC"]["last"],
      "LTCUSD":  hitbtc_res["LTCUSD"]["last"],
      "LTCBTC":  hitbtc_res["LTCBTC"]["last"],
      "DASHUSD": hitbtc_res["DASHUSD"]["last"],
      "DASHBTC": hitbtc_res["DASHBTC"]["last"],
    }

    livecoin = {
      "BTCUSD":  livecoin_res.reject { |coin| coin["symbol"] != "BTC/USD" }[0]["last"],
      "ETHUSD":  livecoin_res.reject { |coin| coin["symbol"] != "ETH/USD" }[0]["last"],
      "ETHBTC":  livecoin_res.reject { |coin| coin["symbol"] != "ETH/BTC" }[0]["last"],
      "LTCUSD":  livecoin_res.reject { |coin| coin["symbol"] != "LTC/USD" }[0]["last"],
      "LTCBTC":  livecoin_res.reject { |coin| coin["symbol"] != "LTC/BTC" }[0]["last"],
      "DASHUSD": livecoin_res.reject { |coin| coin["symbol"] != "DASH/USD" }[0]["last"],
      "DASHBTC": livecoin_res.reject { |coin| coin["symbol"] != "DASH/BTC" }[0]["last"],
    }

    cCex = {
      "BTCUSD":  cCex_res["btc-usd"]["lastprice"],
      "ETHUSD":  cCex_res["eth-usd"]["lastprice"],
      "ETHBTC":  cCex_res["eth-btc"]["lastprice"],
      "LTCUSD":  cCex_res["ltc-usd"]["lastprice"],
      "LTCBTC":  cCex_res["ltc-btc"]["lastprice"],
      "DASHUSD": cCex_res["dash-usd"]["lastprice"],
      "DASHBTC": cCex_res["dash-btc"]["lastprice"],
    }

    prices = {livecoin: livecoin, cCex: cCex, hitbtc: hitbtc}.to_json
    env.response.content_type = "application/json"
    prices
  end

  Kemal.run
end
