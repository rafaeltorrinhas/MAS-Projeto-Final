let map;
let selectedMarker = null;

function initMap() {
  const position = { lat: 40.633169, lng: -8.659486 };
  const position2 = { lat: 40.657661, lng: -7.914519 };
  const position3 = { lat: 41.178509, lng: -8.595379 };
  const position4 = { lat: 38.737298, lng: -9.138022 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: position,
  });
  const infowindow = new google.maps.InfoWindow({
    content: "Cacifo no Departamento de Eletrónica, Telecomunicações e Informática da Universidade de Aveiro",
    ariaLabel: "Cacifo1",
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: "Cacifo na Câmara Municipal de Viseu",
    ariaLabel: "Cacifo2",
  });
  const infowindow3 = new google.maps.InfoWindow({
    content: "Cacifo no Departamento de Informática na Faculdade de Engenharia da Universidade do Porto",
    ariaLabel: "Cacifo3",
  });
  const infowindow4 = new google.maps.InfoWindow({
    content: "Cacifo no Departamento de Informática II no Instituto Superior Técnico da Universidade de Lisboa",
    ariaLabel: "Cacifo4",
  });

  const marker1 = new google.maps.Marker({
    position: position,
    map: map,
    title: "Cacifo1",
  });

  const marker2 = new google.maps.Marker({
    position: position2,
    map: map,
    title: "Cacifo2",
  });

  const marker3 = new google.maps.Marker({
    position: position3,
    map: map,
    title: "Cacifo3",
  });

  const marker4 = new google.maps.Marker({
    position: position4,
    map: map,
    title: "Cacifo4",
  });

  marker1.addListener("click", function () {
    selectMarker(marker1);
    infowindow.open(map, marker1);
  });

  marker2.addListener("click", function () {
    selectMarker(marker2);
    infowindow2.open(map, marker2);
  });

  marker3.addListener("click", function () {
    selectMarker(marker3);
    infowindow3.open(map, marker3);
  });

  marker4.addListener("click", function () {
    selectMarker(marker4);
    infowindow4.open(map, marker4);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const cacifosCheckbox = document.getElementById('cacifos');
  const mapContainer = document.getElementById('map-container');
  const addressContainer = document.getElementById('address-container');

  cacifosCheckbox.addEventListener('change', function () {
    if (this.checked) {
      // Show map container and hide address container
      mapContainer.style.display = 'block';
      addressContainer.style.display = 'none';
    } else {
      // Hide map container
      mapContainer.style.display = 'none';
    }
    document.getElementById('mbway').addEventListener('change', function() {
      document.getElementById('mbwayField').style.display = this.checked ? 'block' : 'none';
      document.getElementById('cartaoField').style.display = 'none';
      document.getElementById('paypalField').style.display = 'none';
    });
    
    document.getElementById('cartao').addEventListener('change', function() {
      document.getElementById('mbwayField').style.display = 'none';
      document.getElementById('cartaoField').style.display = this.checked ? 'block' : 'none';
      document.getElementById('paypalField').style.display = 'none';
    });
    
    document.getElementById('paypal').addEventListener('change', function() {
      document.getElementById('mbwayField').style.display = 'none';
      document.getElementById('cartaoField').style.display = 'none';
      document.getElementById('paypalField').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('deliveryCompany').addEventListener('change', function() {
      var price;
      var estimate;
    
      switch (this.value) {
        case 'dpd':
          price = '3€';
          estimate = '3 dias úteis';
          break;
        case 'ups':
          price = '5€';
          estimate = '1 dia útil';
          break;
        case 'gls':
          price = '4€';
          estimate = '2 dias úteis';
          break;
        default:
          price = '';
          estimate = '';
      }
    
      document.getElementById('priceId').value = price;
      document.getElementById('estimativa').value = estimate;
    });
    
    document.getElementById('submitBtn').addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
    
      var paymentMethod = document.querySelector('input[name="pagamento"]:checked').value;
      var deliveryCompany = document.getElementById('deliveryCompany').value;
      var price = document.getElementById('priceId').value;
      var estimate = document.getElementById('estimativa').value;
      var comprimento = document.getElementById('comp').value; // Fix the ID here
      var largura = document.getElementById('larg').value;    // Fix the ID here
      var altura = document.getElementById('alt').value;      // Fix the ID here
      var peso = document.getElementById('peso').value;
      var enviarde = document.getElementById('enviarDe').value; // Fix the ID here
      var para = document.getElementById('para').value;
    
      // Store data in localStorage
      localStorage.setItem('paymentMethod', paymentMethod);
      localStorage.setItem('deliveryCompany', deliveryCompany);
      localStorage.setItem('price', price);
      localStorage.setItem('estimate', estimate);
      localStorage.setItem('comprimento', comprimento);
      localStorage.setItem('largura', largura);
      localStorage.setItem('altura', altura);
      localStorage.setItem('peso', peso);
      localStorage.setItem('enviarde', enviarde);
      localStorage.setItem('para', para);
      // Navigate to tracking.html
      window.location.href = './tracking.html';
      document.getElementById('submitBtn').addEventListener('click', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
    
        // Capture form data
        var paymentMethod = document.querySelector('input[name="pagamento"]:checked').value;
        var deliveryCompany = document.getElementById('deliveryCompany').value;
        var price = document.getElementById('priceId').value;
        var estimate = document.getElementById('estimativa').value;
        var comprimento = document.getElementById('comp').value;
        var largura = document.getElementById('larg').value;
        var altura = document.getElementById('alt').value;
        var peso = document.getElementById('peso').value;
        var enviarde = document.getElementById('enviarDe').value;
        var para = document.getElementById('para').value;
    
        // Store data in localStorage
        localStorage.setItem('paymentMethod', paymentMethod);
        localStorage.setItem('deliveryCompany', deliveryCompany);
        localStorage.setItem('price', price);
        localStorage.setItem('estimate', estimate);
        localStorage.setItem('comprimento', comprimento);
        localStorage.setItem('largura', largura);
        localStorage.setItem('altura', altura);
        localStorage.setItem('peso', peso);
        localStorage.setItem('enviarde', enviarde);
        localStorage.setItem('para', para);
    
        // Display captured information
        document.getElementById('displayPaymentMethod').textContent = paymentMethod;
        document.getElementById('displayDeliveryCompany').textContent = deliveryCompany;
        document.getElementById('displayPrice').textContent = price;
        document.getElementById('displayEstimate').textContent = estimate;
        document.getElementById('displayComprimento').textContent = comprimento;
        document.getElementById('displayLargura').textContent = largura;
        document.getElementById('displayAltura').textContent = altura;
        document.getElementById('displayPeso').textContent = peso;
        document.getElementById('displayEnviarDe').textContent = enviarde;
        document.getElementById('displayPara').textContent = para;
    
        // Show the information display section
        document.getElementById('displayInfo').style.display = 'block';
        document.addEventListener('DOMContentLoaded', function () {
          // Retrieve information from localStorage
          var paymentMethod = localStorage.getItem('paymentMethod');
          var deliveryCompany = localStorage.getItem('deliveryCompany');
          var price = localStorage.getItem('price');
          var estimate = localStorage.getItem('estimate');
          var comprimento = localStorage.getItem('comprimento');
          var largura = localStorage.getItem('largura');
          var altura = localStorage.getItem('altura');
          var peso = localStorage.getItem('peso');
          var enviarde = localStorage.getItem('enviarde');
          var para = localStorage.getItem('para');
    
          // Display the retrieved information on the tracking page
          // You can insert the values into specific elements or use them as needed
          console.log('Payment Method:', paymentMethod);
          console.log('Delivery Company:', deliveryCompany);
          console.log('Price:', price);
          console.log('Estimate:', estimate);
          console.log('Comprimento:', comprimento);
          console.log('Largura:', largura);
          console.log('Altura:', altura);
          console.log('Peso:', peso);
          console.log('Enviar de:', enviarde);
          console.log('Para:', para);
    
        // Navigate to tracking.html
        // window.location.href = './tracking.html'; // Commented out for demonstration
      });
    });
  });
});
});