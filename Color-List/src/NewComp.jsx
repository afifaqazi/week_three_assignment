import FirstComp from "./FirstComp"
import SecondComp from "./SecondComp"
export default function NewComp(){
    let isFirst = false
    if(isFirst){
            return(
                <FirstComp/>
            )
            }
        
    return(
        <SecondComp/>
    )
}