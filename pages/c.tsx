import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
// import CryptoJS from 'crypto-js'
const CryptoJS = require('crypto-js');

// ?payload=U2FsdGVkX1%2BUX%2BY4Y71E%2Bv4X1vBfSJ4gH6himxHVhG7YGC8X0fRTrM5Qg698135%2BgJ5zy6edtlsnO7LOsyNev11B7%2BcZ%2Fzdw01u31H1EJQy1lYIXVT0u2b6AjLfD96ZP

// payload

// U2FsdGVkX1%2BUX%2BY4Y71E%2Bv4X1vBfSJ4gH6himxHVhG7YGC8X0fRTrM5Qg698135%2BgJ5zy6edtlsnO7LOsyNev11B7%2BcZ%2Fzdw01u31H1EJQy1lYIXVT0u2b6AjLfD96ZP

// U2FsdGVkX1+UX+Y4Y71E+v4X1vBfSJ4gH6himxHVhG7YGC8X0fRTrM5Qg698135+gJ5zy6edtlsnO7LOsyNev11B7+cZ/zdw01u31H1EJQy1lYIXVT0u2b6AjLfD96Z

function C() {
  const router = useRouter();
  const payload = router.query.payload as string;
  const privateKey = 'chokowallet' as string;
  const seeds = 'detail farm install vintage buddy myself adapt tomato bind time toast gospel' as string;
  const [password, setPassword] = useState<string>('123');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');




  console.log("payload")
  console.log(payload)

  // const uri = 'U2FsdGVkX1+UX+Y4Y71E+v4X1vBfSJ4gH6himxHVhG7YGC8X0fRTrM5Qg698135+gJ5zy6edtlsnO7LOsyNev11B7+cZ/zdw01u31H1EJQy1lYIXVT0u2b6AjLfD96ZP';
  // const encoded = encodeURIComponent(uri);
  // console.log(encoded);
  // console.log('x');

  // console.log(decodeURIComponent(encoded));


  const apiFun1 = async (payload: string) => {
    console.log("1")
    if (!payload) return;
    console.log("2")
    const bytes = CryptoJS.AES.decrypt(decodeURIComponent(payload), privateKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log("3")
    if (originalText === '') return;//解密失败 return
    console.log("4")
    console.log(originalText); // 解密后的12seeds
    setModalOpen(true);
    // popup 输入密码 如果密码错误 return 如果密码正确 初始化账户





  }

  // const seeds = 'detail farm install vintage buddy myself adapt tomato bind time toast gospel'
  // const privateKey = 'chokowallet'

  // Encrypt
  // const ciphertext = CryptoJS.AES.encrypt(seeds, privateKey).toString();
  // console.log(ciphertext); // 加密后的密文

  // Decrypt
  // const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
  // const originalText = bytes.toString(CryptoJS.enc.Utf8);

  // console.log(originalText); // 解密后的明文


  useEffect(() => {
    apiFun1(payload);
  }, [payload])


  return (
    <div>C</div>
  )
}

export default C