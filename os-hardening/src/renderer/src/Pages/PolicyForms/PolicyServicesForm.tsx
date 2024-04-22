import { Button, Col, Input, InputRef, Row, Space, Tag, Typography } from 'antd'
import { useRef, useState } from 'react'
import { valueType } from 'antd/es/statistic/utils'

const PolicyServicesForm = () => {

  const [blockedServices, setBlockedServices] = useState<valueType[]>([])
  const [blockServiceValue, setBlockServiceValue] = useState<valueType>()
  const blockServiceInputRef = useRef<InputRef>(null)

  const [whitelistedServices, setWhitelistedServices] = useState<valueType[]>([])
  const [whiteServiceValue, setWhiteServiceValue] = useState<valueType>()
  const whiteServiceInputRef = useRef<InputRef>(null)

  const handleServicesInputChange = (option: String) => {
    if (option === 'block') {
      setBlockServiceValue(blockServiceInputRef.current?.input?.value)
    } else {
      setWhiteServiceValue(whiteServiceInputRef.current?.input?.value)
    }
  }
  const handleServicesInputConfirm = (option: String) => {
    if (option === 'block') {
      if (blockServiceValue && blockedServices.indexOf(blockServiceValue) === -1) {
        setBlockedServices([...blockedServices, blockServiceValue])
      }
      setBlockServiceValue('')
    } else {
      if (whiteServiceValue && whitelistedServices.indexOf(whiteServiceValue) === -1) {
        setWhitelistedServices([...whitelistedServices, whiteServiceValue])
      }
      setWhiteServiceValue('')
    }
  }

  const handleServicesClose = (removedService: valueType, option: String) => {
    if (option === 'block') {
      const newTags = blockedServices.filter((service) => service !== removedService)
      setBlockedServices(newTags)
    } else {
      const newTags = whitelistedServices.filter((service) => service !== removedService)
      setWhitelistedServices(newTags)
    }
  }

  return (
    <>
      <Row gutter={[32, 16]} justify="space-between">
        <Col flex="auto">
          <Typography.Title level={5}>Services Whitelist</Typography.Title>
          <Space.Compact style={{ width: '100%', paddingTop: '1rem' }} size="large">
            <Input
              ref={whiteServiceInputRef}
              value={whiteServiceValue}
              placeholder="Type a services name to add it to blocked list"
              onChange={() => handleServicesInputChange('white')}
              onBlur={() => handleServicesInputConfirm('white')}
              onPressEnter={() => handleServicesInputConfirm('white')}
            />
            <Button type="primary">Whitelist</Button>
          </Space.Compact>
        </Col>
        <Col flex="auto">
          <Typography.Title level={5}>Services Blocklist</Typography.Title>
          <Space.Compact style={{ width: '100%', paddingTop: '1rem' }} size="large">
            <Input
              ref={blockServiceInputRef}
              value={blockServiceValue}
              placeholder="Type a service name to add it to blocked list"
              onChange={() => handleServicesInputChange('block')}
              onBlur={() => handleServicesInputConfirm('block')}
              onPressEnter={() => handleServicesInputConfirm('block')}
            />
            <Button type="primary">Block</Button>
          </Space.Compact>
        </Col>
      </Row>
      <Row gutter={[32, 16]}>
        <Col flex="6">
          <Space style={{ padding: '1rem 0', width: '100%' }} wrap>
            {whitelistedServices.map((service) => (
              <Tag
                style={{ margin: '0.5rem' }}
                closable
                onClose={(e) => {
                  e.preventDefault()
                  handleServicesClose(service, 'white')
                }}
              >
                {service}
              </Tag>
            ))}
          </Space>
        </Col>
        <Col flex="6">
          <Space style={{ padding: '1rem 0', width: '100%' }} wrap>
            {blockedServices.map((service) => (
              <Tag
                style={{ margin: '0.5rem' }}
                closable
                onClose={(e) => {
                  e.preventDefault()
                  handleServicesClose(service, 'block')
                }}
              >
                {service}
              </Tag>
            ))}
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default PolicyServicesForm
