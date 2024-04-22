import PolicyApplicationsFrom from '@renderer/Pages/PolicyForms/PolicyApplicationsFrom'
import PolicyBasicsFrom from '@renderer/Pages/PolicyForms/PolicyBasicsFrom'
import PolicySecurityFrom from '@renderer/Pages/PolicyForms/PolicySecurityFrom'
import PolicyServicesForm from '@renderer/Pages/PolicyForms/PolicyServicesForm'
import { CollapseProps } from 'antd'

const collapseItems: CollapseProps['items'] = [
  {
    key: 0,
    label: <h2>Basics</h2>,
    children: <PolicyBasicsFrom />
  },
  {
    key: 1,
    label: <h2>Applications</h2>,
    children: <PolicyApplicationsFrom />
  },
  {
    key: 2,
    label: <h2>Services</h2>,
    children: <PolicyServicesForm />
  },
  {
    key: 3,
    label: <h2>Security</h2>,
    children: <PolicySecurityFrom />
  }
]

export default collapseItems
