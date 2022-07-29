
   const options = {
        method: 'GET',
        headers: {
            'X-Access-Token': '68a2c86fe75e420179684e614ef9b843',
            'X-RapidAPI-Key': 'f7c00180d1msh5f5e4141611c325p1794cdjsnb847642e5322',
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
        }
    };
   
    
    function show(){
    //fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/week-matrix?origin='+document.getElementById("txt1").value+'&destination='+document.getElementById("txt2").value+'&return_date=2022-08-15&depart_date=2022-07-31&show_to_affiliates=TRUE&currency=INR', options)
    fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix?origin='+document.getElementById("txt1").value+'&destination='+document.getElementById("txt2").value+'&flexibility=7&currency=INR&show_to_affiliates=true&limit=10&distance=1000',options)
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            console.log(json['prices']);

            var li = `<thead>
          <tr>
             <th>Origin</th>
             <th>Destination</th>
             <th>Price</th>
             <th>Depart_date</th>
             <th>Distance</th>
             <th>Trip_class</th>
             <th>Book</th>
          </tr>
          </thead>`;

            json['prices'].forEach((prices)=> {
                li += `<tbody><tr>
                <td data-label="Origin">${prices.origin}</td>
                <td data-label="Destination">${prices.destination} </td>
                <td data-label="Price">${prices.price}</td>
                <td data-label="Depart_date">${prices.depart_date}</td>
                <td data-label="Trip_class">${prices.distance}</td>
                <td data-label="Book">${prices.trip_class}</td>
                <td data-label="#"><a href= 'table.html'><button class="btn">BOOK</button></a></td>
              </tr></tbody>`;
            });
        
            document.getElementById("show-data").innerHTML = li;
         });
        }
window.onload=function(){
        fetch("https://raw.githubusercontent.com/spyesx/IATA_ICAO_codes/master/datas/city_airport_codes.json")
.then(response =>response.json())
.then((json)=>{
  console.log(json);
  document.getElementById("txt1").innerHTML=json.map(r=>{
    return (`<option value="${r.iata_code ? r.iata_code : r.city}">${r.city}</option>`);
  });
  document.getElementById("txt2").innerHTML=json.map(r=>{
    return (`<option value="${r.iata_code ? r.iata_code :r.city}">${r.city}</option>`);
  });
  
})
}