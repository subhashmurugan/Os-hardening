import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { data } from '@renderer/data/PatchSystemData'

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart = (): JSX.Element => {
  return <Pie data={data} />
}
