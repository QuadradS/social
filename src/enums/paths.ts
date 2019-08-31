export default class Paths {
    private static apiV1BaseUrl = '/api'
  
    private static assistanceBaseUrl = `${Paths.apiV1BaseUrl}/users`
    private static authBaseUrl = `${Paths.apiV1BaseUrl}/auth`
    private static codeBaseUrl = `${Paths.apiV1BaseUrl}/code`
    private static passwordBaseUrl = `${Paths.apiV1BaseUrl}/password`

    static root = class {
      static login = `${Paths.authBaseUrl}/login`
      static phone = `${Paths.authBaseUrl}/phone`
      static phoneCallback = `${Paths.authBaseUrl}/phone/callback`
      static refresh = `${Paths.authBaseUrl}/refresh`
      static callBackSVC = `${Paths.authBaseUrl}/:svc/callback`

      static registrationVerify = `${Paths.codeBaseUrl}/registration/verify`
      static verify = `${Paths.codeBaseUrl}/verify`

      static changePassword = `${Paths.passwordBaseUrl}/change`
      static resetPassword = `${Paths.passwordBaseUrl}/reset`

    }
    static users = class {
      static create = `${Paths.assistanceBaseUrl}/create`
      static getOne = `${Paths.assistanceBaseUrl}/get-one`
      static getAll = `${Paths.assistanceBaseUrl}/doGetAll`
    }


  }
  