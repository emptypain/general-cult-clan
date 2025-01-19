"use client";

import {  Button, Heading, Box, Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import styles from "./auth.module.css";



export default function Login() {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <div className={styles.authContainer}>
      <Box className={styles.authBox}>
        <Heading as="h2" size="6" className={styles.authHeading}>
          Вход в систему
        </Heading>

        <Flex direction="column" gap="6" align="center" justify={"center"}>
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
              type="password" 
              placeholder="Введите пароль" 
              required 
            />
          </Box>

          <Button variant="solid" size="3">
            Войти
          </Button>
        </Flex>

        <Flex justify="between" className={styles.authLinks} direction={"column"}>
          <a href="/register" className={styles.authLink}>
            Нет аккаунта? Зарегистрируйтесь
          </a>
          <a href="/forgot-password" className={styles.authLink}>
            Забыли пароль?
          </a>
        </Flex>
      </Box>
    </div>
    </Theme>
    
  );
}