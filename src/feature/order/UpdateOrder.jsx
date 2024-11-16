import { useFetcher } from "react-router-dom"

export default function UpdateOrder() {
    const fetcher = useFetcher()
    return(
        <fetcher.Form>
            <button className="btn btn-warning rounded-pill text-uppercase px-3 py-2 mt-2">Make priority</button>
        </fetcher.Form>
    )
}