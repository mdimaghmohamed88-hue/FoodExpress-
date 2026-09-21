const driver = {
  name: "Mohamed",
  status: "online",
  deliveries: 12,
  earnings: 96.50,
  kilometers: 84.7
};

let orders = [
  {
    id: 1001,
    restaurant: "FoodExpress Restaurant",
    customer: "Ahmed",
    phone: "017612345678",
    address: "Arbachstraße 7, 72793 Pfullingen",
    items: "Pizza Salami x1, Kola x1",
    total: 12.00,
    status: "new"
  },
  {
    id: 1002,
    restaurant: "FoodExpress Restaurant",
    customer: "Maria",
    phone: "017698765432",
    address: "Tübinger Straße 20, 72127 Kusterdingen",
    items: "Döner Kebab x2, Fanta x2",
    total: 22.00,
    status: "new"
  },
  {
    id: 1003,
    restaurant: "FoodExpress Restaurant",
    customer: "Youssef",
    phone: "015112345678",
    address: "Bahnhofstraße 12, 72070 Tübingen",
    items: "Pizza Kebab x1",
    total: 11.50,
    status: "new"
  }
];

const translations = {
  de: {
    title: "FoodExpress Fahrer",
    dashboard: "Fahrer Dashboard",
    online: "Online",
    offline: "Nicht aktiv",
    deliveries: "Lieferungen",
    earnings: "Verdienst",
    kilometers: "Kilometer",
    quickActions: "Schnellaktionen",
    gps: "GPS-Standort",
    active: "GPS aktiv",
    inactive: "GPS nicht aktiv",
    orders: "Bestellungen",
    newOrder: "Neue Bestellung",
    accepted: "Angenommen",
    delivering: "Unterwegs",
    arrived: "Angekommen",
    done: "Erledigt",
    accept: "Bestellung annehmen",
    start: "Lieferung starten",
    arrivedBtn: "Angekommen",
    complete: "Lieferung abschließen",
    navigate: "Navigation",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    print: "Drucken",
    scanAddress: "Adresse mit Google Maps öffnen",
    driverName: "Fahrer",
    date: "Datum",
    time: "Uhrzeit",
    status: "Status",
    totalLabel: "Gesamt",
    settings: "Einstellungen",
    darkMode: "Dunkelmodus",
    language: "Sprache",
    noOrders: "Keine Bestellungen vorhanden.",
    gpsWaiting: "Warte auf GPS...",
    gpsError: "GPS konnte nicht aktiviert werden."
  },

  fr: {
    title: "FoodExpress Chauffeur",
    dashboard: "Tableau de bord",
    online: "En ligne",
    offline: "Inactif",
    deliveries: "Livraisons",
    earnings: "Revenus",
    kilometers: "Kilomètres",
    quickActions: "Actions rapides",
    gps: "Position GPS",
    active: "GPS actif",
    inactive: "GPS inactif",
    orders: "Commandes",
    newOrder: "Nouvelle commande",
    accepted: "Acceptée",
    delivering: "En livraison",
    arrived: "Arrivé",
    done: "Terminée",
    accept: "Accepter",
    start: "Commencer",
    arrivedBtn: "Arrivé",
    complete: "Terminer",
    navigate: "Navigation",
    call: "Appeler",
    whatsapp: "WhatsApp",
    print: "Imprimer",
    scanAddress: "Ouvrir l'adresse avec Google Maps",
    driverName: "Chauffeur",
    date: "Date",
    time: "Heure",
    status: "Statut",
    totalLabel: "Total",
    settings: "Paramètres",
    darkMode: "Mode sombre",
    language: "Langue",
    noOrders: "Aucune commande.",
    gpsWaiting: "Recherche GPS...",
    gpsError: "GPS impossible à activer."
  },

  en: {
    title: "FoodExpress Driver",
    dashboard: "Driver Dashboard",
    online: "Online",
    offline: "Inactive",
    deliveries: "Deliveries",
    earnings: "Earnings",
    kilometers: "Kilometers",
    quickActions: "Quick Actions",
    gps: "GPS Location",
    active: "GPS active",
    inactive: "GPS inactive",
    orders: "Orders",
    newOrder: "New Order",
    accepted: "Accepted",
    delivering: "Delivering",
    arrived: "Arrived",
    done: "Completed",
    accept: "Accept Order",
    start: "Start Delivery",
    arrivedBtn: "Arrived",
    complete: "Complete Delivery",
    navigate: "Navigation",
    call: "Call",
    whatsapp: "WhatsApp",
    print: "Print",
    scanAddress: "Open address with Google Maps",
    driverName: "Driver",
    date: "Date",
    time: "Time",
    status: "Status",
    totalLabel: "Total",
    settings: "Settings",
    darkMode: "Dark Mode",
    language: "Language",
    noOrders: "No orders available.",
    gpsWaiting: "Waiting for GPS...",
    gpsError: "GPS could not be activated."
  },

  tr: {
    title: "FoodExpress Sürücü",
    dashboard: "Sürücü Paneli",
    online: "Çevrimiçi",
    offline: "Pasif",
    deliveries: "Teslimatlar",
    earnings: "Kazanç",
    kilometers: "Kilometre",
    quickActions: "Hızlı İşlemler",
    gps: "GPS Konumu",
    active: "GPS aktif",
    inactive: "GPS pasif",
    orders: "Siparişler",
    newOrder: "Yeni Sipariş",
    accepted: "Kabul edildi",
    delivering: "Teslim ediliyor",
    arrived: "Varıldı",
    done: "Tamamlandı",
    accept: "Siparişi Kabul Et",
    start: "Teslimatı Başlat",
    arrivedBtn: "Vardım",
    complete: "Teslimatı Tamamla",
    navigate: "Navigasyon",
    call: "Ara",
    whatsapp: "WhatsApp",
    print: "Yazdır",
    scanAddress: "Adresi Google Maps ile aç",
    driverName: "Sürücü",
    date: "Tarih",
    time: "Saat",
    status: "Durum",
    totalLabel: "Toplam",
    settings: "Ayarlar",
    darkMode: "Karanlık Mod",
    language: "Dil",
    noOrders: "Sipariş yok.",
    gpsWaiting: "GPS bekleniyor...",
    gpsError: "GPS etkinleştirilemedi."
  },

  ar: {
    title: "FoodExpress السائق",
    dashboard: "لوحة السائق",
    online: "متصل",
    offline: "غير نشط",
    deliveries: "التوصيلات",
    earnings: "الأرباح",
    kilometers: "الكيلومترات",
    quickActions: "إجراءات سريعة",
    gps: "موقع GPS",
    active: "GPS نشط",
    inactive: "GPS غير نشط",
    orders: "الطلبات",
    newOrder: "طلب جديد",
    accepted: "تم القبول",
    delivering: "في الطريق",
    arrived: "وصل",
    done: "مكتمل",
    accept: "قبول الطلب",
    start: "بدء التوصيل",
    arrivedBtn: "وصلت",
    complete: "إنهاء التوصيل",
    navigate: "الملاحة",
    call: "اتصال",
    whatsapp: "واتساب",
    print: "طباعة",
    scanAddress: "فتح العنوان في Google Maps",
    driverName: "السائق",
    date: "التاريخ",
    time: "الوقت",
    status: "الحالة",
    totalLabel: "المجموع",
    settings: "الإعدادات",
    darkMode: "الوضع الداكن",
    language: "اللغة",
    noOrders: "لا توجد طلبات.",
    gpsWaiting: "في انتظار GPS...",
    gpsError: "تعذر تشغيل GPS."
  }
};

let language =
  localStorage.getItem("foodexpress_language") || "de";

let darkMode =
  localStorage.getItem("foodexpress_dark") === "true";

let gpsActive = false;
let currentPosition = null;
let map = null;
let marker = null;
let watchId = null;

function t(key) {
  return translations[language]?.[key] ||
         translations.de[key] ||
         key;
}

function euro(value) {
  return Number(value)
    .toFixed(2)
    .replace(".", ",") + " €";
}

function statusText(status) {
  const map = {
    new: "newOrder",
    accepted: "accepted",
    delivering: "delivering",
    arrived: "arrived",
    done: "done"
  };

  return t(map[status] || "newOrder");
}

function statusClass(status) {
  return {
    new: "status-new",
    accepted: "status-accepted",
    delivering: "status-delivering",
    arrived: "status-arrived",
    done: "status-done"
  }[status] || "status-new";
}

function saveData() {
  localStorage.setItem(
    "foodexpress_driver",
    JSON.stringify(driver)
  );

  localStorage.setItem(
    "foodexpress_orders",
    JSON.stringify(orders)
  );
}

function loadData() {
  try {
    const savedDriver =
      localStorage.getItem("foodexpress_driver");

    const savedOrders =
      localStorage.getItem("foodexpress_orders");

    if (savedDriver) {
      Object.assign(
        driver,
        JSON.parse(savedDriver)
      );
    }

    if (savedOrders) {
      orders = JSON.parse(savedOrders);
    }

  } catch (error) {
    console.log(
      "LocalStorage Fehler:",
      error
    );
  }
}

function showNotification(message) {
  const old =
    document.querySelector(".notification");

  if (old) old.remove();

  const notification =
    document.createElement("div");

  notification.className =
    "notification";

  notification.textContent =
    message;

  document.body.appendChild(
    notification
  );

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function changeLanguage(value) {
  language = value;

  localStorage.setItem(
    "foodexpress_language",
    language
  );

  render();

  if (map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
}

function toggleDarkMode() {
  darkMode = !darkMode;

  localStorage.setItem(
    "foodexpress_dark",
    darkMode
  );

  applyDarkMode();
}

function applyDarkMode() {
  document.body.classList.toggle(
    "dark",
    darkMode
  );
}

function toggleDriverStatus() {
  driver.status =
    driver.status === "online"
      ? "offline"
      : "online";

  saveData();
  render();

  showNotification(
    driver.status === "online"
      ? t("online")
      : t("offline")
  );
}

function acceptOrder(orderId) {
  const order =
    orders.find(item => item.id === orderId);

  if (!order) return;

  order.status = "accepted";

  saveData();
  render();

  showNotification(
    `#${order.id} - ${t("accepted")}`
  );
}

function startDelivery(orderId) {
  const order =
    orders.find(item => item.id === orderId);

  if (!order) return;

  order.status = "delivering";

  saveData();
  render();

  showNotification(
    `#${order.id} - ${t("delivering")}`
  );
}

function arrivedOrder(orderId) {
  const order =
    orders.find(item => item.id === orderId);

  if (!order) return;

  order.status = "arrived";

  saveData();
  render();

  showNotification(
    `#${order.id} - ${t("arrived")}`
  );
}

function completeOrder(orderId) {
  const order =
    orders.find(item => item.id === orderId);

  if (!order) return;

  order.status = "done";

  driver.deliveries += 1;
  driver.earnings += 4.50;

  saveData();
  render();

  showNotification(
    `#${order.id} - ${t("done")}`
  );
}

function openNavigation(address) {
  const url =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(address);

  window.open(url, "_blank");
}

function callCustomer(phone) {
  window.location.href =
    "tel:" + phone;
}

function openWhatsApp(phone) {
  let cleanPhone =
    phone.replace(/\D/g, "");

  if (cleanPhone.startsWith("0")) {
    cleanPhone =
      "49" + cleanPhone.substring(1);
  }

  const url =
    "https://wa.me/" + cleanPhone;

  window.open(url, "_blank");
}

function printOrder(orderId) {
  const order =
    orders.find(item => item.id === orderId);

  if (!order) return;

  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(order.address);

  const qrCodeUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(mapsUrl);

  const now = new Date();

  const date =
    now.toLocaleDateString("de-DE");

  const time =
    now.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit"
    });

  const printWindow =
    window.open(
      "",
      "_blank",
      "width=800,height=900"
    );

  if (!printWindow) {
    showNotification(
      "Popup wurde blockiert."
    );
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>

    <html lang="${language}">

    <head>

      <meta charset="UTF-8">

      <title>
        FoodExpress #${order.id}
      </title>

      <style>

        body {
          font-family: Arial, sans-serif;
          padding: 30px;
          color: #111827;
        }

        .header {
          border-bottom: 3px solid #16a34a;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }

        h1 {
          margin: 0 0 5px;
        }

        .row {
          margin: 10px 0;
        }

        .label {
          font-weight: bold;
        }

        .items {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 10px;
          margin-top: 20px;
        }

        .total {
          font-size: 22px;
          font-weight: bold;
          margin-top: 20px;
        }

        .qr-section {
          margin-top: 30px;
          text-align: center;
          border-top: 1px solid #ddd;
          padding-top: 25px;
        }

        .qr-section img {
          width: 250px;
          height: 250px;
          display: block;
          margin: 15px auto;
        }

        .qr-title {
          font-size: 18px;
          font-weight: bold;
        }

        .qr-address {
          font-size: 14px;
          margin-top: 10px;
        }

        @media print {
          body {
            padding: 10px;
          }
        }

      </style>

    </head>

    <body>

      <div class="header">

        <h1>
          🍕 FoodExpress Deutschland
        </h1>

        <div>
          Fahrer Dashboard
        </div>

      </div>

      <div class="row">
        <span class="label">
          Bestellung:
        </span>
        #${order.id}
      </div>

      <div class="row">
        <span class="label">
          ${t("driverName")}:
        </span>
        ${driver.name}
      </div>

      <div class="row">
        <span class="label">
          Restaurant:
        </span>
        ${order.restaurant}
      </div>

      <div class="row">
        <span class="label">
          Kunde:
        </span>
        ${order.customer}
      </div>

      <div class="row">
        <span class="label">
          Telefon:
        </span>
        ${order.phone}
      </div>

      <div class="row">
        <span class="label">
          Adresse:
        </span>
        ${order.address}
      </div>

      <div class="row">
        <span class="label">
          ${t("date")}:
        </span>
        ${date}
      </div>

      <div class="row">
        <span class="label">
          ${t("time")}:
        </span>
        ${time}
      </div>

      <div class="items">

        <strong>
          Bestellung
        </strong>

        <p>
          ${order.items}
        </p>

      </div>

      <div class="total">
        ${t("totalLabel")}: ${euro(order.total)}
      </div>

      <div class="qr-section">

        <div class="qr-title">
          📍 ${t("scanAddress")}
        </div>

        <img
          src="${qrCodeUrl}"
          alt="QR Code Google Maps"
        >

        <div class="qr-address">
          ${order.address}
        </div>

      </div>

    </body>

    </html>
  `);

  printWindow.document.close();

  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
  }, 700);
}

function startGPS() {

  if (!navigator.geolocation) {

    showNotification(
      t("gpsError")
    );

    return;
  }

  if (watchId !== null) {

    navigator.geolocation.clearWatch(
      watchId
    );
  }

  gpsActive = false;

  render();

  watchId =
    navigator.geolocation.watchPosition(

      position => {

        gpsActive = true;

        currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        };

        updateMap();
        renderGPSOnly();
      },

      error => {

        console.log(
          "GPS Fehler:",
          error.message
        );

        gpsActive = false;

        renderGPSOnly();

        showNotification(
          t("gpsError")
        );
      },

      {
        enableHighAccuracy: true,
        maximumAge: 5000,
        timeout: 15000
      }
    );
}

function stopGPS() {

  if (watchId !== null) {

    navigator.geolocation.clearWatch(
      watchId
    );

    watchId = null;
  }

  gpsActive = false;
  currentPosition = null;

  renderGPSOnly();
}

function renderGPSOnly() {

  const gpsStatus =
    document.getElementById(
      "gps-status"
    );

  const coordinates =
    document.getElementById(
      "coordinates"
    );

  if (!gpsStatus || !coordinates) {
    return;
  }

  if (
    gpsActive &&
    currentPosition
  ) {

    gpsStatus.textContent =
      t("active");

    gpsStatus.className =
      "gps-status gps-active";

    coordinates.innerHTML = `

      <div>

        <strong>
          Latitude
        </strong>

        <br>

        ${currentPosition.lat.toFixed(6)}

      </div>

      <div>

        <strong>
          Longitude
        </strong>

        <br>

        ${currentPosition.lng.toFixed(6)}

      </div>

      <div>

        <strong>
          Genauigkeit
        </strong>

        <br>

        ±${Math.round(
          currentPosition.accuracy
        )} m

      </div>

    `;

  } else {

    gpsStatus.textContent =
      t("inactive");

    gpsStatus.className =
      "gps-status gps-inactive";

    coordinates.innerHTML = `

      <div>
        ${t("gpsWaiting")}
      </div>

    `;
  }
}

function initializeMap() {

  if (
    typeof L === "undefined" ||
    !document.getElementById("map")
  ) {
    return;
  }

  if (map) {

    map.remove();

    map = null;
    marker = null;
  }

  const defaultCenter =
    [48.5227, 9.0555];

  map =
    L.map("map")
      .setView(
        defaultCenter,
        12
      );

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        "&copy; OpenStreetMap contributors",

      maxZoom: 19
    }
  ).addTo(map);

  updateMap();
}

function updateMap() {

  if (
    !map ||
    !currentPosition
  ) {
    return;
  }

  const position = [
    currentPosition.lat,
    currentPosition.lng
  ];

  if (!marker) {

    marker =
      L.marker(position)
        .addTo(map)
        .bindPopup(
          "🚗 FoodExpress Fahrer"
        );

  } else {

    marker.setLatLng(
      position
    );
  }

  map.setView(
    position,
    15
  );
}

function orderButtons(order) {

  let buttons = "";

  if (order.status === "new") {

    buttons += `

      <button
        class="button accept"
        onclick="acceptOrder(${order.id})"
      >
        ✅ ${t("accept")}
      </button>

    `;
  }

  if (order.status === "accepted") {

    buttons += `

      <button
        class="button start"
        onclick="startDelivery(${order.id})"
      >
        🚀 ${t("start")}
      </button>

    `;
  }

  if (order.status === "delivering") {

    buttons += `

      <button
        class="button arrived"
        onclick="arrivedOrder(${order.id})"
      >
        📍 ${t("arrivedBtn")}
      </button>

    `;
  }

  if (order.status === "arrived") {

    buttons += `

      <button
        class="button complete"
        onclick="completeOrder(${order.id})"
      >
        ✅ ${t("complete")}
      </button>

    `;
  }

  buttons += `

    <button
      class="button map-button"
      onclick='openNavigation(
        ${JSON.stringify(order.address)}
      )'
    >
      🗺️ ${t("navigate")}
    </button>

    <button
      class="button call-button"
      onclick='callCustomer(
        ${JSON.stringify(order.phone)}
      )'
    >
      📞 ${t("call")}
    </button>

    <button
      class="button whatsapp-button"
      onclick='openWhatsApp(
        ${JSON.stringify(order.phone)}
      )'
    >
      💬 ${t("whatsapp")}
    </button>

    <button
      class="button print-button"
      onclick="printOrder(${order.id})"
    >
      🖨️ ${t("print")}
    </button>

  `;

  return buttons;
}

function renderOrders() {

  const ordersContainer =
    document.getElementById(
      "orders"
    );

  if (!ordersContainer) {
    return;
  }

  if (!orders.length) {

    ordersContainer.innerHTML = `

      <div class="empty">
        ${t("noOrders")}
      </div>

    `;

    return;
  }

  ordersContainer.innerHTML =
    orders.map(order => {

      return `

        <div class="order-card">

          <div class="order-header">

            <div class="order-number">
              #${order.id}
            </div>

            <div
              class="status ${statusClass(
                order.status
              )}"
            >
              ${statusText(
                order.status
              )}
            </div>

          </div>

          <div class="info">

            <div class="info-row">

              <span class="info-icon">
                🏪
              </span>

              <span>
                ${order.restaurant}
              </span>

            </div>

            <div class="info-row">

              <span class="info-icon">
                👤
              </span>

              <span>
                ${order.customer}
              </span>

            </div>

            <div class="info-row">

              <span class="info-icon">
                📞
              </span>

              <span>
                ${order.phone}
              </span>

            </div>

            <div class="info-row">

              <span class="info-icon">
                📍
              </span>

              <span>
                ${order.address}
              </span>

            </div>

          </div>

          <div class="order-items">
            ${order.items}
          </div>

          <div class="order-total">

            ${t("totalLabel")}:
            ${euro(order.total)}

          </div>

          <div class="order-buttons">
            ${orderButtons(order)}
          </div>

        </div>

      `;

    }).join("");
}

function render() {

  document.documentElement.lang =
    language;

  document.documentElement.dir =
    language === "ar"
      ? "rtl"
      : "ltr";

  document.title =
    t("title") +
    " V15 Premium";

  const app =
    document.getElementById(
      "app"
    );

  if (!app) {
    return;
  }

  app.innerHTML = `

    <header class="header">

      <div class="header-content">

        <div class="logo">

          <div class="logo-badge">
            🍕
          </div>

          <span>
            FoodExpress
          </span>

        </div>

        <div class="header-actions">

          <select
            class="language-select"
            onchange="changeLanguage(
              this.value
            )"
          >

            <option
              value="de"
              ${
                language === "de"
                  ? "selected"
                  : ""
              }
            >
              🇩🇪 Deutsch
            </option>

            <option
              value="fr"
              ${
                language === "fr"
                  ? "selected"
                  : ""
              }
            >
              🇫🇷 Français
            </option>

            <option
              value="en"
              ${
                language === "en"
                  ? "selected"
                  : ""
              }
            >
              🇬🇧 English
            </option>

            <option
              value="tr"
              ${
                language === "tr"
                  ? "selected"
                  : ""
              }
            >
              🇹🇷 Türkçe
            </option>

            <option
              value="ar"
              ${
                language === "ar"
                  ? "selected"
                  : ""
              }
            >
              🇹🇳 العربية
            </option>

          </select>

          <button
            class="icon-button"
            onclick="toggleDarkMode()"
            title="${t("darkMode")}"
          >
            ${
              darkMode
                ? "☀️"
                : "🌙"
            }
          </button>

        </div>

      </div>

    </header>

    <section class="hero">

      <div class="hero-content">

        <h1>
          ${t("dashboard")}
        </h1>

        <p>
          FoodExpress Deutschland –
          V15 Premium
        </p>

      </div>

    </section>

    <main class="container">

      <section class="driver-profile">

        <div class="profile-left">

          <div class="avatar">
            ${
              driver.name
                .charAt(0)
                .toUpperCase()
            }
          </div>

          <div>

            <div class="profile-name">
              ${driver.name}
            </div>

            <div class="profile-role">
              ${t("driverName")}
            </div>

          </div>

        </div>

        <div class="online-control">

          <span class="online-text">

            ${
              driver.status === "online"
                ? t("online")
                : t("offline")
            }

          </span>

          <label class="toggle">

            <input
              type="checkbox"
              ${
                driver.status === "online"
                  ? "checked"
                  : ""
              }
              onchange="
                toggleDriverStatus()
              "
            >

            <span class="slider"></span>

          </label>

        </div>

      </section>

      <section class="stats">

        <div class="stat-card">

          <div class="stat-icon">
            🚚
          </div>

          <div>

            <div class="stat-number">
              ${driver.deliveries}
            </div>

            <div class="stat-label">
              ${t("deliveries")}
            </div>

          </div>

        </div>

        <div class="stat-card">

          <div class="stat-icon">
            💶
          </div>

          <div>

            <div class="stat-number">
              ${euro(
                driver.earnings
              )}
            </div>

            <div class="stat-label">
              ${t("earnings")}
            </div>

          </div>

        </div>

        <div class="stat-card">

          <div class="stat-icon">
            🛣️
          </div>

          <div>

            <div class="stat-number">
              ${driver.kilometers.toFixed(1)}
            </div>

            <div class="stat-label">
              ${t("kilometers")}
            </div>

          </div>

        </div>

      </section>

      <h2 class="section-title">
        ${t("quickActions")}
      </h2>

      <section class="quick-actions">

        <button
          class="quick-button"
          onclick="startGPS()"
        >
          📍 GPS starten
        </button>

        <button
          class="quick-button"
          onclick="stopGPS()"
        >
          ⛔ GPS stoppen
        </button>

        <button
          class="quick-button"
          onclick="
            window.scrollTo({
              top:
                document
                  .getElementById(
                    'orders-section'
                  )
                  .offsetTop - 80,

              behavior: 'smooth'
            })
          "
        >
          📦 ${t("orders")}
        </button>

        <button
          class="quick-button"
          onclick="toggleDarkMode()"
        >
          ${
            darkMode
              ? "☀️"
              : "🌙"
          }
          ${t("darkMode")}
        </button>

      </section>

      <h2 class="section-title">
        ${t("gps")}
      </h2>

      <section class="gps-card">

        <div class="gps-header">

          <strong>
            📍 ${t("gps")}
          </strong>

          <span
            id="gps-status"
            class="gps-status ${
              gpsActive
                ? "gps-active"
                : "gps-inactive"
            }"
          >

            ${
              gpsActive
                ? t("active")
                : t("inactive")
            }

          </span>

        </div>

        <div
          id="coordinates"
          class="coordinates"
        >

          ${
            currentPosition
              ? `

                <div>

                  <strong>
                    Latitude
                  </strong>

                  <br>

                  ${currentPosition.lat.toFixed(6)}

                </div>

                <div>

                  <strong>
                    Longitude
                  </strong>

                  <br>

                  ${currentPosition.lng.toFixed(6)}

                </div>

                <div>

                  <strong>
                    Genauigkeit
                  </strong>

                  <br>

                  ±${Math.round(
                    currentPosition.accuracy
                  )} m

                </div>

              `
              : `

                <div>
                  ${t("gpsWaiting")}
                </div>

              `
          }

        </div>

        <div
          id="map"
          class="map-container"
        ></div>

      </section>

      <section id="orders-section">

        <h2 class="section-title">
          📦 ${t("orders")}
        </h2>

        <div
          id="orders"
          class="orders"
        ></div>

      </section>

      <h2 class="section-title">
        ⚙️ ${t("settings")}
      </h2>

      <section class="settings-panel">

        <div class="setting-row">

          <div>

            <div class="setting-label">
              ${t("darkMode")}
            </div>

            <div class="setting-description">
              ${t("darkMode")}
            </div>

          </div>

          <button
            class="button"
            onclick="toggleDarkMode()"
          >
            ${
              darkMode
                ? "☀️"
                : "🌙"
            }
          </button>

        </div>

        <div class="setting-row">

          <div>

            <div class="setting-label">
              ${t("language")}
            </div>

            <div class="setting-description">
              Deutsch / Français /
              English / Türkçe / العربية
            </div>

          </div>

          <select
            class="language-select"
            onchange="
              changeLanguage(this.value)
            "
          >

            <option
              value="de"
              ${
                language === "de"
                  ? "selected"
                  : ""
              }
            >
              Deutsch
            </option>

            <option
              value="fr"
              ${
                language === "fr"
                  ? "selected"
                  : ""
              }
            >
              Français
            </option>

            <option
              value="en"
              ${
                language === "en"
                  ? "selected"
                  : ""
              }
            >
              English
            </option>

            <option
              value="tr"
              ${
                language === "tr"
                  ? "selected"
                  : ""
              }
            >
              Türkçe
            </option>

            <option
              value="ar"
              ${
                language === "ar"
                  ? "selected"
                  : ""
              }
            >
              العربية
            </option>

          </select>

        </div>

      </section>

    </main>

    <footer class="footer">

      <div>
        🍕 FoodExpress Deutschland
      </div>

      <div>
        Fahrer Dashboard V15 Premium
      </div>

    </footer>

  `;

  applyDarkMode();

  renderOrders();

  setTimeout(() => {
    initializeMap();
  }, 50);
}

loadData();
applyDarkMode();
render();
