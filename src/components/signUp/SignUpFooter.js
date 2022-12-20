import React from 'react'
import {Wrap, Stack, Img} from '../ui/index'
import {appStore, googlePlay} from '../../asset/signUp/index'
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'

const SignUpFooter = ({isLogin}) => {
  console.log('signup footer')
  const navigate = useNavigate()

  return (
    <Stack direction='column'>
      <Wrap style={{backgroundColor: isLogin ? 'white' : 'none'}} mg='1rem 0'>
        <div style={{fontWeight: '600', margin: '1rem 0'}}>
          계정이 있으신가요?{' '}
          <span
            style={{color: 'var(--color-primary)', cursor: 'pointer'}}
            onClick={() => navigate(isLogin ? '/sign-up' : '/login')}
          >
            {isLogin ? '가입하기' : '로그인'}
          </span>
        </div>
      </Wrap>
    </Stack>
  )
}

export default SignUpFooter
SignUpFooter.propTypes = {
  isLogin: PropTypes.bool,
}
