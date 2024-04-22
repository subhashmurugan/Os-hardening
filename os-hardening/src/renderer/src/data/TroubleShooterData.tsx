import PatchWorkSteps from "@renderer/components/PatchWorkSteps";
import { Button, Col, CollapseProps, Row, Typography } from "antd";

const TroubleshootSteps = {
  "network": [
    {
      title: 'IP Configuration Check',
    },
    {
      title: 'DNS Resolution Issues',
    },
    {
      title: 'Firewall Configuration',
    },
    {
      title: 'Network Service Restart',
    },
    {
      title: 'Wifi Connection Issues',
    }
  ]
}


export const TroubleShooterCards: CollapseProps['items'] = [
  {
    key: 0,
    label: (
      <Row justify="space-between">
        <Col flex="auto" >
          <Typography.Title level={4}>Network</Typography.Title>
        </Col>
        <Button type="primary">Troubeshoot</Button>
      </Row>
    ),
    children: <>
      <PatchWorkSteps data={TroubleshootSteps.network} />
    </>
  },
  {
    key: 1,
    label: (
      <Row justify="space-between">
        <Col flex="auto" >
          <Typography.Title level={4}>File System</Typography.Title>
        </Col>
        <Button type="primary">Troubeshoot</Button>
      </Row>
    ),
    children: <>
      <PatchWorkSteps data={TroubleshootSteps.network} />
    </>
  },
  {
    key: 2,
    label: (
      <Row justify="space-between">
        <Col flex="auto" >
          <Typography.Title level={4}>Services Errors</Typography.Title>
        </Col>
        <Button type="primary">Troubeshoot</Button>
      </Row>
    ),
    children: <>
      <PatchWorkSteps data={TroubleshootSteps.network} />
    </>
  },
  {
    key: 3,
    label: (
      <Row justify="space-between">
        <Col flex="auto" >
          <Typography.Title level={4}>Firewall</Typography.Title>
        </Col>
        <Button type="primary">Troubeshoot</Button>
      </Row>
    ),
    children: <>
      <PatchWorkSteps data={TroubleshootSteps.network} />
    </>
  },

]



export const troubleShootOptions: { label: string; value: string }[] = [
  {
    label: '',
    value: ''
  },
  {
    label: 'Network',
    value: 'network'
  },
  {
    label: 'Security',
    value: 'security'
  }
]
