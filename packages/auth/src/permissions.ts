import { AbilityBuilder } from "@casl/ability"
import { AppAbility } from "."
import { User } from "./models/user"

export type TypePermissions = (user: User, builder: AbilityBuilder<AppAbility>) => void

type Role = 'ADMIN' | 'MEMBER'

export const permissions: Record<Role, TypePermissions> = {
    ADMIN(_, {can}){
        can('manage', 'all')
    },
    MEMBER(_, {can}){
        can('invite', 'User')
    }
}