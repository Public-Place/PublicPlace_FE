export interface KakaoMapType {
  handleAddressChange?: (addr: string) => void;
  handleSetLatLng?: (Lat: number, Lng: number) => void;
  Lat?: number;
  Lng?: number;
  isShow?: boolean;
  height?: string;
}
