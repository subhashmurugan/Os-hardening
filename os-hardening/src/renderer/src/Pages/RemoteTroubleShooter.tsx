import PageHeader from '@renderer/components/PageHeader'
import { TroubleShooterCards, troubleShootOptions } from '@renderer/data/TroubleShooterData'
import { Col, Collapse, Row, Select, SelectProps, Space, theme } from 'antd'
import Search from 'antd/es/input/Search'
import { useState, SetStateAction } from 'react'
const options: SelectProps['options'] = troubleShootOptions

const RemoteTroubleShooter = (): JSX.Element => {
  const [isSelected, setisSelected] = useState<SetStateAction<string>>('')
  const [loadingState, setloadingState] = useState<SetStateAction<boolean>>(false)
  const [showInfo, setshowInfo] = useState<SetStateAction<boolean>>(false)
  const { token } = theme.useToken()
  const handleChange = (value: SetStateAction<string>) => {
    setisSelected(value)
  }
  const handleSearch = () => {
    setloadingState(true)
    setTimeout(() => {
      setshowInfo(true)
      setloadingState(false)
    }, 1000)
  }
  return (
    <>
      <PageHeader
        title="Remote TroubleShooter"
        subTitle="Troubleshoot issues in the systems over the network"
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
      <br />
      {
        showInfo && (
          <Row>
            <Col flex="auto">
              <Collapse accordion items={TroubleShooterCards}
                style={{ background: token.colorBgContainer, border: 'none', borderRadius: 'none' }}
              />
            </Col>
          </Row>
        )
      }

    </>
  )
}

export default RemoteTroubleShooter
