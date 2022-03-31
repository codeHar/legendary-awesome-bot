import { Component, OnInit } from '@angular/core';
import { BotService } from '../../bot.service';
import * as mapboxgl from "mapbox-gl"
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lokeshon',
  templateUrl: './lokeshon.component.html',
  styleUrls: ['./lokeshon.component.css']
})
export class LokeshonComponent implements OnInit {
  lokeshon:string

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng = 85.3240;
  lat = 27.7172;
  marker:mapboxgl.Marker
  

  constructor(private botService:BotService) { 
  }

  ngOnInit(): void {
    this.botService.getLocation()
    .subscribe(
      (data:{location:string})=>{
        console.log("Data:",data)
        this.lokeshon=data.location
      }
    )

    // navigator.geolocation.getCurrentPosition((position)=>{
    //   console.log("Position:",position)
    //   console.log("PositionLatitude:",position.coords.latitude)
    // })

    this.initializeMap()
  }

  initializeMap(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude
        this.lng=position.coords.longitude
        console.log("Position:",position)
        console.log("PositionLatitude:",position.coords.latitude)
      })
    }
    this.buildMap()
    
  }

  buildMap(){
    mapboxgl.accessToken = environment.mapBoxKey;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());


    this.map.flyTo({
      center:[this.lng,this.lat]
    })

    this.marker=new mapboxgl.Marker({
      color:"#21A4BD",
      draggable:true
    })
    .setLngLat([this.lng,this.lat])
    .addTo(this.map)
  }

  findLocation(location:HTMLInputElement){
    console.log("Location: "+location.value)
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.value}.json?proximity=${this.lng},${this.lat}&access_token=${environment.mapBoxKey}`)
    .then(res=>res.json())
    .then(data=>{
      console.log("Data:",data)
      let loc=data.features[0].center
      this.lng=loc[0]
      this.lat=loc[1]

      this.map.flyTo({
        center:[this.lng,this.lat]
      })

      this.marker.setLngLat([this.lng,this.lat])
    })
  }

}
