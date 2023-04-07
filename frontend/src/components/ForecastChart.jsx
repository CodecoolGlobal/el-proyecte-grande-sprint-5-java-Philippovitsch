import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types'
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

import { getWeatherForecast } from '../fetch/weatherEndpoint';

export function ForecastChart({ locationData }) {
  useEffect(() => {
    const fetchWeatherForecast = async () => {
      const latitude = locationData.latitude;
      const longitude = locationData.longitude;
      const weatherData = await getWeatherForecast(latitude, longitude);
      safeWeatherData(weatherData);
    };

    fetchWeatherForecast();
  }, [locationData.latitude, locationData.longitude]);

  const safeWeatherData = (weatherData) => {
    const timeStamps = ["T08:00", "T20:00"]
    const labelData = [];
    const temperatureData = [];
    const windSpeedData = []
    const rainData = []
    for (let i = 0; i < weatherData.time.length; i++) {
      if (timeStamps.includes(weatherData.time[i].substring(10, 16))) {
        labelData.push(convertTimeStamp(weatherData.time[i]));
        temperatureData.push(weatherData.temperature_2m[i]);
        windSpeedData.push(weatherData.windspeed_10m[i]);
        rainData.push(weatherData.rain[i]);
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
    setRain(rainData);
  }

  const [labels, setLabels] = useState([]);
  const [temperatures, setTemperatures] = useState([]);
  const [windSpeeds, setWindSpeeds] = useState([]);
  const [rain, setRain] = useState([]);

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
      tempScale: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          color: "rgb(255, 99, 132)"
        }
      },
      windScale: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "rgb(60,179,113)"
        }
      },
      rainScale: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "rgb(53, 162, 235)",
        },
        suggestedMax: 10
      },

    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'tempScale',
      },
      {
        label: 'WindSpeed (km/h)',
        data: windSpeeds,
        borderColor: 'rgb(60,179,113)',
        backgroundColor: 'rgba(60,179,113, 0.5)',
        yAxisID: 'windScale',
      },
      {
        label: 'Rainfall (mm)',
        data: rain,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'rainScale',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

ForecastChart.propTypes = {
  locationData: PropTypes.object.isRequired
}
