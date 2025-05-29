export interface Part {
  id: string;
  partNumber: string;
  name: string;
  description: string;
  image?: string;
  category: string;
  trackingType: 'Serial' | 'Lot' | 'None';
  unit?: string;
  revision?: string;
  isAssembly?: boolean;
}

export interface EbomItem {
  id: string;
  partNumber: string;
  name: string;
  revision: string;
  qtyRequired: number;
  qtyAvailable: number;
  source: string;
  image?: string;
}

export interface InventoryItem {
  id: string;
  trackingNumber: string;
  revision: string;
  quantity: number;
  location: string;
  status: 'Available' | 'Reserved' | 'Used' | 'Planned' | 'Scrapped';
  manufacturer: string;
  created: string;
}

export interface Activity {
  id: string;
  type: 'part_update' | 'inventory' | 'workflow' | 'comment';
  user: string;
  time: string;
  description: string;
  details?: string;
  comments?: {
    user: string;
    time: string;
    text: string;
  }[];
}