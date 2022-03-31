import { Component, OnInit } from '@angular/core';
import { BotService } from '../../bot.service';
import * as mapBoxgl from "mapbox-gl"
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lokeshon',
  templateUrl: './lokeshon.component.html',
  styleUrls: ['./lokeshon.component.css']
})
export class LokeshonComponent implements OnInit {
  lokeshon:string

  map:mapBoxgl.Map
  style="mapbox://styles/mapbox/streets-v11"
  lat=37.75
  lng=-122.41

  constructor(private botService:BotService) { 
    mapBoxgl.accessToken=environment.mapBoxKey
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
        this.map.flyTo({
          center:[this.lng,this.lat]
        })

        console.log("Position:",position)
        console.log("PositionLatitude:",position.coords.latitude)
      })
    }

    this.buildMap()
  }

  buildMap(){
    this.map=new mapBoxgl.Map({
      container:"map",
      style:this.style,
      zoom:13,
      center:[this.lng,this.lat]
    })

    console.log("builded map")
  }

}
