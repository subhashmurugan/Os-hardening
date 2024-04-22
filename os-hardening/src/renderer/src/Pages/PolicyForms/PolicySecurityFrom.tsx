import features, { Categories, inputTypes } from '@renderer/data/features'
import { Col, Form, Input, Row, Switch } from 'antd'
import { useEffect, useState } from 'react'

const PolicySecurityFrom = () => {
  const [inputPereferences, setInputPreferences] = useState({})

  useEffect(() => {
    features.forEach((feature) => {
      if (feature.category === Categories.Basics) {
        if (feature.inputType === inputTypes.switch) {
          setInputPreferences((prevPreferences) => ({
            ...prevPreferences,
            [`${feature.preferenceName}`]: false
          }))
        }
      }
    })
  }, [])
  return (
    <>
      <Row>
        <Row gutter={[8, 8]}>
          {features.map((feature, index) => {
            if (feature.category === Categories.Security) {
              if (feature.inputType === inputTypes.switch) {
                return (
                  <Col span={6}>
                    <Form.Item label={feature.label} name={feature.name}>
                      <Switch
                        onChange={() =>
                          setInputPreferences({
                            ...inputPereferences,
                            [`${feature.preferenceName}`]:
                              !inputPereferences[`${feature.preferenceName}`]
                          })
                        }
                      />
                    </Form.Item>
                  </Col>
                )
              }
            }
          })}
        </Row>
        <Col flex="auto">
          {features.map(
            (feature) =>
              feature.category === Categories.Security &&
              feature.children?.map((child) => {
                if (child.type === inputTypes.text || child.type === inputTypes.password) {
                  return (
                    <Form.Item label={child.label}>
                      <Input
                        disabled={!inputPereferences[`${feature.preferenceName}`]}
                        type={child.type}
                      />
                    </Form.Item>
                  )
                }
              })
          )}
        </Col>
      </Row>
    </>
  )
}

export default PolicySecurityFrom

/*
Security
  - Address Based Layout Randomization
  - IP Forwarding
  - Kernel Hardening
  - disable CRON JOBS
  - User GPG Key configuration
  - /boot partition readonly
*/
