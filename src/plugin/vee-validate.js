import * as yup from 'yup'
export const schema = yup.object({
  //手机号码
  phone: yup
    .string()
    .length(11, '手机号码长度不正确！')
    .required('此项不能为空！')
    // 匹配手机号码
    .matches(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, '手机号码格式不正确！'),
  //验证码
  code: yup
    .string()
    .length(6, '验证码长度不正确！')
    .required('此项不能为空！')
    // 匹配0-9的数字
    .matches(/^[0-9]*$/, '验证码格式不正确！'),
  //密码
  password: yup
    .string()
    .min(8, '密码长度不少于8位')
    .max(16, '密码长度不大于16位')
    .required('此项不能为空！')
    .matches(/^[A-Za-z0-9]+$/, '密码由数字和26个英文字母组成'),
  //确认密码
  comfirmPsw: yup
    .string()
    .required('此项不能为空！')
    .test('', '两次的密码不相同', function (value) {
      const password = this.parent.password
      if (value === password) {
        return true
      } else {
        return false
      }
    }),
  // 复选框
  check: yup.boolean().oneOf([true], '必须同意这个协议')
})
