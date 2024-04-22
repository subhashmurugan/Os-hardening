import { ReactNode } from 'react'
import Dashboard from '../Pages/Dashboard'
import CreatePolicy from '../Pages/CreatePolicy'
import UserLogs from '../Pages/UserLogs'
import RemoteTroubleShooter from '../Pages/RemoteTroubleShooter'
import { MdOutlineDashboard, MdTroubleshoot, MdPolicy } from 'react-icons/md'
import { LuFiles } from 'react-icons/lu'
import { GiAutoRepair } from 'react-icons/gi'
import HardenSystems from '@renderer/Pages/HardenSystems'
import PatchSystems from '@renderer/Pages/PatchSystems'

interface routesType {
  label: string
  path: string
  element: JSX.Element
  isNavItem: boolean
  icon?: ReactNode
}

const routes: routesType[] = [
  {
    label: 'Dashboard',
    path: '/',
    element: <Dashboard />,
    isNavItem: true,
    icon: <MdOutlineDashboard size={24} />
  },
  {
    label: 'Create Policy',
    path: '/createPolicy',
    element: <CreatePolicy />,
    isNavItem: true,
    icon: <MdPolicy size={24} />
  },
  {
    label: 'Harden Systems',
    path: '/hardenSystems',
    element: <HardenSystems />,
    isNavItem: true,
    icon: <MdOutlineDashboard size={24} />
  },
  {
    label: 'Remote TroubleShooter',
    path: '/troubleShooter',
    element: <RemoteTroubleShooter />,
    isNavItem: true,
    icon: <MdTroubleshoot size={24} />
  },
  {
    label: 'User Logs',
    path: '/userLogs',
    element: <UserLogs />,
    isNavItem: true,
    icon: <LuFiles size={24} />
  },
  {
    label: 'Patch Systems',
    path: '/patchSystems',
    element: <PatchSystems />,
    isNavItem: true,
    icon: <GiAutoRepair size={24} />
  }
]

export default routes
