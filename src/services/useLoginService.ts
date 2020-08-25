import { useFetch } from 'use-http'

import { Architecture } from '../lib/types'

export type LoginServiceData = {
    authToken: string,
    refreshToken: string,
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    pbxRoles: string[]
}

export type LoginCommands = {
    login: (credentials: { email: string, password: string }) => Promise<LoginServiceData | void>
}

const useLoginService: Architecture.ServiceHook<{}, LoginCommands> = () => {
    const { post, response, loading, error } = useFetch('https://restapi-devel.ipex.cz/v1/sso/login')

    const login = async (credentials: { email: string, password: string }) => {
        const loginData = await post(credentials)
        if (response.ok) {
            return {
                authToken: loginData.accessToken || "",
                refreshToken: loginData.refreshToken || "",
                userId: loginData.userId || "",
                firstName: loginData.firstName || "",
                lastName: loginData.lastName || "",
                email: loginData.email || "",
                pbxRoles: loginData.pbxRoles || []
            }
        }
    }

    return [{
        commands: {
            login
        },
        queries: {}
    }, { error, loading }]
}

export { useLoginService }