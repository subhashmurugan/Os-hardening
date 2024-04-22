import PageHeader from '@renderer/components/PageHeader'
import { MdOutlineDashboard } from 'react-icons/md'
import { useState, SetStateAction } from 'react'
import { Col, Row, Input, theme, Card, Space, Typography, Button, Tag } from 'antd'
import { PieChart } from '@renderer/components/PieChart'
import PatchWorkSteps from '@renderer/components/PatchWorkSteps'
import { vulnerableApps } from '@renderer/data/PatchSystemData'

const { Search } = Input

const PatchSystems = (): JSX.Element => {
  const { token } = theme.useToken()
  const [isPatching, setisPatching] = useState<boolean>(false)
  const [loadingState, setloadingState] = useState<SetStateAction<boolean>>(false)
  const [showInfo, setshowInfo] = useState<SetStateAction<boolean>>(false)
  const [buttonText, setbuttonText] = useState<string>('Secure Apps')

  const handleClick = () => {
    setisPatching(true)
    setbuttonText('Securing')
    setTimeout(() => {
      setisPatching(true)
      setbuttonText('Secured')
    }, 7000)
  }
  const handleSearch = () => {
    setloadingState(true)
    setTimeout(() => {
      setshowInfo(true)
      setloadingState(false)
    }, 1000)
  }
  const isPatchingSetter = () => {
    setisPatching(true)
  }
  return (
    <div style={{ marginBottom: '1rem' }}>
      <PageHeader
        title="System Patching"
        subTitle="Here we have the Vulnerability Checking and Fixes"
        icon={<MdOutlineDashboard />}
      />
      <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="Enter IP address"
            enterButton="Search"
            size="large"
            {...(loadingState && { loading: true })}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
      {showInfo && (
        <>
          <Card style={{ marginTop: '2rem' }}>
            <Row
              wrap
              justify="space-around"
              align="middle"
              style={{ paddingTop: '2rem' }}
              gutter={[32, 20]}
            >
              <Col>
                <PieChart />
              </Col>
              <Col span="6" justify="space-around">
                <Typography.Text style={{ color: 'grey' }}>
                  Discover vulnerabilities, fortify defenses, and conquer the digital realm with our
                  meticulous cybersecurity process
                </Typography.Text>
                <Button
                  type="primary"
                  onClick={handleClick}
                  style={{ marginTop: '1rem' }}
                  {...(isPatching && { disabled: true })}
                >
                  {buttonText}
                </Button>
              </Col>
              <Col>
                <PatchWorkSteps isPatching={isPatching} isPatchingSetter={isPatchingSetter} />
              </Col>
            </Row>
          </Card>

          <Row style={{ paddingTop: '1rem' }}>
            <Col span="12">
              <Card title="Vulnerable Apps">
                <Space size={[0, 8]} wrap>
                  {vulnerableApps.map((app, index) => (
                    <Tag color={app.color} key={index}>
                      {app.appName}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default PatchSystems
