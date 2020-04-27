import {Mobile} from './mobile'
class BasicPhone extends Mobile
{
mobileType:string;
constructor(mobileId:number, mobileName:string, mobileCost:number,mobileType:string)
{
super(mobileId,mobileName,mobileCost);
this.mobileType=mobileType;
}
printMobileDetails():void{
    console.log("MobileId:"+this.mobileId);
    console.log("MobileName:"+this.mobileName);
    console.log("MobileCost:"+this.mobileCost);
console.log("MobileType:"+this.mobileType);
}
}
var b=new BasicPhone(101, "MI", 1400, "BasicPhone");
b.printMobileDetails();