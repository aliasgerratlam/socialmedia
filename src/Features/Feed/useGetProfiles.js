import { useQuery } from "@tanstack/react-query"
import { getProfiles } from "../../services/apiPosts"

export const useGetProfiles = () => {
    const {isPending, data, error} = useQuery({
        queryKey: ['profiles'],
        queryFn: getProfiles
    })

    return { isPending, data, error }
};

export default useGetProfiles;