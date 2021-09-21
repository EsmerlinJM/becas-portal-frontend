import { Line } from 'react-chartjs-2'

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const LineChart = ({ items = [], name = '' }) => {
  const datasets = []
  const dataa = items.reduce((acc, curr) => {
    if (datasets.length) {
      datasets[0] = {
        data: [...(datasets[0]?.data || []), curr.calificacion],
        label: name,
        fill: false,
        backgroundColor: '#024A89',
        borderColor: '#024A89',
      }
    } else {
      datasets.push({
        data: [curr.calificacion],
        label: name,
        fill: false,
        backgroundColor: '#024A89',
        borderColor: '#024A89',
      })
    }
    return {
      labels: [...(acc.labels || []), curr.periodo],
    }
  }, {})

  return (
    <>
      <Line data={{ ...dataa, datasets }} options={options} />
    </>
  )
}

export default LineChart
