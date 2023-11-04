import { useQuery } from '@tanstack/react-query'
import { fetchAllNeko } from '../apis/apiClient'
import { neko } from '../../models/neko'

export default function NekoList() {
  const {
    data: nekoList,
    isError,
    isLoading,
  } = useQuery(['neko'], fetchAllNeko)

  // want a useQuery

  if (isError) {
    return <p>beep boop something went wrong!</p>
  }

  if (isLoading) {
    return <p>Neko are formulating...</p>
  }

  // do iserror and isloading too
  return (
    // probably map over array containing list of neko
    // do the whole <li> with key being index
    <>
      <div className="homepage">
        <div className="nekoList">
          <ul>
            {nekoList.map((n: neko, index: number) => {
              return (
                <li key={index}>
                  {''}
                  {n.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
