import { Button, Col, Input, Row, Space, Tag, Typography } from 'antd'
import { useRef, useState } from 'react'
import type { InputRef } from 'antd'
import { valueType } from 'antd/es/statistic/utils'

const PolicyApplicationsFrom = () => {
  const [blockedApps, setBlockedApps] = useState<valueType[]>([])
  const appsInputRef = useRef<InputRef>(null)
  const [blockAppValue, setBlockAppValue] = useState<valueType>()
  const blockAppInputRef = useRef<InputRef>(null)

  const [whitelistedApps, setWhitelistedApps] = useState<valueType[]>([])
  const [whiteAppValue, setWhiteAppValue] = useState<valueType>()
  const whiteAppInputRef = useRef<InputRef>(null)

  const handleAppsInputChange = (option: String) => {
    if (option === 'block') {
      setBlockAppValue(blockAppInputRef.current?.input?.value)
    } else {
      setWhiteAppValue(whiteAppInputRef.current?.input?.value)
    }
  }
  const handleAppsInputConfirm = (option: String) => {
    if (option === 'block') {
      if (blockAppValue && blockedApps.indexOf(blockAppValue) === -1) {
        setBlockedApps([...blockedApps, blockAppValue])
      }
      setBlockAppValue('')
    } else {
      if (whiteAppValue && whitelistedApps.indexOf(whiteAppValue) === -1) {
        setWhitelistedApps([...whitelistedApps, whiteAppValue])
      }
      setWhiteAppValue('')
    }
  }

  const handleAppsClose = (removedApp: valueType, option: String) => {
    if (option === 'block') {
      const newTags = blockedApps.filter((app) => app !== removedApp)
      setBlockedApps(newTags)
    } else {
      const newTags = whitelistedApps.filter((app) => app !== removedApp)
      setWhitelistedApps(newTags)
    }
  }

  return (
    <>
      <Row gutter={[32, 16]} justify="space-between">
        <Col flex="auto">
          <Typography.Title level={5}>Applications Whitelist</Typography.Title>
          <Space.Compact style={{ width: '100%', paddingTop: '1rem' }} size="large">
            <Input
              ref={whiteAppInputRef}
              value={whiteAppValue}
              placeholder="Type a application name to add it to blocked list"
              onChange={() => handleAppsInputChange('white')}
              onBlur={() => handleAppsInputConfirm('white')}
              onPressEnter={() => handleAppsInputConfirm('white')}
            />
            <Button type="primary">Whitelist</Button>
          </Space.Compact>
        </Col>
        <Col flex="auto">
          <Typography.Title level={5}>Applications Blocklist</Typography.Title>
          <Space.Compact style={{ width: '100%', paddingTop: '1rem' }} size="large">
            <Input
              ref={blockAppInputRef}
              value={blockAppValue}
              placeholder="Type a application name to add it to blocked list"
              onChange={() => handleAppsInputChange('block')}
              onBlur={() => handleAppsInputConfirm('block')}
              onPressEnter={() => handleAppsInputConfirm('block')}
            />
            <Button type="primary">Block</Button>
          </Space.Compact>
        </Col>
      </Row>
      <Row gutter={[32, 16]}>
        <Col flex="6">
          <Space style={{ padding: '1rem 0', width: '100%' }} wrap>
            {whitelistedApps.map((app) => (
              <Tag
                style={{ margin: '0.5rem' }}
                closable
                onClose={(e) => {
                  e.preventDefault()
                  handleAppsClose(app, 'white')
                }}
              >
                {app}
              </Tag>
            ))}
          </Space>
        </Col>
        <Col flex="6">
          <Space style={{ padding: '1rem 0', width: '100%' }} wrap>
            {blockedApps.map((app) => (
              <Tag
                style={{ margin: '0.5rem' }}
                closable
                onClose={(e) => {
                  e.preventDefault()
                  handleAppsClose(app, 'block')
                }}
              >
                {app}
              </Tag>
            ))}
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default PolicyApplicationsFrom
