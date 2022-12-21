export const __cleanUp = () => {
    return {
      type: 'CLEAN_UP',
    }
  }
  export const __submitForm = payload => {
    return {
      type: 'SUBMIT_FORM',
      payload,
    }
  }
  export const __submitKakaoToken = payload => {
    return {
      type: 'SUBMIT_KAKAO_TOKEN',
      payload,
    }
  }
  export const __inputPhone = payload => {
    return {
      type: 'INPUT_PHONE',
      payload,
    }
  }
  export const __inputName = payload => {
    return {
      type: 'INPUT_NAME',
      payload,
    }
  }
  export const __inputUserId = payload => {
    return {
      type: 'INPUT_USERID',
      payload,
    }
  }
  export const __inputPwd = payload => {
    return {
      type: 'INPUT_PWD',
      payload,
    }
  }
  export const __showPwd = () => {
    return {
      type: 'SHOW_PWD',
    }
  }
  