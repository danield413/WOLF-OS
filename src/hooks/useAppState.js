import { useContext } from "react"
import { WolfOSContext } from "../globalstate/context"

export const useAppState = () => {

    const app = useContext(WolfOSContext)

    return app
}