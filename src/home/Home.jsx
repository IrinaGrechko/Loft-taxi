import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import'./home.css'
import {withAuth} from "../AuthContext";

export class Home extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
      mapboxgl.accessToken = "pk.eyJ1IjoicmlzaGE3NzciLCJhIjoiY2wxZ3hmbHJtMWZibTNmcDNkbzVqaHdoMyJ9.y5NvOwPkI6y3YZ_iW6TMOw";
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [30.3056504, 59.9429126],
        zoom: 10
      })

    }

    componentWillUnmount() {
      this.map.remove()
    }

  render() {
        return (
          <div className="map-wrapper">
              <div data-testid="map" className="map" ref={this.mapContainer} />
          </div>
        )
    }
};

export const HomeWithAuth = withAuth(Home);
