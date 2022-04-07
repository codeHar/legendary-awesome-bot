import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folex',
  templateUrl: './folex.component.html',
  styleUrls: ['./folex.component.css']
})
export class FolexComponent implements OnInit {

  countries=["USD","INR","EUR","AUD","GBP","CAD"]
  currentCur="USD"
  userGivenAmt=0
  rupees=0
  valueOfCurrencyPerUnit=1

  constructor() { }

  ngOnInit(): void {
    this.updateCurrency()
  }


  changeCurrency(value){
    console.log("Event:",value)
    this.currentCur=value
    console.log(value)

    this.updateCurrency()
  }

  async getCurrencyValue(){
   let res= await fetch(`https://www.nrb.org.np/api/forex/v1/rates?&page=1&per_page=20&from=2022-03-24&to=2022-03-24`)
   let data=await res.json()
   return data
  }

  updateCurrency(){
    this.getCurrencyValue().then(data=>{
      let valueOfCurrency=data.data.payload[0].rates.find(item=>item.currency.iso3==this.currentCur)
      this.valueOfCurrencyPerUnit= Number(valueOfCurrency.buy)/valueOfCurrency.currency.unit
      this.rupees=this.userGivenAmt*this.valueOfCurrencyPerUnit
    })
  }

  convertCurrency(){
    this.rupees=this.userGivenAmt*this.valueOfCurrencyPerUnit
    console.log("Rupees:",this.rupees)
  }


}
