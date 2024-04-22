import { ReactNode } from 'react'
import { UserOutlined } from '@ant-design/icons'

export const activitiesData: { title: string; description: string; profile: ReactNode }[] = [
  {
    title: 'Security Process Status',
    description: '3 hours ago',
    profile: <UserOutlined />
  },
  {
    title: 'Security Policy Updated',
    description: '6 hours ago',
    profile: <UserOutlined />
  },
  {
    title: 'New User Roll Created',
    description: '10 hours ago',
    profile: <UserOutlined />
  },
  {
    title: 'System Backup Complaeated',
    description: '12 hours ago',
    profile: <UserOutlined />
  }
]
