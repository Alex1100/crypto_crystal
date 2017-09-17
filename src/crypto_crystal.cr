require "./crypto_crystal/*"
require "http/client"
require "json"
require "kemal"

module CryptoCrystal
  get "/" do |env|
    render "public/index.ecr"
  end

  get "/prices.json" do |env|
    livecoin_res = JSON.parse((HTTP::Client.get("https://api.livecoin.net/exchange/ticker").body))
    cCex_res = JSON.parse((HTTP::Client.get("https://c-cex.com/t/prices.json").body))

    livecoin = {
      "BTCUSD":  livecoin_res[2],
      "ETHUSD":  livecoin_res[23],
      "ETHBTC":  livecoin_res[24],
      "LTCUSD":  livecoin_res[6],
      "LTCBTC":  livecoin_res[7],
      "DASHUSD": livecoin_res[18],
      "DASHBTC": livecoin_res[19],
    }

    cCex = {
      "BTCUSD":  cCex_res["btc-usd"],
      "ETHUSD":  cCex_res["eth-usd"],
      "ETHBTC":  cCex_res["eth-btc"],
      "LTCUSD":  cCex_res["ltc-usd"],
      "LTCBTC":  cCex_res["ltc-btc"],
      "DASHUSD": cCex_res["dash-usd"],
      "DASHBTC": cCex_res["dash-btc"],
    }

    prices = {livecoin: livecoin, cCex: cCex}.to_json
    env.response.content_type = "application/json"
    prices
  end

  Kemal.run
end
