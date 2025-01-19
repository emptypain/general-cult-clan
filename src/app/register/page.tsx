"use client";

import { TextField, Button, Heading, Box, Flex, Theme } from "@radix-ui/themes";

import styles from "./register.module.css";
import "@radix-ui/themes/styles.css";

export default function Register() {
  return (
    <Theme  accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <div className={styles.authContainer}>
      <Box className={styles.authBox}>
        <Heading as="h4" size="6" className={styles.authHeading}>
          Регистрация
        </Heading>

        <Flex direction="column" gap="4" align="center">
          <Box className={styles.inputBox}>
            <input 
              className={styles.authInput} 
              type="text" 
              placeholder="Введите логин" 
              required 
            />
          </Box>
          <Box className={styles.inputBox}>
            <input 
              className={styles.authInput} 
              type="email" 
              placeholder="Введите Email" 
              required 
            />
          </Box>
          <Box className={styles.inputBox}>
            <input 
              className={styles.authInput} 
              type="password" 
              placeholder="Введите пароль" 
              required 
            />
          </Box>

          <Box className={styles.inputBox}>
            <input 
              className={styles.authInput} 
              type="password" 
              placeholder="Повторите пароль" 
              required 
            />
          </Box>

          <Button className={styles.authButton} size="3" type="submit">
            Зарегистрироваться
          </Button>
        </Flex>

        <Flex justify="center" className={styles.authLinks}>
          <a href="/login" className={styles.authLink}>
            Уже есть аккаунт? Войти
          </a>
        </Flex>
      </Box>
    </div>
    </Theme>
    
  );
}