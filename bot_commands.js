{
    "backtesting":"Backtesting is not a guarantee of future performance. Use it to test out strats before going dry (see `**dry`). You may need to download historical candle data (see `**data`). You will likely need a powerful PC to perform backtesting depending on stategy complexity.",

    "backticks":"Please use three backticks around your code snippets to format them in fixed width font. They are impossible to read, especially indentation, and will be deleted. Check the discord markdown documentation for formatting guides: https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-",
    
    "basics":"Please familiarise yourself with fundamental tradescope terminology and bot execution logic: https://www.tradescope.khulnasoft.com/en/stable/bot-basics/",

    "best":"There is no best",

    "callbacks":"You can use various callback functions in your strategy to perform behaviour outside the `populate_` functions: https://www.tradescope.khulnasoft.com/en/stable/strategy-callbacks/",

    "config":"Your configuration can have a big effect on how your strategy works. Please read the docs on config options: https://www.tradescope.khulnasoft.com/en/stable/configuration/. Post your config as a code block (see `**backticks`), minus any exchange keys, to get more assistance",
    
    "crosspost":"Posting the same question in more than one channel is like going into someone's house and shouting in every room asking where the oven is, when the oven is clearly in the kitchen. Stop it. Pick the most suitable channel for your question. Repeat offenders will be kicked.",

    "data":"You may need historical data to run a backtest or even a strategy itself in dry or live. Read the docs here: https://www.tradescope.khulnasoft.com/en/stable/data-download/",

    "defi": "Tradescope uses CCXT to talk to exchanges, and most DeFi exchanges are not supported by CCXT. Therefore they are not currently supported by Tradescope. If it is important to you, you could go to CCXT and make your support known!",

    "dataframe":"Tradescope uses a pandas dataframe as the main data source, indexed by candle start date of the strategy main timeframe. It contains only complete closed candles. There is no such thing as an open or unfinished candle in the dataframe - only open rate and current rate exist in callbacks for open trades.",
    
    "docker":"Docker packages up all FT dependencies suitable for most strategies so makes it easier to install for first-timers, or people wanting scalable deployments. Head to #docker-support and check the docs: https://www.tradescope.khulnasoft.com/en/stable/docker_quickstart/",

    "docs":"Please make sure to familiarize yourself with the documentation, which can be found here: https://www.tradescope.khulnasoft.com/",

    "dry":"It's recommended to run a strategy in dry mode before going live to make sure performance matches what you expect from backtests. Most people recommend running a strategy dry for at least a month, preferably longer.",

    "dust":"Leftover small amounts of a traded coin after taking into account minimal trading amount and fees when you sell. It's completely normal and can be avoided on some exchanges, e.g. having some BNB in your wallet on Binance which will be used to offset the difference.",
    
    "examples":"There are lots of example strategies in the #strategy-collection or in the main tradescope-strategies repo: https://github.com/khulnasoft-lab/tradescope-strategies",

    "exchange":"Tradescope uses CCXT to talk to exchanges, and each exchange needs a specific implementation within Tradescope so takes time and effort to be supported. Currently supported exchanges are on the front page of the docs: https://www.tradescope.khulnasoft.com/en/stable/#supported-exchange-marketplaces",

    "FAQ":"Please read the FAQ, which explains this topic: https://www.tradescope.khulnasoft.com/en/stable/faq/#tradescope-common-issues",

    "finta":"A TA library written in python: https://pypi.org/project/finta/",
    
    "tradeai":"TradeAI Docs: https://www.tradescope.khulnasoft.com/en/latest/tradeai/",

    "futures":"Yes, tradescope supports shorting and futures with leverage but **isolated only**: see https://www.tradescope.khulnasoft.com/en/stable/leverage/. Note that pairs are named differently to spot: https://www.tradescope.khulnasoft.com/en/stable/leverage/#pair-namings",
    
    "gh":"Tradescope source code repositories: https://github.com/khulnasoft",

    "gpt":" Do not use generative AI as a replacement for reading the docs. Yes we know AI can make strategy code, but so can going to https://github.com/khulnasoft-lab/tradescope-strategies, and those strategies are designed for learning.",
    
    "howtoask":"Please provide more information about your problem. Include the full logs including errors, config(s) and strategy code to recreate the problem, any launch commands, and the link to the doc that you are following for help. Without this information, we are unable to efficiently help you.",

    "hyperopt":"Hyperopting tries to find parameters that can improve your strategy by reducing drawdown, increasing average profit per trade, improving Sharpe and Sortino values, etc. It is not a magic bullet to immediately make your strategy better, and be careful to hyperopt a timerange that is NOT the same timerange that you're testing - you'll overfit. See: https://www.tradescope.khulnasoft.com/en/stable/hyperopt/",

    "informative":"Informative pairs give you access to information from other/specific pairs and can be used on the same or larger timeframes than your current strategy, e.g. 5m strategy, 1h informatives: https://www.tradescope.khulnasoft.com/en/stable/strategy-customization/#informative-pairs",

    "issue":"Please use GitHub to raise your issue to the developers, paying close attention to the information you need to provide to avoid your issue being automatically closed: https://github.com/khulnasoft/tradescope/issues",  

    "lambo":"A day job might be a better bet",
    
    "lookahead":"Backtesting processes all candles over your timerange at once, not row by row. So certain indicators or ways you access information in your strategy can introduce lookahead, i.e. using information from candles in the future. The most common things to avoid are using `.shift()` with negative values, and `iat[-1]` or `iloc` in `populate_` functions. See `**traps`, https://www.tradescope.khulnasoft.com/en/stable/strategy-customization/#common-mistakes-when-developing-strategies, and https://www.tradescope.khulnasoft.com/en/stable/strategy-advanced/#dataframe-access",
    
    "netbird":"https://netbird.io/, an alternative low-config VPN service to avoid exposing khulnasoft-lab/tradeUI instances to the public internet. See also `**tailscale`",
    
    "NFI":"We do not advise the use of NFI for live trading. The author overstates profits, is dishonest about loss potential and risk, backtests are gamed, and users should do their full due diligence if considering using NFI-based strategies.",

    "nobuys":"Your bot might not make trades immediately. Check that your stake_amount is high enough (over $20), your wallet size is enough to cover your number of slots (open_trade_slots * stake_amount), your tradeable_balance_ratio is not 1, and that there are no errors in the logs. If everything looks OK, just be patient!",

    "support":"In an effort to improve server organization, we kindly request for you to move your support question to #support.",
    
    "notworking": "'Doesn't work', 'not working', etc are useless. We aren't mind readers and we don't have access to your computer. Please tell us what you've tried and what's happening, otherwise we simply cannot help you.",
    
    "orders":"The order type and orderbook determine how and at what prices your strategy will buy and sell. It can make big differences to how your strategy behaves, so it's good to understand what each of them do. https://www.tradescope.khulnasoft.com/en/stable/configuration/#prices-used-for-orders",

    "pairlists":"Pairlists are a core part of how your strategy will perform. There are 2 core pairlist handlers, static and volume-based: https://www.tradescope.khulnasoft.com/en/stable/plugins/#pairlists-and-pairlist-handlers. Note that VolumePairList does not support backtesting mode. Look at the test-pairlist command for how to generate static lists from volume-based and other plugins.",

    "pandas_ta":"A TA library written in python: https://twopirllc.github.io/pandas-ta/",
    
    "rr":"Risk reward (RR) lets you compare the expected returns versus the risk, e.g. 1:2 means an expected risk of 1 unit currency to 2 units return. An example custom_stoploss implementing RR can be found here: https://github.com/khulnasoft-lab/tradescope-strategies/blob/main/user_data/strategies/FixedRiskRewardLoss.py",

    "search": "I found information about that here: ",

    "series":"A dataframe column is multiple values, not a single one. You see this error because you are trying to use a Series as a single row value. A common mistake is using a boolean conditional instead of vectorised operations with `df.loc`, e.g. `if df['close'] > df['close'].shift()` when it should be `df.loc[df['close'] > df['close'].shift()]`.",

    "scams": "Crypto is rife with scams. For this reason, do not: buy or sell strategies, click on any strange links in discord messages or DMs, ask about paid freelance developers to help write your strategy, share links to paid membership telegram or discord servers, advertise jobs, or be generally scammy. Please report any scam messages or DMs you recieve to #spam-scam-reports",
    
    "shift":"The shift() function does not give you a single row value, but 'pushes' the dataframe values backwards into the past (with positive arguments) or 'pulls' values from the future (with negative arguments). Shifting through either end of the dataframe will result in NaNs. See `**traps` about using shift() incorrectly.",
    
    "shorting":"Shorting is not supported on spot, and supported on *isolated futures only*, i.e. cross margin is not yet available: https://www.tradescope.khulnasoft.com/en/stable/leverage/#shorting",

    "sponsor":"You can sponsor the maintainer of tradescope here: https://github.com/sponsors/khulnasoft",

    "stocks?":"No",

    "stonks?":"Nope",
    
    "ta":"Technical Analysis underpins the interpretation of financial market data, and there are many libraries that provide various indicators to assess the market. Examples include `**talib`, `**pandas_ta`, `**finta` and more.",
    
    "tailscale":"https://tailscale.com/ makes it easy to VPN your personal network of LAN and mobile devices, including tradescope/tradeUI running on a VPS. Free for up to 20 devices, and an alternative for SSH tunnels (see `**tunnel`).",

    "talib":"One of the main analysis libraries that can be used in strategies, originally written in C and wrapped into python: https://mrjbq7.github.io/ta-lib/",
    
    "telegram":"Detailed instructions for setting up the Telegram service for tradescope are here: https://www.tradescope.khulnasoft.com/en/stable/telegram-usage/",

    "tias": "'Try it and see'. Sometimes there's no substitute for simply doing the thing instead of asking about the thing.",
    
    "ticker":"Yes you can get ticker data in your strategy, but note that it varies by exchange and cannot be used in backtesting: https://www.tradescope.khulnasoft.com/en/stable/strategy-customization/#tickerpair",

    "tv":"TradingView often calculates indicators differently to other libraries such as TA-lib, and it allows you to do weird things like zero-lag adjustment and repainting, so it's unwise to compare Tradingview's indicators or strategies with its python equivalent. Don't use Tradingview to create or optimize your tradescope strategy.",
    
    "traps":"There are certain things you can do in a strategy that will make it perform differently in backtesting compared to dry/live. In most cases, the backtesting results will look way better so can lead to unpredictable losses. Check out https://brookmiles.github.io/tradescope-stuff/2021/04/12/backtesting-traps/ for hints about what to avoid.",

    "tunnel":"When running tradescope on a VPS or other machine open to the internet, it's recommended that instead of exposing TradeUI on 0.0.0.0, use 127.0.0.1 and set up a local port forwarding SSH tunnel. Details can be found here: https://linuxize.com/post/how-to-setup-ssh-tunneling/#local-port-forwarding",
    
    "vps":"You can rent a virtual server (VPS) to host your bot. There are many to choose from, and each have pros and cons. For simple bots, Oracle free tier or any 1vCPU provider should be sufficient, e.g. vultr, hetzner, contabo, AWS, GCP, etc. For more bot instances or more complex strategies, you will need more powerful instances otherwise you will see indicator calculation lag and will miss trade entries/exits. FT does not endorse any specific VPS provider",

    "yeet":"Do not backtest a strategy then go straight to live. Always use dry runs to confirm strategy performance. Backtests can be gamed, and are full of potential issues that will inflate profits. Please see `**traps` for examples.",
}