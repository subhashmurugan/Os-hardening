import React, { useState } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'

interface DataType {
  key: React.Key
  systemName: string
  ipAddress: number
  actions: string
  time: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Process',
    dataIndex: 'process'
  },
  {
    title: 'TimeStamp',
    dataIndex: 'timestamp'
  },
  {
    title: 'Message',
    dataIndex: 'message'
  }
]

interface tableDataType {
  timestamp: string
  process: string
  message: string
}

// Your data array
const data: tableDataType[] = [
  {
    timestamp: '19:34:11',
    process: 'gnome-shell:',
    message:
      'Received error from D-Bus search provider org.gnome.Characters.desktop: Gio.DBusError: GDBus.Error:org.freedesktop.DBus.Error.NoReply: Message recipient disconnected from message bus without replying'
  },
  {
    timestamp: '19:34:11',
    process: 'dbus-daemon:',
    message:
      "[session uid=1000 pid=1395] Successfully activated service 'org.gnome.seahorse.Application'"
  },
  {
    timestamp: '19:34:11',
    process: 'nautilus:',
    message: 'Source ID 176 was not found when attempting to remove it'
  },
  {
    timestamp: '19:34:11',
    process: 'gnome-character:',
    message: 'JS LOG: Characters Application exiting'
  },
  {
    timestamp: '19:34:10',
    process: 'systemd:',
    message:
      'Started app-gnome-org.gnome.DejaDup.Monitor-2689.scope - Application launched by gnome-session-binary.'
  },
  {
    timestamp: '19:34:02',
    process: 'dbus-daemon:',
    message: "[session uid=1000 pid=1395] Successfully activated service 'org.gnome.Logs'"
  },
  {
    timestamp: '19:34:01',
    process: 'gnome-shell:',
    message:
      'Received error from D-Bus search provider org.gnome.Characters.desktop during GetResultMetas: Gio.DBusError: GDBus.Error:org.freedesktop.DBus.Error.NoReply: Message recipient disconnected from message bus without replying'
  },
  {
    timestamp: '19:34:01',
    process: 'gnome-character:',
    message: 'JS LOG: Characters Application exiting'
  },
  {
    timestamp: '19:34:01',
    process: 'dbus-daemon:',
    message: "[session uid=1000 pid=1395] Successfully activated service 'org.gnome.DiskUtility'"
  },
  {
    timestamp: '19:34:01',
    process: 'gnome-character:',
    message: 'JS LOG: Characters Application started'
  },
  {
    timestamp: '19:34:01',
    process: 'dbus-daemon:',
    message:
      "[session uid=1000 pid=1395] Activating service name='org.gnome.DiskUtility' requested by ':1.117' (uid=1000 pid=2548 comm='/usr/bin/nautilus --gapplication-service' label='unconfined')"
  },
  {
    timestamp: '19:34:01',
    process: 'systemd:',
    message: 'Started systemd-timedated.service - Time & Date Service.'
  },
  {
    timestamp: '19:34:01',
    process: 'dbus-daemon:',
    message: "[system] Successfully activated service 'org.freedesktop.timedate1'"
  },
  {
    timestamp: '19:34:01',
    process: 'systemd:',
    message: 'Starting systemd-timedated.service - Time & Date Service...'
  },
  {
    timestamp: '19:34:01',
    process: 'dbus-daemon:',
    message:
      "[system] Activating via systemd: service name='org.freedesktop.timedate1' unit='dbus-org.freedesktop.timedate1.service' requested by ':1.100' (uid=1000 pid=2547 comm='/usr/bin/gnome-calendar --gapplication-service' label='unconfined')"
  }
]

const DataTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
}

export default DataTable
