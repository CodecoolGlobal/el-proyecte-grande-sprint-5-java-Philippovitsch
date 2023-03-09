import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { fetchData } from '../functions/fetch';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export function ForecastChart({ locationData }) {
  useEffect(() => {
    const fetchWeatherForecast = async () => {
      const latitude = locationData.latitude;
      const longitude = locationData.longitude;
      const weatherData = await fetchData(`http://localhost:8080/api/weather/${latitude},${longitude}/forecast`);
      safeWeatherData(weatherData);
    };

    fetchWeatherForecast();
  }, [locationData.latitude, locationData.longitude]);

  const safeWeatherData = (weatherData) => {
    const timeStamps = ["T08:00", "T20:00"]
    const labelData = [];
    const temperatureData = [];
    const windSpeedData = []
    for (let i = 0; i < weatherData.time.length; i++) {
      if (timeStamps.includes(weatherData.time[i].substring(10, 16))) {
        labelData.push(convertTimeStamp(weatherData.time[i]));
        temperatureData.push(weatherData.temperature_2m[i]);
        windSpeedData.push(weatherData.windspeed_10m[i]);

      }
    };

    function convertTimeStamp(timeStamp) {
      const day = timeStamp.substring(8, 10);
      const month = timeStamp.substring(5, 7);
      const time = timeStamp.substring(11, 16);
      return `${day}.${month}. - ${time}`;
    }

    setLabels(labelData);
    setTemperatures(temperatureData);
    setWindSpeeds(windSpeedData);
  }

  const [labels, setLabels] = useState([]);
  const [temperatures, setTemperatures] = useState([]);
  const [windSpeeds, setWindSpeeds] = useState([]);
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `Weather Forecast for ${locationData.location}`
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperatures',
        data: temperatures,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'WindSpeed',
        data: windSpeeds,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

ForecastChart.propTypes = {
  locationData: PropTypes.object.isRequired
}
