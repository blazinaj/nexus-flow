import { Part, EbomItem, InventoryItem, Activity } from '../types/Part';

export const mockParts: Part[] = [
  {
    id: 'P-1001',
    partNumber: 'ENG-100',
    name: 'Turbine Engine Assembly',
    description: 'Complete turbine engine assembly for power generation',
    image: 'https://images.pexels.com/photos/2937629/pexels-photo-2937629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Assembly',
    trackingType: 'Serial',
    isAssembly: true
  },
  {
    id: 'P-1002',
    partNumber: 'HOUSING-200',
    name: 'Turbine Housing',
    description: 'Precision machined housing for turbine components',
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Machined',
    trackingType: 'Lot'
  },
  {
    id: 'P-1003',
    partNumber: 'BLADE-300',
    name: 'Turbine Blade',
    description: 'High-performance turbine blade made from titanium alloy',
    image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Machined',
    trackingType: 'Lot'
  },
  {
    id: 'P-1004',
    partNumber: 'CTRL-400',
    name: 'Control System',
    description: 'Electronic control system for turbine operation',
    image: 'https://images.pexels.com/photos/3912990/pexels-photo-3912990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronic',
    trackingType: 'Serial'
  },
  {
    id: 'P-1005',
    partNumber: 'SENSOR-500',
    name: 'Temperature Sensor',
    description: 'High-precision temperature sensor for monitoring',
    image: 'https://images.pexels.com/photos/6357490/pexels-photo-6357490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'COTS',
    trackingType: 'Lot'
  },
  {
    id: 'P-1006',
    partNumber: 'SEAL-600',
    name: 'High-Temp Seal',
    description: 'Thermal resistant seal for extreme environments',
    category: 'COTS',
    trackingType: 'Lot'
  },
  {
    id: 'P-1007',
    partNumber: 'BEARING-700',
    name: 'Precision Bearing',
    description: 'High-speed precision bearing for turbine shaft',
    category: 'COTS',
    trackingType: 'Lot'
  },
  {
    id: 'P-1008',
    partNumber: 'MOUNT-800',
    name: 'Engine Mount Assembly',
    description: 'Vibration dampening mount system for engine',
    category: 'Assembly',
    trackingType: 'Lot',
    isAssembly: true
  }
];

export const mockEbomItems: EbomItem[] = [
  {
    id: '1',
    partNumber: 'HOUSING-200',
    name: 'Turbine Housing',
    revision: 'A',
    qtyRequired: 1,
    qtyAvailable: 5,
    source: 'user',
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    partNumber: 'BLADE-300',
    name: 'Turbine Blade',
    revision: 'B',
    qtyRequired: 24,
    qtyAvailable: 50,
    source: 'user',
    image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    partNumber: 'CTRL-400',
    name: 'Control System',
    revision: 'A',
    qtyRequired: 1,
    qtyAvailable: 3,
    source: 'import',
    image: 'https://images.pexels.com/photos/3912990/pexels-photo-3912990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    partNumber: 'SENSOR-500',
    name: 'Temperature Sensor',
    revision: 'A',
    qtyRequired: 4,
    qtyAvailable: 2,
    source: 'user',
    image: 'https://images.pexels.com/photos/6357490/pexels-photo-6357490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    partNumber: 'SEAL-600',
    name: 'High-Temp Seal',
    revision: 'A',
    qtyRequired: 8,
    qtyAvailable: 20,
    source: 'user'
  }
];

export const mockInventoryItems: InventoryItem[] = [
  {
    id: '1',
    trackingNumber: 'SN-12345',
    revision: 'A',
    quantity: 1,
    location: 'Warehouse A',
    status: 'Available',
    manufacturer: 'In-house',
    created: '2025-03-15'
  },
  {
    id: '2',
    trackingNumber: 'SN-12346',
    revision: 'A',
    quantity: 1,
    location: 'Assembly Line',
    status: 'Reserved',
    manufacturer: 'In-house',
    created: '2025-03-10'
  },
  {
    id: '3',
    trackingNumber: 'SN-12347',
    revision: 'B',
    quantity: 1,
    location: 'Test Lab',
    status: 'Used',
    manufacturer: 'In-house',
    created: '2025-02-28'
  },
  {
    id: '4',
    trackingNumber: 'LOT-567',
    revision: 'A',
    quantity: 10,
    location: 'Warehouse B',
    status: 'Available',
    manufacturer: 'Supplier Inc.',
    created: '2025-03-01'
  },
  {
    id: '5',
    trackingNumber: 'LOT-568',
    revision: 'A',
    quantity: 5,
    location: 'Incoming QC',
    status: 'Planned',
    manufacturer: 'Supplier Inc.',
    created: '2025-03-20'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'part_update',
    user: 'John Smith',
    time: '2 hours ago',
    description: 'Updated part description and added new custom fields',
    details: 'Changed description from "High-performance turbine" to "High-performance turbine blade made from titanium alloy"'
  },
  {
    id: '2',
    type: 'inventory',
    user: 'Sarah Johnson',
    time: 'Yesterday',
    description: 'Added 10 units to inventory',
    details: 'Location: Warehouse A, Lot: LOT-567, Status: Available'
  },
  {
    id: '3',
    type: 'workflow',
    user: 'Mike Chen',
    time: '3 days ago',
    description: 'Completed Quality Control workflow',
    details: 'All inspection steps passed. Approved for production use.'
  },
  {
    id: '4',
    type: 'comment',
    user: 'Emily Davis',
    time: '1 week ago',
    description: 'Added comment regarding material specifications',
    details: 'We should consider upgrading to the new titanium alloy that was tested last month. Initial results showed 15% better performance.',
    comments: [
      {
        user: 'Robert Wilson',
        time: '6 days ago',
        text: 'I agree, the new alloy performed exceptionally well in high temperature tests.'
      },
      {
        user: 'John Smith',
        time: '5 days ago',
        text: 'Let\'s discuss this in the next engineering meeting. We need to evaluate the cost impact.'
      }
    ]
  }
];