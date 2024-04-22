import PageHeader from '@renderer/components/PageHeader'
import { MdOutlineDashboard } from 'react-icons/md'
import DashboardCard from '@renderer/components/DashboardCard'
import { Col, List, Row, Typography } from 'antd'
import { Avatar, Card } from 'antd'
import { dashboadCards } from '@renderer/data/DashboardData'
import { activitiesData } from '@renderer/data/UserLogsData'
const { Meta } = Card

const Dashboard = (): JSX.Element => {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subTitle="Here we have all the analytics and activities of the users"
        icon={<MdOutlineDashboard />}
      />
      <div style={{ marginTop: '1rem' }}>
        <Row gutter={[16, 16]}>
          {dashboadCards.map((item) => (
            <Col key={item.title} flex="6">
              <DashboardCard title={item.title} data={item.data} isPercentage={item.isPercentage} />
            </Col>
          ))}
        </Row>
      </div>
      <List
        style={{ marginTop: '1rem' }}
        header={<p>Activities</p>}
        bordered
        dataSource={activitiesData}
        renderItem={(item) => (
          <Card>
            <List.Item style={{ height: '2rem' }}>
              <Meta
                avatar={<Avatar icon={item.profile} />}
                title={<Typography.Text>{item.title}</Typography.Text>}
                description={<Typography.Text>{item.description}</Typography.Text>}
              />
            </List.Item>
          </Card>
        )}
      />
    </div>
  )
}

export default Dashboard
