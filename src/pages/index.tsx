import React, { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FiGithub, FiLogIn } from 'react-icons/fi';

import styles from '../styles/pages/Login.module.css';
import Head from 'next/head';

export default function Profile() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const { push } = useRouter();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      push(`/${username}`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | TimeUp</title>
      </Head>
      <div className={styles.content}>
        <img src="logo/logo-text.png" alt="Logo" />
        <strong>Bem-vindo</strong>

        <div className={styles.title}>
          <FiGithub size={36} />
          <span>Faça login com seu GitHub para iniciar.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu username"
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          <button type="submit">
            <FiLogIn size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}
