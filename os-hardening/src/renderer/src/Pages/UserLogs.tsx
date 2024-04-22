import PageHeader from '@renderer/components/PageHeader'
import DataTable from '@renderer/components/DataTable'
import { Input } from 'antd'
import { Card } from 'antd'

const { Meta } = Card

const { Search } = Input

const UserLogs = (): JSX.Element => {
  return (
    <>
      <PageHeader title="User Logs" subTitle="Search for logs and details about a system" />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
        <Search
          placeholder="Search Logs"
          style={{ width: '40rem' }}
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
      <Card
        title="Logs"
        style={{
          padding: '3px'
        }}
      >
        <DataTable />
      </Card>
    </>
  )
}

export default UserLogs
