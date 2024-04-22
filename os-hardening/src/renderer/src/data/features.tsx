export enum Categories {
  'Basics',
  'Applications',
  'Services',
  'Security'
}
export enum inputTypes {
  'switch' = 'switch',
  'password' = 'password',
  'text' = 'text',
  'select' = 'select',
  'multiSelect' = 'multiSelect'
}

interface Input {
  type: inputTypes
  label: String
  name: String
}

export interface Feature {
  name: String
  preferenceName: String
  description: String
  label: String
  category: Categories
  inputType: inputTypes
  children?: Input[]
}
const features: Feature[] = [
  {
    name: 'Create User',
    preferenceName: 'createUserPreference',
    description: 'Create a user on the system',
    label: 'Do you want to create a user?',
    category: Categories.Basics,
    inputType: inputTypes.switch,
    children: [
      {
        type: inputTypes.text,
        label: 'Enter Username',
        name: 'username'
      },
      {
        type: inputTypes.password,
        label: 'Enter Password',
        name: 'password'
      }
    ]
  },
  {
    name: 'USB Ports',
    preferenceName: 'USBPortsPreference',
    description: 'Disable USB Ports',
    label: 'Disable USB Ports',
    category: Categories.Basics,
    inputType: inputTypes.switch
  },
  {
    name: 'Root Login',
    preferenceName: 'rootLoginPreference',
    description: 'Disable Root Login',
    label: 'Disable Root Login',
    category: Categories.Basics,
    inputType: inputTypes.switch
  },
  {
    name: 'GRUB Password',
    preferenceName: 'GRUBPasswordPreference',
    description: 'Set a GRUB Password',
    label: 'Set a GRUB Password',
    category: Categories.Basics,
    inputType: inputTypes.switch,
    children: [
      {
        type: inputTypes.password,
        label: 'Enter GRUB Password',
        name: 'password'
      }
    ]
  },
  {
    name: 'MAC Randomization',
    preferenceName: 'MACRandomizationPreference',
    description: 'Enable MAC Randomization',
    label: 'Enable MAC Randomization',
    category: Categories.Basics,
    inputType: inputTypes.switch
  },
  {
    name: 'Is Sudoer',
    preferenceName: 'isSudoerPreference',
    description: 'Is a Sudoer',
    label: 'Is a Sudoer',
    category: Categories.Basics,
    inputType: inputTypes.switch
  },
  {
    name: 'Mac Address Randomization',
    preferenceName: 'macAddressRandomizationPreference',
    description: 'Enable Mac Address Randomization',
    label: 'Enable Mac Address Randomization',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Address Space Layout Randomization',
    preferenceName: 'ASLRPreference',
    description: 'Enable Address Space Layout Randomization',
    label: 'Enable Address Space Layout Randomization',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'UFW Loopback Traffic',
    preferenceName: 'UFWLoopbackPreference',
    description: 'Enable UFW Loopback Traffic',
    label: 'Enable UFW Loopback Traffic',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Kernel Hardening',
    preferenceName: 'kernelHardeningPreference',
    description: 'Enable Kernel Hardening',
    label: 'Enable Kernel Hardening',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Disable DCCP',
    preferenceName: 'disableDCCPPreference',
    description: 'Disable DCCP',
    label: 'Disable DCCP',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Disable ICMP Redirects',
    preferenceName: 'disableICMPRedirectsPreference',
    description: 'Disable ICMP Redirects',
    label: 'Disable ICMP Redirects',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Configure Mail Transfer Agent',
    preferenceName: 'configureMailTransferAgentPreference',
    description: 'Configure Mail Transfer Agent for local-only mode',
    label: 'Configure Mail Transfer Agent for local only',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Restrict Core Dumps',
    preferenceName: 'restrictCoreDumpsPreference',
    description: 'Restrict Core Dumps',
    label: 'Restrict Core Dumps',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'App Armor',
    preferenceName: 'appArmorPreference',
    description: 'Enable App Armor',
    label: 'Enable App Armor',
    category: Categories.Security,
    inputType: inputTypes.switch
  },
  {
    name: 'Packet Redirection',
    preferenceName: 'packetRedirectionPreference',
    description: 'Enable Packet Redirection',
    label: 'Enable Packet Redirection',
    category: Categories.Security,
    inputType: inputTypes.switch
  }
]
export default features
