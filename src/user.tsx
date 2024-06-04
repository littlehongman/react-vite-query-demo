import { UseQueryOptions, useQueries } from "react-query";
import { fetchUserById } from "./query";
import { useEffect } from "react";

const User = () => {
    const userId: number[] = [1, 2, 3, 4, 5]

    const result = useQueries(
        userId.map((idx) => {
            return {
                queryKey: ['user', idx],
                queryFn: () => fetchUserById(idx),
            }
        }),
    )

    const isLoading = result.some(re => re.isLoading)

    return (
        <>
            {!isLoading && result.map((res, idx) => {
                return (
                    <div key={idx}>
                        <h3>{res.data?.name}</h3>
                        <p>{res.data?.username}</p>
                        <p>{res.data?.email}</p>
                    </div>
                )
            })}
        </>
    )


}


export default User;