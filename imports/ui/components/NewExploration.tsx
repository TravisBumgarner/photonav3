import styled from 'styled-components'
import Autocomplete from 'react-google-autocomplete'
import React from 'react'
import GoogleMapReact from 'google-map-react'

const NewExplorationWrapper = styled.div`
  width: 80vw;
  height: 50vh;
`

type Location = { lat: number; lng: number; name: string }

type Place = {
  geometry: {
    location: {
      lat: () => number
      lng: () => number
    }
  }
  formatted_address: string
}

// -lng is west -lat is south
const randomStartCities: Location[] = [
  {
    lat: 42.3601,
    lng: -71.0589,
    name: 'Boston',
  },
]

const NewExploration = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(
    randomStartCities[0]
  )

  return (
    <NewExplorationWrapper>
      <h2>Where would you like to go?</h2>

      <Autocomplete
        style={{ width: '100%', boxSizing: 'border-box' }}
        onPlaceSelected={(place: Place) => {
          const lat = place.geometry.location.lat()
          const lng = place.geometry.location.lng()
          setSelectedLocation({ lat, lng, name: place.formatted_address })
        }}
        types={['(regions)']}
      />
      <GoogleMapReact
        center={selectedLocation}
        defaultZoom={11}
        options={{
          scaleControl: false,
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          zoomControl: false,
          fullscreenControl: false,
          overviewMapControl: false,
        }}
      />
    </NewExplorationWrapper>
  )
}

export default NewExploration
