const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name'); 
const submitid = document.getElementById('submitid');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getinfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Enter City Name...`;
        datahide.classList.add('data_hide');
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0b0161da58af7b144d4c185cb548ce15`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;

            const weather =  arrdata[0].weather[0].main;

            if(weather == "Clear"){
                temp_status.innerHTML = "<i class=' fas fa-sun' style='color: #eccc68;'></i>";
            }else if(weather == "Clouds"){
                temp_status.innerHTML = "<i class=' fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(weather == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-smog' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            
        } catch (error) {
            city_name.innerText = `City Name Incorrect.`;
            datahide.classList.add('data_hide');
        }   
    }
}

submitid.addEventListener('click',getinfo);
