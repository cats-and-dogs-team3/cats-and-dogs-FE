import React from 'react'
import {Wrap, Stack, Img} from '../ui'
import {appStore, googlePlay} from '../../assets'
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'

const SignUpFooter = ({isLogin}) => {
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
      <Wrap borderColor={isLogin && 'none'}>
        <Stack>
          <span style={{marginBottom: '1rem'}}>앱을 다운로드 하세요.</span>
          <Stack gap='0.8rem' direction='row'>
            <Img wd='13.5rem' hg='4rem' style={{cursor: 'pointer'}} src={googlePlay} />
            <Img wd='13.5rem' hg='4rem' style={{cursor: 'pointer'}} src={appStore} />
          </Stack>
        </Stack>
      </Wrap>
    </Stack>
  )
}

export default SignUpFooter
SignUpFooter.propTypes = {
  isLogin: PropTypes.bool,
}
