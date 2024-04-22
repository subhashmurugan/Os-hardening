import { PatchWorkSteps } from '@renderer/components/PatchWorkSteps'

export const secureAppsCount: number = 19
export const vulnerableAppsCount: number = 11

export const data = {
  labels: ['Vulnerable Apps', 'Secure Apps'],
  datasets: [
    {
      label: 'Total',
      data: [vulnerableAppsCount, secureAppsCount],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1
    }
  ]
}
// export const appData = ['VS CODE', 'VS CODE', 'VS CODE', 'VS CODE']
// const collapseItems = appData.map((value, index) => ({
//   key: index,
//   label: value,
//   children: <PatchWorkSteps key={index} />
// }))

// export default collapseItems

export const vulnerableApps: { appName: string; color: string }[] = [
  {
    appName: 'Apache',
    color: 'magenta'
  },
  {
    appName: 'PHP',
    color: 'red'
  },
  {
    appName: 'Node',
    color: 'volcano'
  },
  {
    appName: 'SystemD',
    color: 'orange'
  },
  {
    appName: 'Java',
    color: 'blue'
  },
  {
    appName: 'SSH',
    color: 'lime'
  },
  {
    appName: 'Postgress',
    color: 'green'
  },
  {
    appName: 'keypassXD',
    color: 'cyan'
  },
  {
    appName: 'Grub',
    color: 'gold'
  },
  {
    appName: 'Qemu',
    color: 'geekblue'
  },
  {
    appName: 'Vscode',
    color: 'purple'
  }
]
