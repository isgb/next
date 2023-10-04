// import { useRouter } from "next/router";
// import { useEffect,useState} from 'react';
import useIsMounted from "../../../hooks/useIsMounted";
import { useRouter } from "next/router";

const ChanchitoDinamico = () => {
    // const [loaded,setLoaded] = useState(false);
    // const router = useRouter()

    // useEffect(() => {
    //     if(router.isReady){
    //         setLoaded(true)
    //     }
    // },[router.isReady])

    // if(!loaded){
    //     return null;
    // }

    // console.log({router}, router.query.id)
    
    const isMounted = useIsMounted();
    const router = useRouter()

    if(!isMounted){
        return null
    }

    console.log({router}, router.query.id)
    return(
        <div>
            <p>Chanchito Dinamico</p>
        </div>
    )
}

export default ChanchitoDinamico;