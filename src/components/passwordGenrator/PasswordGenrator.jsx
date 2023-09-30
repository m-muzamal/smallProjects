import React, { useState, useCallback, useEffect, useRef } from "react";
import "./passwordGenrator.css";

const PasswordGenrator = () => {
  const [range, setRange] = useState(8);
  const [password, setPassword] = useState("");
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= range; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [range, num, char, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [range, num, char, passwordGenerator]);

  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <h2 className="title">Password Genrator</h2>
          <div className="inputs">
            <input
              className="input"
              type="text"
              placeholder="password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button className="btn" onClick={copyPassword}>
              Copy
            </button>
          </div>
          <div className="selectors">
            <div className="check">
              <input
                type="range"
                value={range}
                min={8}
                max={50}
                onChange={(e) => setRange(e.target.value)}
              />
              <label className="label">Range({range})</label>
            </div>
            <div className="check">
              <input
                className="checkbox"
                type="checkbox"
                value={num}
                onChange={() => setNum((prev) => !prev)}
              />
              <label className="label">Numbers</label>
            </div>
            <div className="check">
              <input
                className="checkbox"
                type="checkbox"
                value={char}
                onChange={() => setChar((prev) => !prev)}
              />
              <label className="label">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenrator;
