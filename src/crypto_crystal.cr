require "./crypto_crystal/*"
require "http/client"
require "json"
require "kemal"

module CryptoCrystal
  before_get "/" do |env|
    env.set "livecoin_BTCUSD", 0
    env.set "cCex_BTCUSD", 0
  end

  get "/" do |env|
    livecoin_BTCUSD = env.get "livecoin_BTCUSD"
    cCex_BTCUSD = env.get "cCex_BTCUSD"
    render "src/views/layout.ecr"
  end

  before_get "/prices" do |env|
    livecoin_res = JSON.parse((HTTP::Client.get("https://api.livecoin.net/exchange/ticker").body))[2]
    livecoin_BTCUSD = livecoin_res["last"]
    cCex_res = JSON.parse((HTTP::Client.get("https://c-cex.com/t/prices.json").body))
    cCex_BTCUSD = cCex_res["btc-usd"]["lastprice"]
    env.set "livecoin_BTCUSD", livecoin_BTCUSD.to_s
    env.set "cCex_BTCUSD", cCex_BTCUSD.to_s
  end

  get "/prices" do |env|
    livecoin_BTCUSD = env.get "livecoin_BTCUSD"
    cCex_BTCUSD = env.get "cCex_BTCUSD"
    render "src/views/layout.ecr"
  end

  # get "/prices.json" do |env|
  #   livecoin_res = JSON.parse((HTTP::Client.get("https://api.livecoin.net/exchange/ticker").body))[2]
  #   cCex_res = JSON.parse((HTTP::Client.get("https://c-cex.com/t/prices.json").body))
  #   cCex_BTCUSD = cCex_res["usd-btc"]
  #   req = [livecoin_res, cCex_BTCUSD]
  #   prices = {livecoin_BTCUSD: req[0], cCex_BTCUSD: req[1]}.to_json
  #   env.response.content_type = "application/json"
  #   prices
  # end

  Kemal.run
end
