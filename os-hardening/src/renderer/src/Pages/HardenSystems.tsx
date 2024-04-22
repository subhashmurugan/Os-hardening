import PageHeader from '@renderer/components/PageHeader'
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  SelectProps,
  Modal,
  Typography,
  Progress,
  Space,
  Row
} from 'antd'
import { createContext } from 'react'

const HardenSystems = () => {
  const [modal, contextHolder] = Modal.useModal()
  const ReachableContext = createContext<string | null>(null)

  const ipOptions: SelectProps['options'] = [
    {
      label: '10.1.75.43',
      value: '10.1.75.43'
    },
    {
      label: '10.1.75.44',
      value: '10.1.75.44'
    },
    {
      label: '10.1.75.45',
      value: '10.1.75.45'
    },
    {
      label: '10.1.75.46',
      value: '10.1.75.46'
    },
    {
      label: '10.1.75.48',
      value: '10.1.75.48'
    },
    {
      label: '10.1.75.49',
      value: '10.1.75.49'
    }
  ]
  const featureOptions: SelectProps['options'] = [
    { label: 'Feature 1', value: 'Feature 1' },
    { label: 'Feature 2', value: 'Feature 2' },
    { label: 'Feature 3', value: 'Feature 4' }
  ]

  const config = {
    title: <Typography.Title level={4}>Hardening Systems</Typography.Title>,
    content: (
      <>
        <Row justify="center" align="middle">
          <Progress
            type="circle"
            percent={33}
            format={() => <p style={{ fontSize: '14px' }}>Hardening in Progress</p>}
          />
        </Row>
        <br />
        <Row justify="center" align="middle">
          <Typography.Text>Hardening 1 out of 3 systems</Typography.Text>
        </Row>
      </>
    ),
    footer: (_, { OkBtn, CancelBtn }) => (
      <>
        <OkBtn />
        <Button type="primary">Download Hardening Script</Button>
      </>
    )
  }

  const handleApplyPolicy = () => {
    modal.success(config)
  }
  return (
    <ReachableContext.Provider value="">
      <div>
        <PageHeader
          title="Harden Systems"
          subTitle="Here you can harden your system by applying the policy you created earlier"
        />
        <Card
          style={{
            padding: '3px'
          }}
        >
          <Form name="Policy Apply" layout="vertical" autoComplete="off">
            <Form.Item label="Select a Policy" name="selctPolicy">
              <Select placeholder="Select a Policy">
                <Select.Option value="Policy 4">Default Policy</Select.Option>
                <Select.Option value="Policy 1">Scientist-A Policy</Select.Option>
                <Select.Option value="Policy 6">Scientist-B Policy</Select.Option>
                <Select.Option value="Policy 2">Security Officer Policy</Select.Option>
                <Select.Option value="Policy 3">Analyst Policy</Select.Option>
                <Select.Option value="Policy 5">Accountant Policy</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Select a Feature to override" name="overrideFeatures">
              <Select
                mode="multiple"
                placeholder="Select a Feature to override"
                options={featureOptions}
              />
            </Form.Item>
            <Form.Item label="Enter IP Address or Hostname" name="ipAddress">
              <Select mode="multiple" placeholder="Please select" options={ipOptions} />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%' }}
              onClick={handleApplyPolicy}
            >
              Apply Policy
            </Button>
          </Form>
        </Card>
      </div>
      {contextHolder}
    </ReachableContext.Provider>
  )
}

export default HardenSystems
