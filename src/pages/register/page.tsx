"use client";

import { TextField, Button, Heading, Box, Flex } from "@radix-ui/themes";
import styles from "../styles/Auth.module.css";

export default function Register() {
    return (
      <div className={styles.authContainer}>
        <Box className={styles.authBox}>
          <Heading as="h2" size="4" className={styles.authHeading}>
            Регистрация
          </Heading>
  
          <Flex direction="column" gap="3">
            <Box maxWidth="300px">
              <TextField.Root size="3" placeholder="Введите имя" />
            </Box>
            <Box maxWidth="300px">
              <TextField.Root size="3" placeholder="Введите Email" type="email" />
            </Box>
            <Box maxWidth="300px">
              <TextField.Root size="3" placeholder="Введите пароль" type="password" />
            </Box>
            <Box>
              <Button className={styles.authButton} size="3" type="submit">
                Зарегистрироваться
              </Button>
            </Box>
          </Flex>
  
          <Flex justify="between" className={styles.authLinks}>
            <a href="/login" className={styles.authLink}>Уже есть аккаунт? Войти</a>
          </Flex>
        </Box>
      </div>
    );
  }