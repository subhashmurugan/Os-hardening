import { Typography, theme } from 'antd'
import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subTitle: string
  icon?: ReactNode
}

const PageHeader = ({ title, subTitle, icon }: PageHeaderProps): JSX.Element => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <div
      style={{
        background: colorBgContainer,
        padding: '2rem 2.5rem 1.2rem 2.5rem',
        marginBottom: '1.5rem'
      }}
    >
      <Typography.Title level={3}>
        {/* <span style={{ fontSize: '1.8rem', paddingRight: '0.5rem' }}>{icon}</span> */}
        {title}
      </Typography.Title>
      <Typography.Text>{subTitle}</Typography.Text>
    </div>
  )
}

export default PageHeader
