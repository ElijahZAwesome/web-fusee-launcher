let zhTW = {
  "pageTitle"    : "任天堂 Switch Payload 網頁加載器",
  "pageSubtitle" : "Fusee Launcher利用WebUSB移植在JavaScript上",
  "dangerDanger"   :"這是實驗性的測試項目，目前雖然沒有發現任何問題，但如果有任何問題發生，我不負責!",
  "warningWindows" :"由於WebUSB在Chrome上功能受到限制(可能還有其他原因)，暫不支持Windows系統。",
  "warningBrowser" :"除了Chrome瀏覽器外，其余瀏覽器無法使用WebUSB",
  "warningLinux"   :"在Linux上，你可能會在Connect對話框中看到“Access Denied”或“No Compatible Device”的錯誤！如果條件允許，你可以嘗試在<code>/etc/udev/rules.d/50-switch.rules</code>創建壹個文件，添加內容如下:<code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"已測試可以在Linux、OSX、Android(無Root權限)和chromebook上使用，可能你的情況稍有不同",
  "labelInstructions" :"說明：",
  "liRCM"          :"Switch進入RCM模式並且設備已經連接完畢",
  "liSelect"       :"選擇壹個適合自己的Payload，或者你自己上傳壹個",
  "liPress"        :"點擊 '傳遞 Payload!'",
  "liAPX"          :"在出現的對話框裏，選擇“APX”並點擊“Connect”(Android系統可能會自動加載)",
  "liLaunch"       :"如果壹切順利，Payload將成功加載!",
  "h1SetupDelivery" :"部署 Payload",
  "h4SelectPayload" :"選擇 Payload:",
  "optionCTCaerHekate"  :"CTCaer's Hekate Mod v4.6",
  "optionFusee"     :"(Re)Switched test payload (fusee)",
  "optionSXOS"      :"SX OS",
  "optionReiNX"     :"ReiNX 2.0",
  "optionBriccmii"  :"Briccmii",
  "optionUpload"    :"上傳Payload",
  "h4GetByteArray"  :"獲取Payload byte array (無Sploit)",
  "goButton"        :"傳遞Payload!",
  "clearlogsbutton" :"清除日誌",
  "disclaimer1" :'Source can be found on <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (or by hitting view source, there is no backend!).',
  "disclaimer2" :'Ported from <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Thanks to <a href="https://github.com/ktemkin">ktemkin</a> and <a href="https://github.com/reswitched">ReSwitched</a>, as well as <a href="https://github.com/atlas44">Atlas44</a> and <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">his website</a> as a beginning point for this one.',
  "disclaimer4" :'Lastly, thanks to <a href="https://github.com/falquinho">falquinho</a> for the new bootstrap layout and portuguese translation, <a href="https://github.com/Filo97">Filo97</a> for the italian translation, <a href="https://github.com/tumGER">tumGER</a> for his german translation, and <a href="https://github.com/lordfriky">Lord_Friky</a> for the spanish translation.'
}
