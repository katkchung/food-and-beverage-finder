import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"

const RestaurantContext = createContext<
  | {
      id: string | undefined
      setId: Dispatch<SetStateAction<string | undefined>>
    }
  | undefined
>(undefined)

function RestaurantProvider({ children }: any) {
  const [id, setId] = useState<string | undefined>()

  const value = { id, setId }
  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  )
}

// https://kentcdodds.com/blog/how-to-use-react-context-effectively#the-custom-consumer-hook
// ^^ this does look nice
export function useRestaurantContext() {
  const context = useContext(RestaurantContext)
  if (context === undefined) {
    throw new Error(
      "useRestaurantContext must be used within a RestaurantProvider"
    )
  }
  return context
}

export { RestaurantProvider }
