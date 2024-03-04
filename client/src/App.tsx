import { useState } from 'react';
import { ConfigProvider, Space, Input, Divider, Form, Select, Button, Typography } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 32 },
};

const tailLayout = {
  wrapperCol: { offset: 12, span: 26 },
};


function App() {
  const [projectName, setProjectName] = useState('');
  const [packageManager, setPackageManager] = useState('npm');
  const [form] = Form.useForm();
  
const handleSubmit = async () => {
  const response = await fetch('/api/create-project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ projectName, packageManager }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log('Project created successfully:', data);
  } else {
    const error = await response.text();
    console.error('Failed to create project:', error);
  }
};


  const onFinish = (values: unknown) => {
    handleSubmit()
    console.log(values);
  };

  return (
    <>
      <ConfigProvider
        theme={{

          components: {
            Button: {
              colorPrimary: '#0041B9',
            },
            Input: {
              colorPrimary: '#932FEB',
            },
            Typography: {
              colorPrimary: '#FDFDFD',
            },

            Form: {
              colorPrimary: '#722ed1',
              labelColor: '#FFFFFF',
            },
          },
        }}
      >
        <Space direction="vertical" align="center">
          <Divider orientation="center">
            <Typography.Title level={1} code color='#FFFFFF' >Create a new React project</Typography.Title>
          </Divider>

          <Space direction="vertical" align="center">
            <Form
              form={form}
              {...layout}
              name="Create Project"
              layout='vertical'
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item name="name" label="Project Name" rules={[{ required: true }]}>
                <Input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}

                  placeholder="Project Name"
                  required />
              </Form.Item>
              <Form.Item name="node" label="Node Package Manager" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option and change input text above"
                  value={packageManager}
                  onChange={(e) => setPackageManager(e)}
                  allowClear
                >
                  <Option value="npm">npm</Option>
                  <Option value="yarn">yarn</Option>
                  <Option value="pnpm">pnpm</Option>
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Create Project
                </Button>

              </Form.Item>
            </Form>

          </Space>
        </Space>
      </ConfigProvider>

    </>
  );
}

export default App;
