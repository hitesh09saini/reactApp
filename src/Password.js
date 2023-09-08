import React, { useState, useCallback, useEffect, useRef } from 'react';

const Password = () => {
  const [length, setLength] = useState(8);
  const [NumAllow, setNumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumAllow) str += "0123456789";
    if (charAllow) str += "!@#$%&*_[]{}()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, NumAllow, charAllow, setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator])


  // useRef hook


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div className='flex justify-center'>
      <div className='max-md:w-8/12 w-5/12 select-none p-4 mt-10 rounded-xl bg-[#181718] '>
        <p className='m-4 text-center  text-xl text-white'>Password Generator</p>
        <div className='flex items-center'>
          <input
            type="text"
            value={password}
            className="outline-none  w-11/12 h-[40px] rounded-l-xl py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          /><button className='bg-blue-400 hover:bg-blue-600 rounded-r-xl text-white p-2' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='text-orange-600 flex gap-2 m-3 mx-0'>
          <input type="range" className='cursor-pointer' id="range" min={6} value={length} max={100} onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="range" className='cursor-pointer'>Length: {length}</label>
          <input type="checkbox" className='cursor-pointer' id="num" onChange={() => { setNumAllow((prev) => !prev) }} /> <label htmlFor="num" className='cursor-pointer'>Numbers</label>
          <input type="checkbox" className='cursor-pointer' id="char" onChange={() => { setcharAllow((prev) => !prev); }} /><label htmlFor="char" className='cursor-pointer'>Characters</label>
        </div>

      </div>

    </div>
  )
}

export default Password