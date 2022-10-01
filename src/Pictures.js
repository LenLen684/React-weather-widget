import React from "react";

function BigPic({type}){
    // const source = 
    console.log(`${process.env.PUBLIC_URL}${img_name(type, true)}`)
    return <img 
    src={`${process.env.PUBLIC_URL}${img_name(type, true)}`}
    alt=""
    className="background"
    />;
}

function Icon({type}){
    return (
        <img 
        src={`${process.env.PUBLIC_URL}${img_name(type, false)}`}
        className="ico"
        alt=""
        />
        );
    }
    
function img_name(type, isBackground){
    const sn = 0, mst = 0
    const cdbg = 3, cnbg = 3, snbg = 3
    const cd = 4, fcd = 4, scd = 4, bcd = 4, sr = 4, ts = 4, rd = 4
    const cn = 4, fcn = 4, scn = 4, bcn = 4, rn = 4 

    console.log(type, "background:", isBackground)
    const img = type.substring(0, type.length-1);
    const suffix = ".png"
    if(isBackground){
        const prefix = "/pics/bg_";
        if(type.includes("d")){
            // This switch is for when or if I want to add new day backgrounds
            let name = "";
            switch(img){
                case"01":
                case"02":
                name = `cd${Math.floor(Math.random() * cdbg)}`;
                break;
                default:
                    name = `cd${Math.floor(Math.random() * cdbg)}`;
                    break;
                } 
                return `${prefix}${name}${suffix}`
        }else{
            let name = "";
            switch(img){
                case"01":
                case"02":
                case"03":
                    name = `cn${Math.floor(Math.random() * cnbg)}`
                    break;
                case"04":
                case"09":
                case"10":
                case"11":
                    name = `sn${Math.floor(Math.random() * snbg)}`
                    break;
                // Since I don't have snowy or misty backgrounds, we'll use the clear one
                // case"13":
                //     return
                // case"50":
                //     return
                default:
                    name = `cn${Math.floor(Math.random() * cnbg)}`
            }
            return `${prefix}${name}${suffix}`

        }
    }else{
        const prefix = "/pics/";
        if(type.includes("d")){
            let name = "";
            switch(img){
                //01 clear sky
                case"01":
                name = `cd${Math.floor(Math.random() * cd)}`;
                break;
                //02 few clouds
                case"02":
                name = `fcd${Math.floor(Math.random() * fcd)}`;
                break; 
                //03 scattered clouds
                case"03":
                name = `scd${Math.floor(Math.random() * scd)}`;
                break;
                //04 broken clouds
                case"04":
                name = `bcd${Math.floor(Math.random() * bcd)}`;
                break;
                //09 shower rain
                case"09":
                name = `sr${Math.floor(Math.random() * sr)}`;
                break;
                //10 rain
                case"10":
                name = `rd${Math.floor(Math.random() * rd)}`;
                break;
                //11 thunderstorm
                case"11":
                name = `ts${Math.floor(Math.random() * ts)}`;
                break;
                //13 snow
                case"13":
                name = `sn${Math.floor(Math.random() * sn)}`;
                break;
                //50 mist
                case"50":
                name = `mst${Math.floor(Math.random() * mst)}`;
                break;
                default:
                    name = `cd${Math.floor(Math.random() * cd)}`;
                    break;
            }
            return `${prefix}${name}${suffix}`
        }else{
            let name = "";
            switch(img){
                //01 clear sky
                case"01":
                name = `cn${Math.floor(Math.random() * cn)}`;
                break;
                //02 few clouds
                case"02":
                name = `fcn${Math.floor(Math.random() * fcn)}`;
                break; 
                //03 scattered clouds
                case"03":
                name = `scn${Math.floor(Math.random() * scn)}`;
                break;
                //04 broken clouds
                case"04":
                name = `bcn${Math.floor(Math.random() * bcn)}`;
                break;
                //09 shower rain
                case"09":
                name = `sr${Math.floor(Math.random() * sr)}`;
                break;
                //10 rain
                case"10":
                name = `rn${Math.floor(Math.random() * rn)}`;
                break;
                //11 thunderstorm
                case"11":
                name = `ts${Math.floor(Math.random() * ts)}`;
                break;
                //13 snow
                case"13":
                name = `sn${Math.floor(Math.random() * sn)}`;
                break;
                //50 mist
                case"50":
                name = `mst${Math.floor(Math.random() * mst)}`;
                break;
                default:
                    name = `cn${Math.floor(Math.random() * cn)}`;
                    break;
            }
            return `${prefix}${name}${suffix}`

        }
    }

}

    export {BigPic, Icon}