let esMX = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher portado a JavaScript usando WebUSB.",
  "dangerDanger"   :"Esto ha sido probado moderadamente. aunque no se han descubierto problemas, no soy responsable si pasa algo malo!",
  "warningWindows" :"Esto NO funciona en Windows debido a una limitación de la implementación de WebUSB en Chrome (y probablemente otras razones!)",
  "warningBrowser" :"Actualmente esto NO funciona en cualquier navegador a excepción de Chrome, porque los otros no implementan WebUSB.",
  "warningLinux"   :"En Linux, podrías obtener un error de 'Acceso Denegado' o 'Dispositivo No Compatible'! Si lo tienes, puedes intentar creando un archivo en <code>/etc/udev/rules.d/50-switch.rules</code> con el siguiente contenido:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>.",
  "warningTested"  :"Esto ha sido probado y parece que funciona en Linux, OSX, Android (sin root) y Chromebooks. La experiencia puede variar.",
  "labelInstructions" :"Instrucciones:",
  "liRCM"          :"Pon el Switch en RCM, y conéctalo a tu dispositivo.",
  "liSelect"       :"Selecciona entre los payloads de ejemplo, o sube uno.",
  "liPress"        :"Presiona 'Enviar Payload!'",
  "liAPX"          :"En la pantalla que aparece, selecciona 'APX' y presiona 'Conectar'.",
  "liLaunch"       :"Si todo va bien, el payload arrancará!",
  "h1SetupDelivery" :"Configurar Payload a Enviar",
  "h4SelectPayload" :"Seleccionar Payload:",
  "optionCTCaerHekate" :"Mod de Hekate de CTCaer v4.6",
  "optionFusee"     :"Payload de prueba de (Re)Switched (fusee)",
  "optionSXOS"      :"SX OS (Todas las Versiones)",
  "optionReiNX"     :"ReiNX 2.0",
  "optionUpload"    :"Subir Payload",
  "h3Log"           :"Registro:",
  "h4GetByteArray"  :"Obtener matriz de bytes del payload (sin exploit)",
  "goButton"        :"Enviar Payload!",
  "clearlogsbutton" :"Borrar registro",
  "disclaimer1" :'El código fuente puede ser encontrado en <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (o presionando ver código fuente, no hay backend!).',
  "disclaimer2" :'Portado de <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Gracias a <a href="https://github.com/ktemkin">ktemkin</a> y <a href="https://github.com/reswitched">ReSwitched</a>, tanto como a <br><a href="https://github.com/atlas44">Atlas44</a> y <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">su sitio web</a> como punto de partida para este.',
  "disclaimer4" :'Finalmente, gracias a <a href="https://github.com/ElijahZAwesome">ElijahZAwesome</a> por crear, mantener y tranferir este proyecto, <a href="https://github.com/falquinho">falquinho</a> por el nuevo diseño y la traducción en portugués, <a href="https://github.com/Filo97">Filo97</a> por la traducción en italiano, <a href="https://github.com/tumGER">tumGER</a> por la traducción en alemán, <a href="https://github.com/lordfriky">Lord_Friky</a> por la traducción en español y <a href="https://github.com/lorek123">Lorek</a> por la traducción en polaco.'
}
