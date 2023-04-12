import { 
    FaScroll,Fa500Px,FaAccessibleIcon ,FaAccusoft,FaAcquisitionsIncorporated,FaAdn,
    FaAdversal,FaAffiliatetheme,FaAirbnb, FaAlgolia,FaAlipay,FaAmazonPay
} from 'react-icons/fa';
const pickColor = (colorList:Array<string>,colorChooses:{ [id: string]: string},id:number)=>{
    const color = colorChooses[colorList[id]]
    if(color) return color
    const index = Math.floor(Math.random() * colorList.length); 
    colorChooses[id] = colorList[index]
    return colorList[index]

}
export const iconValue = { color: "brown",size:'8em'}
export const colorList = ['black','green','grey','brown','red','pink','yellow']
const colorChooses :{ [id: string]: string} = {}
export const cardList = [
    {id:1,comp:<FaScroll/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:2,comp:<Fa500Px/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:3,comp:<FaAccessibleIcon/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:4,comp:<FaAccusoft/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:5,comp:<FaAcquisitionsIncorporated/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:6,comp:<FaAdn/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:7,comp:<FaAdversal/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:8,comp:<FaAffiliatetheme/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:9,comp:<FaAirbnb/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:10,comp:<FaAlgolia/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:11,comp:<FaAlipay/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:12,comp:<FaAmazonPay/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:1,comp:<FaScroll/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:2,comp:<Fa500Px/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:3,comp:<FaAccessibleIcon/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:4,comp:<FaAccusoft/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:5,comp:<FaAcquisitionsIncorporated/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:6,comp:<FaAdn/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:7,comp:<FaAdversal/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:8,comp:<FaAffiliatetheme/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:9,comp:<FaAirbnb/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:10,comp:<FaAlgolia/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:11,comp:<FaAlipay/>,color:pickColor(colorList,colorChooses,1),isTurnOver:false},
    {id:12,comp:<FaAmazonPay/>,color:pickColor(colorList,colorChooses,1,),isTurnOver:false}
]

