// import {isValidId, isValidName, isValidPhoneNumber, isValidPwd} from '../../utils/utility'

//초기 상태값 설정
const initialState = {
  phone: {value: '', isValid: false},
  name: {value: '', isValid: false},
  userId: {value: '', isValid: false},
  pwd: {value: '', isValid: false, isShown: false},
  form: {phoneNumber: '', realName: '', loginId: '', password: '', birthDate: '', accessToken: ''},
  loginForm: {loginId: '', password: ''},
}

//리듀서 설정
const signUp = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAN_UP': {
      return initialState
    }
    case 'SUBMIT_FORM': {
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      }
    }
    case 'SUBMIT_KAKAO_TOKEN': {
      return {
        ...state,
        form: {
          ...state.form,
          accessToken: action.payload,
        },
      }
    }
    case 'INPUT_PHONE': {
      return {
        ...state,
        phone: {
          value: action.payload,
          // isValid: isValidPhoneNumber(action.payload),
        },
      }
    }
    case 'INPUT_NAME': {
      return {
        ...state,
        name: {
          value: action.payload,
          // isValid: isValidName(action.payload),
        },
      }
    }
    case 'INPUT_USERID': {
      return {
        ...state,
        userId: {
          value: action.payload,
          // isValid: isValidId(action.payload),
        },
      }
    }
    case 'INPUT_PWD': {
      return {
        ...state,
        pwd: {
          ...state.pwd,
          value: action.payload,
          // isValid: isValidPwd(action.payload),
        },
      }
    }
    case 'SHOW_PWD': {
      return {
        ...state,
        pwd: {
          ...state.pwd,
          isShown: !state.pwd.isShown,
        },
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default signUp
