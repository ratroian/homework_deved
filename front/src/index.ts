import './style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Chart, registerables } from '../node_modules/chart.js';
Chart.register(...registerables);
import axios from '../node_modules/axios';
require('babel-core/register');
require('babel-polyfill');

const select = document.querySelector('.select') as HTMLSelectElement;
const popupCanvas: any = document.getElementById('myChart');

let URL = 'http://localhost:3005/get-data-germany';
const resultArray: any = [];
let config: any;
let barChart: any = new Chart(document.getElementById('myChart') as any, config as any);

const validateValue = (): void => {
    if (select.value === 'Germany') {
        URL = 'http://localhost:3005/get-data-germany';
        getData(URL);
    } else if (select.value === 'France') {
        URL = 'http://localhost:3005/get-data-france';
        getData(URL);
    } else if (select.value === 'Italy') {
        URL = 'http://localhost:3005/get-data-italy';
        getData(URL);
    } else if (select.value === 'Austria') {
        URL = 'http://localhost:3005/get-data-austria';
        getData(URL);
    }
};

const getData: any = async (URL: string) => {
    try {
        resultArray.length = 0;
        const data = await axios.get(URL);
        await resultArray.push(Object.values(data.data.histogram));
        renderData(resultArray);
    } catch (error) {
        console.error(error);
    }
};

const renderData = async (resultArray: Array<number>) => {
    barChart.destroy();
    barChart = new Chart(popupCanvas, {
        type: 'bar',
        data: {
            labels: ['10K-20K', '20K-30K', '30K-40K', '40K-50K', '50K-60K', '60K-70K', '70K+'],
            datasets: [
                {
                    label: 'Vacancies ',
                    data: resultArray[0],
                    backgroundColor: ['rgba(38,35,35,0.69)'],
                },
            ],
        },
    });
};

select.addEventListener('change', validateValue);
getData(URL);
