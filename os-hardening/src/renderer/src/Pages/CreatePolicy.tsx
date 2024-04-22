import PageHeader from '@renderer/components/PageHeader'
import {
  Button,
  Card,
  Col,
  Collapse,
  Form,
  Input,
  Row,
  theme,
  Modal,
  Space,
  Typography
} from 'antd'
import collapseItems from '@renderer/data/createPolicyCollapseData'
import { createContext } from 'react'
const CreatePolicy = (): JSX.Element => {
  const { token } = theme.useToken()
  const [form] = Form.useForm()
  const [modal, contextHolder] = Modal.useModal()

  const handlePolicyFormSubmit = async () => {
    form.resetFields()
    modal.success(config)
  }

  const ReachableContext = createContext<string | null>(null)

  const config = {
    title: <Typography.Title level={4}>Policy created successfully</Typography.Title>,
    content: (
      <>
        <Typography.Text>Policy created successfully</Typography.Text>
      </>
    )
  }

  return (
    <ReachableContext.Provider value="">
      <div>
        <PageHeader
          title="Create Policy"
          subTitle="Here we have all the analytics and activities of the users"
        />
        <Form layout="vertical" form={form}>
          <Collapse
            accordion
            items={collapseItems}
            style={{ background: token.colorBgContainer, border: 'none', borderRadius: 'none' }}
          />

          <Col offset={3}>
            <Card
              style={{
                margin: '1rem',
                width: '75%',
                padding: '3px'
              }}
            >
              <Form.Item label="Enter Policy Name" name="policyName">
                <Input />
              </Form.Item>
              <Button
                style={{ width: '100%' }}
                type="primary"
                htmlType="submit"
                onClick={handlePolicyFormSubmit}
              >
                Create Policy
              </Button>
            </Card>
          </Col>
        </Form>
      </div>
      {contextHolder}
    </ReachableContext.Provider>
  )
}

export default CreatePolicy
