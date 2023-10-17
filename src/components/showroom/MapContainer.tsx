import styled from "@emotion/styled";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapContainer = ({ address }: { address: string }) => {
  //
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new window.kakao.maps.Map(container, options);
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: coords
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div class="infowindow" style="width:200px;text-align:center;padding:10px;font-size:14px;background-color:var(--main-red);color:white;border-radius:10px;">${name}</div>`
        });
        infowindow.open(map, marker);

        const infoTitle = document.querySelectorAll(".infowindow");

        infoTitle.forEach(function (e: any) {
          e.parentElement.parentElement.style.border = "none";
          e.parentElement.parentElement.style.background = "none";
        });

        map.setCenter(coords);
      }
    });
  }, [address]);

  return (
    <Container>
      <Map id="map" style={{ width: "100%", height: "500px" }} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;

  p {
    margin-bottom: 10px;
  }
`;

const Map = styled.div`
  border-radius: 10px;
`;
