import { useEffect, useState } from "react";
import useDidMountEffect from "../../hooks/UseDidMountEffect";
import { KakaoMapContainer } from "./styles";
import { KakaoMapType } from "./types";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap({ handler }: KakaoMapType) {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.273629699499,
            127.12928668205
          ),
          level: 5,
        };

        const newMap = new window.kakao.maps.Map(container, options);
        const newMarker = new window.kakao.maps.Marker();
        setMap(newMap);
        setMarker(newMarker);
      });
    }
  }, []);

  useDidMountEffect(() => {
    if (map && window.kakao && window.kakao.maps) {
      window.kakao.maps.event.addListener(
        map,
        "click",
        function (mouseEvent: any) {
          const geocoder = new window.kakao.maps.services.Geocoder();

          geocoder.coord2Address(
            mouseEvent.latLng.getLng(),
            mouseEvent.latLng.getLat(),
            (result: any, status: any) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const addr = result[0].road_address
                  ? result[0].road_address.address_name
                  : result[0].address.address_name;

                // 주소 값 상위 컴포넌트로 전달
                handler(addr);

                // 기존 마커 제거 후 새로운 마커 적용
                marker.setMap(null);
                marker.setPosition(mouseEvent.latLng);
                marker.setMap(map);
              }
            }
          );
        }
      );
    }
  }, [map, marker]); // map과 marker가 정의된 후 실행

  return <KakaoMapContainer id="map"></KakaoMapContainer>;
}
