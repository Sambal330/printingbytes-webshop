fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productenSectie = document.getElementById('producten');

    data.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';

      div.innerHTML = `
        <img src="img/${product.afbeelding}" alt="${product.naam}">
        <h3>${product.naam}</h3>
        <p>€${product.prijs.toFixed(2)}</p>
        <a href="${product.bestellink}" target="_blank">Bestel nu</a>
      `;

      productenSectie.appendChild(div);
    });
  })
  .catch(error => console.error('Fout bij laden van producten:', error));