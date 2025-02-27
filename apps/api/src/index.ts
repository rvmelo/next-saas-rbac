import {ability} from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', "User")
const userCanDeleteUsers = ability.can('delete', "User")

const userCannotDeleteUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteUsers)
console.log(userCannotDeleteUsers)